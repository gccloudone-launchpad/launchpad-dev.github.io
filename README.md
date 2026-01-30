# GC Cloud One: LaunchPad website

This is the content of the public web prescense for the GC Cloud One: LaunchPad team.

We offer short-term, finantially-bound cloud experimentation spaces, supported by a dedicated advisory team.

Want to know more? Visit this site at [insertLinkHere]!

## How to use

This site is built using [Hugo](https://gohugo.io/), and a theme driven by the [GC Design System](https://design-system.alpha.canada.ca/en/).

To run a development instance you need:

- Go (v1.25.5)
- Hugo (v0.152.2)
- Node.js (24.12.0)

With those foundational dependencies installed, run `npm install` to install the required Node modules.

You should then be able run `hugo serve` and have the site available at [http://localhost:1313](http://localhost:1313).

### Installation

#### Windows

Installing using WinGet is probably best method, as it adds it to your PATH, and takes care of dependencies.

The following command-line should take care of all the things:

```shell
winget install Hugo.Hugo.Extended GoLang.Go
```

#### Linux

If you're running on Ubuntu, you can install Go with `sudo apt install golang`. Use DNF on RHEL clones.

For Hugo, download it from their Git repo's [Releases](https://github.com/gohugoio/hugo/releases) page.

For Node.js, we recommend using Node Version Manager (nvm) if you work on a number of projects, and might have Node version issues. To install NVM, run this command:

```text
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

To use version 24, run `nvm use 24`.

### VSCode

VSCode is the primary IDE used to work on this site, and it is stronly recommeded to install all extensions specified, as it will make your life easier/better.

There are also a few tasks defined to further make certain tasks automated in the IDE.

- *Start dev server*; starts a local instance, like above, with an extra flag to ensure that draft pages are also built locally.
- *Checks - Pages have translations*; checks that all pages are present in both languages.
- *Checks - Bilingual updates*; checks that that any changed pages, have had changes done in both languages.
- *Checks - Pages that Need Review*; Reports on pages that have `needs-review` shortcodes present.
