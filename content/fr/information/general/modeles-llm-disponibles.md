---
title: Liste des modèles LLM disponibles dans nos environnements
description: Cette page maintient une liste des modèles disponibles dans notre espace
translationKey: llm-model-availability
draft: false
---

{{% notice type="warning" title="Mise à jour des données" %}}
 Cette page peut être périmée, car elle est mise à jour manuellement et sert davantage à titre informatif que comme source de vérité. Suivez les liens ci-dessous pour obtenir des renseignements à jour et les prix.
{{% /notice %}}

## Aperçu

Voici un aperçu des fournisseurs de modèles par CSP. Pour plus de détails et une liste « complète », faites défiler vers le bas.

### Azure

- Alibaba
- Black Forest Labs
- Cohere
- DeepSeek
- Meta
- Microsoft
- Mistral AI
- Moonshot AI
- OpenAI
- xAI

### AWS

- Amazon
- Anthropic
- Cohere
- Meta
- Mistral AI
- TwelveLabs

### GCP

- AI21 Labs
- Alibaba
- Anthropic
- DeepSeek
- GLM
- Google
- Meta
- MiniMax
- Mistral AI
- Moonshot AI
- OpenAI OSS

## Azure

### Renseignements généraux

Voici les dernières informations sur les modèles Azure. Vous y trouverez les modèles officiellement disponibles ainsi que leur disponibilité selon l'emplacement : [Microsoft Learn](https://learn.microsoft.com/fr-ca/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure?view=foundry-classic&pivots=azure-openai&tabs=standard%2Cglobal-standard#gpt-4o-and-gpt-4-turbo).

Tarification OpenAI : [Azure](https://azure.microsoft.com/fr-ca/pricing/details/azure-openai/).

Tarification des autres modèles d'IA : [Azure](https://azure.microsoft.com/en-us/pricing/details/ai-foundry-models/model-router/).

### Tableau

| Fournisseur | Modèle | Utilisation | Emplacement | Date de lancement |
| - | - | - | - | - |
| Alibaba | qwen3-32b | Complétion de dialogue, Raisonnement | Fine-tuning uniquement | 2025-04-29 |
| Black Forest Labs | FLUX-1.1-pro | Texte vers image | Global endpoint, Data Zone | 2024-10-03 |
| Black Forest Labs | FLUX.1-Kontext-pro | Texte vers image, Image vers image, Modification d'image | Global endpoint, Data Zone | 2025-05-06 |
| Black Forest Labs | FLUX.2-flex | Texte vers image, Image vers image | Global endpoint, Data Zone | 2025 |
| Black Forest Labs | FLUX.2-pro | Texte vers image, Image vers image | Global endpoint, Data Zone | 2025-11 |
| Cohere | cohere-command-a | Complétion de dialogue, Utilisation d'outils, RAG | Global endpoint | 2025-03-13 |
| Cohere | Cohere-rerank-v4.0-fast | Reclassement de texte, Recherche sémantique | Global endpoint | 2025-04 |
| Cohere | Cohere-rerank-v4.0-pro | Reclassement de texte, Recherche sémantique | Global endpoint | 2025-04 |
| Cohere | embed-v-4-0 | Embeddings, Recherche sémantique, Synthèse | Global endpoint | 2025-04-24 |
| DeepSeek | DeepSeek-R1 | Complétion de dialogue, Raisonnement | Global endpoint, Data Zone | 2025-01-20 |
| DeepSeek | DeepSeek-R1-0528 | Complétion de dialogue, Raisonnement | Global endpoint, Data Zone | 2025-05-28 |
| DeepSeek | DeepSeek-V3-0324 | Complétion de dialogue | Global endpoint, Data Zone | 2025-03-24 |
| DeepSeek | DeepSeek-V3.1 | Complétion de dialogue | Global endpoint, Data Zone | 2025-06 |
| DeepSeek | DeepSeek-V3.2 | Complétion de dialogue | Global endpoint, Data Zone | 2025-09 |
| DeepSeek | DeepSeek-V3.2-Speciale | Complétion de dialogue | Global endpoint, Data Zone | 2025-09 |
| Meta | Llama-3.3-70B-Instruct | Complétion de dialogue, Utilisation d'outils | Global endpoint | 2024-12-06 |
| Meta | Llama-4-Maverick-17B-128E-Instruct-FP8 | Complétion de dialogue, Image vers texte, Multimodal | Global endpoint | 2025-04-05 |
| Microsoft | MAI-DS-R1 | Complétion de dialogue, Raisonnement | | 2025-04 |
| Mistral AI | mistral-document-ai-2505 | PDF vers texte, Image vers texte, Extraction de documents | Global endpoint, Data Zone | 2025-05 |
| Mistral AI | mistral-document-ai-2512 | PDF vers texte, Image vers texte, Extraction de documents | Global endpoint, Data Zone | 2025-12 |
| Mistral AI | Mistral-Large-3 | Complétion de dialogue, Utilisation d'outils, Génération de code | Global endpoint, Data Zone | 2025-06 |
| Moonshot AI | Kimi-K2-Thinking | Complétion de dialogue, Raisonnement | Global endpoint | 2025-07 |
| Moonshot AI | Kimi-K2.5 | Complétion de dialogue, Contexte long, Utilisation d'outils | Global endpoint | 2025-07 |
| OpenAI | codex-mini | Génération de code, Réponses | Global endpoint | 2025-05-16 |
| OpenAI | computer-use-preview | Utilisation de l'ordinateur | Global endpoint | 2025-03-11 |
| OpenAI | dall-e-3 | Texte vers image | Canada East | 2023-10-03 |
| OpenAI | davinci-002 | Complétion de texte, Base pour fine-tuning | Canada East | 2023-09-22 |
| OpenAI | gpt-image-1 | Texte vers image, Image vers image, Modification d'image | Global endpoint | 2025-04-15 |
| OpenAI | gpt-image-1-mini | Texte vers image | Global endpoint | 2025-10-06 |
| OpenAI | gpt-image-1.5 | Texte vers image, Image vers image, Modification d'image | Global endpoint | 2025-12-16 |
| OpenAI | gpt-35-turbo | Complétion de dialogue | Canada East | 2023-03-01 |
| OpenAI | gpt-35-turbo-16k | Complétion de dialogue, Contexte long | Canada East | 2023-06-13 |
| OpenAI | gpt-35-turbo-instruct | Complétion de texte | Canada East | 2023-09-22 |
| OpenAI | gpt-4 | Complétion de dialogue, Réponses | Canada East | 2023-03-14 |
| OpenAI | gpt-4-32k | Complétion de dialogue, Contexte long, Réponses | Canada East | 2023-03-14 |
| OpenAI | gpt-4.1 | Complétion de dialogue, Réponses, Utilisation d'outils | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.1-mini | Complétion de dialogue, Réponses, Utilisation d'outils | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.1-nano | Complétion de dialogue, Réponses | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.5-preview | Complétion de dialogue, Réponses, Utilisation d'outils | Global endpoint | 2025-02-27 |
| OpenAI | gpt-4o | Complétion de dialogue, Réponses, Multimodal, Utilisation d'outils | Canada East | 2024-11-20 |
| OpenAI | gpt-4o-audio-preview | Génération audio, Entrée/sortie audio | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini | Complétion de dialogue, Réponses, Multimodal | Canada East | 2024-07-18 |
| OpenAI | gpt-4o-mini-audio-preview | Génération audio, Entrée/sortie audio | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini-realtime-preview | Audio en temps réel, Génération audio | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini-transcribe | Parole vers texte, Transcription | Global endpoint | 2025-12-15 |
| OpenAI | gpt-4o-mini-tts | Texte vers parole | Global endpoint | 2025-12-15 |
| OpenAI | gpt-4o-realtime-preview | Audio en temps réel, Génération audio | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-transcribe | Parole vers texte, Transcription | Global endpoint | 2025-03-20 |
| OpenAI | gpt-4o-transcribe-diarize | Parole vers texte, Transcription, Diarisation des locuteurs | Global endpoint | 2025-10-15 |
| OpenAI | gpt-5 | Complétion de dialogue, Réponses, Multimodal, Utilisation d'outils | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-chat | Complétion de dialogue, Réponses | Canada East, Global endpoint | 2025-10-03 |
| OpenAI | gpt-5-codex | Génération de code, Complétion de dialogue, Réponses | Global endpoint | 2025-09-11 |
| OpenAI | gpt-5-mini | Complétion de dialogue, Réponses | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-nano | Complétion de dialogue, Réponses | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-pro | Complétion de dialogue, Réponses, Utilisation d'outils | Global endpoint | 2025-10-06 |
| OpenAI | gpt-5.1 | Complétion de dialogue, Réponses, Utilisation d'outils | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-chat | Complétion de dialogue, Réponses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-codex | Génération de code, Réponses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-codex-max | Génération de code, Réponses | Global endpoint | 2025-12-04 |
| OpenAI | gpt-5.1-codex-mini | Génération de code, Réponses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.2 | Complétion de dialogue, Réponses, Utilisation d'outils | Global endpoint | 2025-12-11 |
| OpenAI | gpt-5.2-chat | Complétion de dialogue, Réponses | Global endpoint | 2025-12-11 |
| OpenAI | gpt-5.2-codex | Génération de code, Réponses | Global endpoint | 2026-01-14 |
| OpenAI | gpt-5.3-codex | Génération de code, Réponses | Global endpoint | 2026-02-24 |
| OpenAI | gpt-5.4 | Complétion de dialogue, Réponses, Raisonnement, Multimodal, Utilisation d'outils | Global endpoint, Data Zone | 2026-03-05 |
| OpenAI | gpt-5.4-mini | Complétion de dialogue, Réponses, Raisonnement, Multimodal, Utilisation d'outils | Global endpoint, Data Zone | 2026-03-17 |
| OpenAI | gpt-5.4-nano | Complétion de dialogue, Réponses, Raisonnement | Global endpoint, Data Zone | 2026-03-17 |
| OpenAI | gpt-5.4-pro | Complétion de dialogue, Réponses, Raisonnement, Utilisation d'outils | Global endpoint | 2026-03-05 |
| OpenAI | gpt-audio | Génération audio, Entrée/sortie audio | Global endpoint | 2025-08-28 |
| OpenAI | gpt-audio-1.5 | Génération audio, Entrée/sortie audio | Global endpoint | 2026-02-23 |
| OpenAI | gpt-audio-mini | Génération audio, Entrée/sortie audio | Global endpoint | 2025-12-15 |
| OpenAI | gpt-oss-120b | Complétion de dialogue | Global endpoint | |
| OpenAI | gpt-oss-20b | Complétion de dialogue | Managed compute | |
| OpenAI | gpt-realtime | Audio en temps réel, Génération audio | Global endpoint | 2025-08-28 |
| OpenAI | gpt-realtime-1.5 | Audio en temps réel, Génération audio | Global endpoint | 2026-02-23 |
| OpenAI | gpt-realtime-mini | Audio en temps réel, Génération audio | Global endpoint | 2025-12-15 |
| OpenAI | model-router | Complétion de dialogue, Routage automatique de modèles | Global endpoint | 2025-11-18 |
| OpenAI | o1 | Complétion de dialogue, Réponses, Raisonnement | Canada East | 2024-12-17 |
| OpenAI | o1-mini | Complétion de dialogue, Réponses, Raisonnement | Global endpoint, Data Zone | 2024-09-12 |
| OpenAI | o1-preview | Complétion de dialogue, Réponses, Raisonnement | Canada East | 2024-09-12 |
| OpenAI | o3 | Complétion de dialogue, Réponses, Raisonnement | Canada East, Global endpoint, Data Zone | 2025-04-16 |
| OpenAI | o3-deep-research | Recherche approfondie, Génération de données, Raisonnement | Global endpoint | 2025-06-26 |
| OpenAI | o3-mini | Complétion de dialogue, Réponses, Raisonnement | Canada East, Global endpoint, Data Zone | 2025-01-31 |
| OpenAI | o3-pro | Complétion de dialogue, Réponses, Raisonnement | Global endpoint | 2025-06-10 |
| OpenAI | o4-mini | Complétion de dialogue, Réponses, Raisonnement | Canada East, Global endpoint, Data Zone | 2025-04-16 |
| OpenAI | sora | Génération de vidéos | Global endpoint | 2025-05-02 |
| OpenAI | sora-2 | Génération de vidéos | Global endpoint | 2025-10-06 |
| OpenAI | text-embedding-3-large | Embeddings, Recherche sémantique | Canada East | 2024-01-25 |
| OpenAI | text-embedding-3-small | Embeddings, Recherche sémantique | Canada East | 2024-01-25 |
| OpenAI | text-embedding-ada-002 | Embeddings, Recherche sémantique | Canada East | 2022-12-15 |
| OpenAI | tts | Texte vers parole | Canada East | 2023-11-06 |
| OpenAI | tts-hd | Texte vers parole, Audio haute qualité | Canada East | 2023-11-06 |
| OpenAI | whisper | Parole vers texte, Reconnaissance automatique de la parole, Traduction | Canada East | 2022-09-21 |
| xAI | grok-3 | Complétion de dialogue, Utilisation d'outils | Global endpoint, Data Zone | 2025-02-17 |
| xAI | grok-3-mini | Complétion de dialogue, Raisonnement | Global endpoint, Data Zone | 2025-02-17 |
| xAI | grok-4 | Complétion de dialogue, Raisonnement, Utilisation d'outils | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-4-fast-non-reasoning | Complétion de dialogue | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-4-fast-reasoning | Complétion de dialogue, Raisonnement | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-4.1-fast-non-reasoning | Complétion de dialogue | Global endpoint, Data Zone | 2026 |
| xAI | grok-4.1-fast-reasoning | Complétion de dialogue, Raisonnement | Global endpoint, Data Zone | 2026 |
| xAI | grok-code-fast-1 | Génération de code, Complétion de dialogue | Global endpoint, Data Zone | 2025-08 |

## AWS

### Renseignements généraux

Voici une liste à jour des modèles disponibles dans AWS. Assurez-vous qu'il ne s'agit pas d'un modèle de marché tiers : [Bedrock models](https://docs.aws.amazon.com/fr_fr/bedrock/latest/userguide/models-supported.html).

Voici également la tarification de Bedrock : [Bedrock model pricing](https://aws.amazon.com/fr/bedrock/pricing/)

### Tableau

| Fournisseur | Modèle | Utilisation | Emplacement | Date de lancement |
| - | - | - | - | - |
| Amazon | Nova 2 Lite | Complétion de dialogue, Image vers texte, Vidéo vers texte, Multimodal | Serverless, Cross-region inference | 2025 |
| Amazon | Nova Lite | Complétion de dialogue, Agents, RAG, Génération de texte, Synthèse, Traduction, Image vers texte, Vidéo vers texte, Multimodal | Serverless, Cross-region inference | 2024-12-03 |
| Amazon | Rerank 1.0 | Reclassement de texte, Recherche sémantique | Serverless | 2024 |
| Amazon | Titan Multimodal Embeddings G1 | Embeddings, Recherche multimodale | Serverless | 2023-11-28 |
| Amazon | Titan Text Embeddings V2 | Embeddings, Recherche sémantique | Serverless | 2024-04-23 |
| Anthropic | Claude 3 Haiku | Complétion de dialogue, Image vers texte, Conversation | Serverless | 2024-03-13 |
| Anthropic | Claude 3 Sonnet | Complétion de dialogue, Image vers texte, Génération de code, Raisonnement complexe, Multilingue | Serverless | 2024-03-04 |
| Anthropic | Claude Haiku 4.5 | Complétion de dialogue, Raisonnement, Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Opus 4.5 | Complétion de dialogue, Raisonnement (modèle de réflexion), Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Recherche agentique | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Opus 4.6 | Complétion de dialogue, Raisonnement hybride, Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Recherche agentique, Mémoire | Serverless, Cross-region inference | 2025 |
| Anthropic | Claude Sonnet 4.5 | Complétion de dialogue, Raisonnement (modèle de réflexion), Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Recherche agentique | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Sonnet 4.6 | Complétion de dialogue, Raisonnement hybride, Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Recherche agentique, Mémoire | Serverless, Cross-region inference | 2025 |
| Cohere | Embed English | Embeddings, Recherche sémantique | Serverless | 2023 |
| Cohere | Embed Multilingual | Embeddings, Recherche sémantique multilingue | Serverless | 2023 |
| Cohere | Embed v4 | Embeddings, Multimodal, Recherche sémantique multilingue | Serverless, Cross-region inference | 2025-04-24 |
| Cohere | Rerank 3.5 | Reclassement de texte, Recherche sémantique | Serverless | 2024-10 |
| Meta | Llama 3 70B Instruct | Complétion de dialogue, Génération de code, Classification de texte, Analyse de sentiment, Synthèse | Serverless | 2024-04-18 |
| Meta | Llama 3 8B Instruct | Complétion de dialogue, Résumé de texte, Classification de texte, Analyse de sentiment | Serverless | 2024-04-18 |
| Mistral AI | Mistral 7B Instruct | Complétion de dialogue, Génération de texte, Génération de code, Classification de texte | Serverless | 2023-09-27 |
| Mistral AI | Mistral Large (24.02) | Complétion de dialogue, Raisonnement complexe, Génération de code, RAG, Agents | Serverless | 2024-02-26 |
| Mistral AI | Mixtral 8x7B Instruct | Complétion de dialogue, Raisonnement complexe, Génération de texte, Génération de code | Serverless | 2023-12-11 |
| TwelveLabs | Pegasus 1.2 | Vidéo vers texte, Multimodal, Compréhension vidéo | Serverless, Cross-region inference | 2024 |

## GCP

### Renseignements généraux

Voici la liste à jour des modèles offerts par GCP dans notre environnement : [Google Cloud docs](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-partner-models?hl=fr)

Renseignements sur la tarification : [Pricing information GCP](https://cloud.google.com/vertex-ai/generative-ai/pricing?hl=fr)

### Tableau

| Fournisseur | Modèle | Utilisation | Emplacement | Date de lancement |
| - | - | - | - | - |
| AI21 Labs | Jamba 1.5 Large | Complétion de dialogue, Contexte long, Haute qualité | Serverless | 2024-08 |
| AI21 Labs | Jamba 1.5 Mini | Complétion de dialogue, Haut débit, Faible coût | Serverless | 2024-08 |
| Alibaba | Qwen3 235B | Complétion de dialogue, Raisonnement (mode de réflexion hybride) | Serverless | 2025-04-29 |
| Alibaba | Qwen3 Coder | Génération de code, Développement logiciel | Serverless | 2025 |
| Alibaba | Qwen3-Next-80B Instruct | Complétion de dialogue, Suivi d'instructions, Génération de code | Serverless | 2025 |
| Alibaba | Qwen3-Next-80B Thinking | Complétion de dialogue, Raisonnement (modèle de réflexion), Génération de code | Serverless | 2025 |
| Anthropic | Claude 3.5 Sonnet | Complétion de dialogue, Génération de code, Raisonnement complexe | Serverless | 2024-06-20 |
| Anthropic | Claude 3.5 Sonnet v2 | Complétion de dialogue, Génération de code, Agentique, Raisonnement complexe | Serverless | 2024-10-22 |
| Anthropic | Claude 3.7 Sonnet | Complétion de dialogue, Génération de code, Agentique, Raisonnement complexe | Serverless | 2025-02-24 |
| Anthropic | Claude Haiku 4.5 | Complétion de dialogue, Génération de code, Utilisation d'outils, Haut débit | Serverless | 2025-07-22 |
| Anthropic | Claude Opus 4 | Complétion de dialogue, Raisonnement, Génération de code, Agentique, Tâches de longue durée | Serverless | 2025-05-22 |
| Anthropic | Claude Opus 4.1 | Complétion de dialogue, Raisonnement, Génération de code, Agentique, Tâches de longue durée | Serverless | 2025-07 |
| Anthropic | Claude Opus 4.5 | Complétion de dialogue, Raisonnement (modèle de réflexion), Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal | Serverless | 2025-07-22 |
| Anthropic | Claude Opus 4.6 | Complétion de dialogue, Raisonnement hybride, Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Agentique | Serverless | 2025 |
| Anthropic | Claude Sonnet 4 | Complétion de dialogue, Génération de code, Agentique, RAG, Grand volume | Serverless | 2025-02-24 |
| Anthropic | Claude Sonnet 4.5 | Complétion de dialogue, Raisonnement (modèle de réflexion), Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal | Serverless | 2025-07-22 |
| Anthropic | Claude Sonnet 4.6 | Complétion de dialogue, Raisonnement hybride, Génération de code, Utilisation de l'ordinateur, Utilisation d'outils, Multimodal, Agentique | Serverless | 2025 |
| DeepSeek | DeepSeek-OCR | Image vers texte, PDF vers texte, Extraction de documents, OCR | Serverless | 2025 |
| DeepSeek | DeepSeek-R1 (0528) | Complétion de dialogue, Raisonnement (modèle de réflexion) | Serverless | 2025-05-28 |
| DeepSeek | DeepSeek-V3.1 | Complétion de dialogue, Raisonnement (mode de réflexion hybride) | Serverless | 2025-06 |
| DeepSeek | DeepSeek-V3.2 | Complétion de dialogue, Raisonnement, Agentique | Serverless | 2025-09 |
| GLM | GLM 4.7 | Complétion de dialogue, Génération de code, Utilisation d'outils, Raisonnement complexe | Serverless | 2025 |
| GLM | GLM 5 | Complétion de dialogue, Génération de code, Agentique, Ingénierie de systèmes complexes | Serverless | 2025 |
| Google | Bart-large-cnn | Résumé de texte, Génération séquence à séquence | Serverless | 2020 |
| Google | BERT | Compréhension du langage naturel, Réponse aux questions, Classification de texte | Serverless | 2018-10 |
| Google | BERT (PEFT) | NLP avec fine-tuning, Réponse aux questions | Serverless | 2023 |
| Google | Chirp 2 | Parole vers texte, Reconnaissance automatique de la parole, Multilingue | Serverless | 2024 |
| Google | Chirp 3 | Parole vers texte, Reconnaissance automatique de la parole, Multilingue | Serverless | 2025 |
| Google | CodeGemma | Génération de code, Complétion de code | Serverless | 2024-04 |
| Google | CXR Foundation | Embeddings médicaux, Analyse de radiographies pulmonaires | Serverless | 2024 |
| Google | Derm Foundation | Embeddings médicaux, Analyse d'images dermatologiques | Serverless | 2024 |
| Google | Derm Foundation | Embeddings médicaux, Analyse d'images dermatologiques | Serverless | 2024 |
| Google | DITO | Détection d'objets, Segmentation d'image, Vocabulaire ouvert | Serverless | 2023 |
| Google | EmbeddingGemma | Embeddings, Recherche sémantique | Serverless | 2025 |
| Google | Embeddings for Multimodal | Embeddings multimodaux, Recherche d'images, Classification | Serverless | 2023 |
| Google | Embeddings for Text (multilingual) | Embeddings de texte, Recherche sémantique multilingue | Serverless | 2023 |
| Google | Embeddings for Text (text-embedding-005) | Embeddings de texte, Recherche sémantique, Classification | Serverless | 2024 |
| Google | Embeddings for Text (text-embedding-large-exp) | Embeddings de texte, Recherche sémantique | Serverless | 2025 |
| Google | F-VLM (Deprecated) | Détection d'objets, Vocabulaire ouvert | Serverless | 2022 |
| Google | FunctionGemma | Appel de fonctions, Utilisation d'outils, Tâches agentiques | Serverless | 2025 |
| Google | Gemini 2.0 Flash | Complétion de dialogue, Multimodal, Utilisation d'outils, API en temps réel | Serverless | 2025-02 |
| Google | Gemini 2.0 Flash-Lite | Complétion de dialogue, Multimodal, Haut débit | Serverless | 2025-02 |
| Google | Gemini 2.5 Flash | Complétion de dialogue, Raisonnement, Multimodal, Utilisation d'outils | Serverless | 2025-05-20 |
| Google | Gemini 2.5 Flash Image Preview | Complétion de dialogue, Texte vers image, Modification d'image | Serverless | 2025 |
| Google | Gemini 2.5 Flash Image (Nano Banana) | Complétion de dialogue, Texte vers image, Modification d'image | Serverless | 2025 |
| Google | Gemini 2.5 Flash-Lite | Complétion de dialogue, Multimodal, Faible latence | Serverless | 2025-09 |
| Google | Gemini 2.5 Flash-Lite Preview | Complétion de dialogue, Multimodal, Faible latence | Serverless | 2025-09 |
| Google | Gemini 2.5 Flash Preview | Complétion de dialogue, Multimodal | Serverless | 2025-09 |
| Google | Gemini 2.5 Pro | Complétion de dialogue, Raisonnement, Génération de code, Requêtes complexes, Multimodal | Serverless | 2025-05-06 |
| Google | Gemini 3 Flash Preview | Complétion de dialogue, Raisonnement, Génération de code, Multimodal, Agentique | Serverless | 2026 |
| Google | Gemini 3 Pro Image Preview | Complétion de dialogue, Texte vers image, Modification d'image, Multimodal | Serverless | 2026 |
| Google | Gemini 3 Pro Preview | Complétion de dialogue, Raisonnement, Génération de code, Multimodal, Agentique | Serverless | 2026 |
| Google | Gemini 3.1 Pro Preview | Complétion de dialogue, Raisonnement, Génération de code, Multimodal, Agentique, Contexte long | Serverless | 2026 |
| Google | Gemini Computer Use Preview | Utilisation de l'ordinateur, Automatisation du navigateur, Interaction avec l'interface utilisateur | Serverless | 2025-10 |
| Google | Gemini Embedding 001 | Embeddings, Recherche sémantique, Classification, Regroupement | Serverless | 2025-03 |
| Google | Gemma | Complétion de dialogue, Génération de texte | Serverless | 2024-02 |
| Google | Gemma 2 | Complétion de dialogue, Génération de texte | Serverless | 2024-06 |
| Google | Gemma 3 | Complétion de dialogue, Génération de texte | Serverless | 2025-03-12 |
| Google | Gemma 3n | Complétion de dialogue, Génération de texte, Multimodal | Serverless | 2025-05 |
| Google | HeAR | Embeddings médicaux, Analyse acoustique de santé | Serverless | 2024 |
| Google | Imagen 2 for Generation and Editing | Texte vers image, Modification d'image, Retouche d'image | Serverless | 2023 |
| Google | Imagen 3 for Editing and Customization | Modification d'image, Retouche d'image, Génération d'images de référence | Serverless | 2024 |
| Google | Imagen 3 for Generation | Texte vers image | Serverless | 2024 |
| Google | Imagen 4 Fast | Texte vers image | Serverless | 2025-05 |
| Google | Imagen 4 Fast Preview | Texte vers image | Serverless | 2025-06 |
| Google | Imagen 4 Ultra | Texte vers image, Haute qualité | Serverless | 2025-05 |
| Google | Imagen 4 Ultra Preview | Texte vers image, Haute qualité | Serverless | 2025-06 |
| Google | Imagen 4 | Texte vers image | Serverless | 2025-05 |
| Google | Imagen 4 Preview | Texte vers image | Serverless | 2025-06 |
| Google | Imagen for Captioning & VQA | Sous-titrage d'images, Réponse aux questions visuelles | Serverless | 2023 |
| Google | Imagen Product Recontext | Génération d'images de produit, Modification d'image | Serverless | 2025-06 |
| Google | Imagery - Classification and Retrieval | Télédétection, Classification d'images satellites, Récupération zéro-shot | Serverless | 2025-10 |
| Google | Imagery - Object Detection | Télédétection, Détection d'objets sur images satellites | Serverless | 2025-10 |
| Google | Label detector (PaLI zero-shot) | Classification d'images, Détection zéro-shot | Serverless | 2023 |
| Google | Lyria 2 | Génération musicale, Texte vers audio | Serverless | 2025-06 |
| Google | MaMMUT | Réponse aux questions visuelles, Multimodal | Serverless | 2023 |
| Google | MedASR | Parole vers texte, ASR en domaine médical | Serverless | 2025 |
| Google | MedGemma | Compréhension de texte et d'images médicaux | Serverless | 2025-05 |
| Google | MedSigLIP | Embeddings médicaux d'images et de texte | Serverless | 2024 |
| Google | OWL-ViT | Détection d'objets zéro-shot, Vocabulaire ouvert | Serverless | 2022 |
| Google | OWL-ViT v2 | Détection d'objets zéro-shot, Vocabulaire ouvert | Serverless | 2023 |
| Google | PaliGemma 1 & 2 | Multimodal, Compréhension d'images, QR visuelle | Serverless | 2024-12 |
| Google | Path Foundation | Embeddings médicaux, Analyse d'images pathologiques | Serverless | 2024 |
| Google | ShieldGemma 2 | Sécurité du contenu, Modération | Serverless | 2025-05 |
| Google | T5-1.1 | Texte vers texte, Génération séquence à séquence | Serverless | 2020 |
| Google | T5-FLAN | Texte vers texte, Suivi d'instructions | Serverless | 2022 |
| Google | T5Gemma | Texte vers texte, Suivi d'instructions | Serverless | 2025 |
| Google | TimesFM | Prévision de séries temporelles | Serverless | 2024 |
| Google | TranslateGemma | Traduction automatique, Multilingue | Serverless | 2025 |
| Google | TxGemma | Prédiction thérapeutique, Découverte de médicaments, Classification médicale | Serverless | 2025 |
| Google | Veo 2 | Génération de vidéos | Serverless | 2025-01 |
| Google | Veo 3 | Génération de vidéos, Audio | Serverless | 2025-05-21 |
| Google | Veo 3 Fast | Génération de vidéos, Audio | Serverless | 2025-05 |
| Google | Veo 3 Fast Preview | Génération de vidéos, Audio | Serverless | 2025-05 |
| Google | Veo 3 Preview | Génération de vidéos, Audio | Serverless | 2025-05 |
| Google | Veo 3.1 | Génération de vidéos, Audio | Serverless | 2025 |
| Google | Veo 3.1 Fast | Génération de vidéos, Audio | Serverless | 2025 |
| Google | Veo 3.1 Fast Preview | Génération de vidéos, Audio | Serverless | 2025 |
| Google | Veo 3.1 Preview | Génération de vidéos, Audio | Serverless | 2025 |
| Google | Vertex Image Segmentation | Segmentation d'image, Génération de masques | Serverless | 2025 |
| Google | WeatherNext 2 | Prévisions météorologiques, Prédiction par IA | Serverless | 2025 |
| Google | WeatherNext Demo | Prévisions météorologiques, Prédiction par IA | Serverless | 2024 |
| Meta | Llama 3.3 | Complétion de dialogue, Utilisation d'outils, Génération de texte | Serverless | 2024-12-06 |
| Meta | Llama 4 Maverick 17B-128E | Complétion de dialogue, Raisonnement, Génération de code, Image vers texte, Multimodal | Serverless | 2025-04-05 |
| Meta | Llama 4 Scout 17B-16E | Complétion de dialogue, Raisonnement, Multimodal | Serverless | 2025-04-05 |
| MiniMax | MiniMax M2 | Complétion de dialogue, Génération de code, Agentique, Utilisation d'outils, Planification | Serverless | 2025 |
| Mistral AI | Codestral 2 | Génération de code, Complétion de code, Complétion médiane | Serverless | 2025 |
| Mistral AI | Mistral Medium 3 | Complétion de dialogue, Génération de code, Raisonnement, Synthèse, Compréhension de documents longs | Serverless | 2025-05 |
| Mistral AI | Mistral OCR (25.05) | PDF vers texte, Image vers texte, Extraction de documents, OCR | Serverless | 2025-05 |
| Mistral AI | Mistral Small 3.1 (25.03) | Complétion de dialogue, Multimodal, Contexte long | Serverless | 2025-03 |
| Moonshot AI | Kimi K2 Thinking | Complétion de dialogue, Raisonnement (modèle de réflexion), Utilisation d'outils, Agentique | Serverless | 2025-07 |
| OpenAI | gpt-oss 120B | Complétion de dialogue, Raisonnement | Serverless | 2025 |
| OpenAI | gpt-oss 20B | Complétion de dialogue, Déploiement en périphérie, Efficacité | Serverless | 2025 |
