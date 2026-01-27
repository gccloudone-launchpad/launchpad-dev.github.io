#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('front-matter');

// ANSI color codes for pretty output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

const contentDir = path.join(process.cwd(), 'content');

/**
 * Get list of changed files in the PR
 */
function getChangedFiles() {
  try {
    // Try to get the base ref from GitHub Actions environment
    const baseRef = process.env.GITHUB_BASE_REF || 'origin/main';
    const headRef = process.env.GITHUB_HEAD_REF || 'HEAD';
    
    // Get list of changed files compared to base branch
    const gitCommand = `git diff --name-only ${baseRef}...${headRef}`;
    const output = execSync(gitCommand, { encoding: 'utf8' });
    
    return output
      .split('\n')
      .filter(file => file.trim() !== '')
      .filter(file => file.endsWith('.md'))
      .filter(file => file.startsWith('content/'))
      .filter(file => !file.startsWith('content/splash/'));
  } catch (error) {
    console.error(`${colors.yellow}Warning: Could not get changed files from git. Falling back to all files.${colors.reset}`);
    console.error(`${colors.yellow}Error: ${error.message}${colors.reset}\n`);
    return null;
  }
}

/**
 * Extract metadata from markdown file
 */
function getFileMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    return {
      translationKey: parsed.attributes.translationKey || null,
      isDraft: parsed.attributes.draft === true || parsed.attributes.draft === 'true',
    };
  } catch (error) {
    console.error(`${colors.red}Error reading file ${filePath}: ${error.message}${colors.reset}`);
    return { translationKey: null, isDraft: false };
  }
}

/**
 * Main function to check bilingual updates
 */
function checkBilingualUpdates() {
  console.log(`${colors.bold}${colors.cyan}=== Bilingual Update Checker ===${colors.reset}\n`);
  
  // Get changed files from PR
  const changedFilesRelative = getChangedFiles();
  
  if (!changedFilesRelative || changedFilesRelative.length === 0) {
    console.log(`${colors.yellow}No changed markdown files found.${colors.reset}\n`);
    process.exit(0);
  }
  
  console.log(`Found ${colors.blue}${changedFilesRelative.length}${colors.reset} changed markdown file(s)\n`);
  
  // Separate files by language
  const changedEnFiles = [];
  const changedFrFiles = [];
  
  for (const relPath of changedFilesRelative) {
    const fullPath = path.join(process.cwd(), relPath);
    
    if (!fs.existsSync(fullPath)) {
      continue; // File might have been deleted
    }
    
    const metadata = getFileMetadata(fullPath);
    const fileInfo = {
      fullPath,
      relativePath: relPath,
      translationKey: metadata.translationKey,
      isDraft: metadata.isDraft,
    };
    
    if (relPath.startsWith('content/en/')) {
      changedEnFiles.push(fileInfo);
    } else if (relPath.startsWith('content/fr/')) {
      changedFrFiles.push(fileInfo);
    }
  }
  
  // Build maps of translationKey -> file for changed files
  const changedEnKeyMap = new Map();
  const changedFrKeyMap = new Map();
  
  // Track files without translation keys
  const enFilesWithoutKey = [];
  const frFilesWithoutKey = [];
  
  // Track draft files
  const enDraftFiles = [];
  const frDraftFiles = [];
  
  // Process changed English files
  for (const file of changedEnFiles) {
    if (file.isDraft) {
      enDraftFiles.push(file);
      continue; // Skip draft files from validation
    }
    
    if (file.translationKey) {
      changedEnKeyMap.set(file.translationKey, file);
    } else {
      enFilesWithoutKey.push(file);
    }
  }
  
  // Process changed French files
  for (const file of changedFrFiles) {
    if (file.isDraft) {
      frDraftFiles.push(file);
      continue; // Skip draft files from validation
    }
    
    if (file.translationKey) {
      changedFrKeyMap.set(file.translationKey, file);
    } else {
      frFilesWithoutKey.push(file);
    }
  }
  
  // Find missing bilingual updates
  const missingFrUpdates = [];
  const missingEnUpdates = [];
  
  for (const [key, file] of changedEnKeyMap) {
    if (!changedFrKeyMap.has(key)) {
      // Check if French file exists at all
      const frPath = file.relativePath.replace('content/en/', 'content/fr/');
      if (fs.existsSync(path.join(process.cwd(), frPath))) {
        missingFrUpdates.push({ key, enFile: file });
      }
    }
  }
  
  for (const [key, file] of changedFrKeyMap) {
    if (!changedEnKeyMap.has(key)) {
      // Check if English file exists at all
      const enPath = file.relativePath.replace('content/fr/', 'content/en/');
      if (fs.existsSync(path.join(process.cwd(), enPath))) {
        missingEnUpdates.push({ key, frFile: file });
      }
    }
  }
  
  // Report results
  let hasErrors = false;
  let hasWarnings = false;
  
  // Report draft files (warning only)
  if (enDraftFiles.length > 0 || frDraftFiles.length > 0) {
    hasWarnings = true;
    console.log(`${colors.bold}${colors.yellow}⚠ Draft files (excluded from validation):${colors.reset}`);
    
    if (enDraftFiles.length > 0) {
      console.log(`  ${colors.blue}English drafts:${colors.reset}`);
      for (const file of enDraftFiles) {
        console.log(`    ${colors.yellow}•${colors.reset} ${file.relativePath}${file.translationKey ? ` (key: ${colors.magenta}${file.translationKey}${colors.reset})` : ` ${colors.yellow}(no key)${colors.reset}`}`);
      }
    }
    
    if (frDraftFiles.length > 0) {
      console.log(`  ${colors.blue}French drafts:${colors.reset}`);
      for (const file of frDraftFiles) {
        console.log(`    ${colors.yellow}•${colors.reset} ${file.relativePath}${file.translationKey ? ` (key: ${colors.magenta}${file.translationKey}${colors.reset})` : ` ${colors.yellow}(no key)${colors.reset}`}`);
      }
    }
    console.log();
  }

  
  // Missing French updates
  if (missingFrUpdates.length > 0) {
    hasErrors = true;
    console.log(`${colors.bold}${colors.red}✗ English files updated but French translation not updated:${colors.reset}`);
    for (const { key, enFile } of missingFrUpdates) {
      console.log(`  ${colors.red}•${colors.reset} ${colors.magenta}${key}${colors.reset}`);
      console.log(`    EN: ${enFile.relativePath}`);
      console.log(`    FR: ${enFile.relativePath.replace('content/en/', 'content/fr/')} ${colors.yellow}(not updated)${colors.reset}`);
    }
    console.log();
  }
  
  // Missing English updates
  if (missingEnUpdates.length > 0) {
    hasErrors = true;
    console.log(`${colors.bold}${colors.red}✗ French files updated but English source not updated:${colors.reset}`);
    for (const { key, frFile } of missingEnUpdates) {
      console.log(`  ${colors.red}•${colors.reset} ${colors.magenta}${key}${colors.reset}`);
      console.log(`    FR: ${frFile.relativePath}`);
      console.log(`    EN: ${frFile.relativePath.replace('content/fr/', 'content/en/')} ${colors.yellow}(not updated)${colors.reset}`);
    }
    console.log();
  }
  
  // Summary
  if (!hasErrors) {
    console.log(`${colors.bold}${colors.green}✓ All bilingual updates are in sync!${colors.reset}`);
    console.log(`  ${changedEnKeyMap.size} English file(s) updated`);
    console.log(`  ${changedFrKeyMap.size} French file(s) updated`);
    if (hasWarnings) {
      console.log(`  ${colors.yellow}${enDraftFiles.length + frDraftFiles.length} draft file(s) excluded from validation${colors.reset}`);
      if (enFilesWithoutKey.length + frFilesWithoutKey.length > 0) {
        console.log(`  ${colors.yellow}${enFilesWithoutKey.length + frFilesWithoutKey.length} file(s) without translationKey${colors.reset}`);
      }
    }
    console.log();
    process.exit(0);
  } else {
    console.log(`${colors.bold}${colors.red}✗ Bilingual update mismatches found!${colors.reset}\n`);
    console.log(`Summary:`);
    console.log(`  • EN files updated: ${changedEnKeyMap.size}`);
    console.log(`  • FR files updated: ${changedFrKeyMap.size}`);
    console.log(`  • Missing FR updates: ${missingFrUpdates.length}`);
    console.log(`  • Missing EN updates: ${missingEnUpdates.length}`);
    if (hasWarnings) {
      console.log(`  • ${colors.yellow}Draft files: ${enDraftFiles.length + frDraftFiles.length} (warning)${colors.reset}`);
      if (enFilesWithoutKey.length + frFilesWithoutKey.length > 0) {
        console.log(`  • ${colors.yellow}Files without key: ${enFilesWithoutKey.length + frFilesWithoutKey.length} (warning)${colors.reset}`);
      }
    }
    console.log();
    process.exit(1);
  }
}

// Run the checker
checkBilingualUpdates();
