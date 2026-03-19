---
description: This page maintains a list of available models in our space
title: List of available LLM models in our environments
translationKey: llm-model-availability
draft: false
---

{{% notice type="warning" title="Data Classification" %}}
 This page might be out of date as it is updated manually and stands more as a informative page than a base of truth. Follow the links below for more up to date information and pricing as well.
{{% /notice %}}

## Overview

Here is an overview of the model providers by CSP. For more details and a "complete" list, scroll down.

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

### General information

Here is the latest information on Azure models, you can find officially available models as well as their location availability: [Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure?view=foundry-classic&pivots=azure-openai&tabs=standard%2Cglobal-standard#gpt-4o-and-gpt-4-turbo).

OpenAI pricing: [Azure](https://azure.microsoft.com/en-us/pricing/details/azure-openai/).

Other AI model pricing: [Azure](https://azure.microsoft.com/en-us/pricing/details/ai-foundry-models/model-router/).

### Table

| Provider | Model | Purpose | Location | Release Date |
| - | - | - | - | - |
| Alibaba | qwen3-32b | Chat completion, Reasoning | Fine tuning only | 2025-04-29 |
| Black Forest Labs | FLUX-1.1-pro | Text to image | Global endpoint, Data Zone | 2024-10-03 |
| Black Forest Labs | FLUX.1-Kontext-pro | Text to image, Image to image, Image editing | Global endpoint, Data Zone | 2025-05-06 |
| Black Forest Labs | FLUX.2-pro | Text to image, Image to image | Global endpoint, Data Zone | 2025-11 |
| Cohere | cohere-command-a | Chat completion, Tool use, RAG | Global endpoint | 2025-03-13 |
| Cohere | Cohere-rerank-v4.0-fast | Text reranking, Semantic search | Global endpoint | 2025-04 |
| Cohere | Cohere-rerank-v4.0-pro | Text reranking, Semantic search | Global endpoint | 2025-04 |
| Cohere | embed-v-4-0 | Embeddings, Semantic search, Summarization | Global endpoint | 2025-04-24 |
| DeepSeek | DeepSeek-R1 | Chat completion, Reasoning | Global endpoint, Data Zone | 2025-01-20 |
| DeepSeek | DeepSeek-R1-0528 | Chat completion, Reasoning | Global endpoint, Data Zone | 2025-05-28 |
| DeepSeek | DeepSeek-V3-0324 | Chat completion | Global endpoint, Data Zone | 2025-03-24 |
| DeepSeek | DeepSeek-V3.1 | Chat completion | Global endpoint, Data Zone | 2025-06 |
| DeepSeek | DeepSeek-V3.2 | Chat completion | Global endpoint, Data Zone | 2025-09 |
| DeepSeek | DeepSeek-V3.2-Speciale | Chat completion | Global endpoint, Data Zone | 2025-09 |
| Meta | Llama-3.3-70B-Instruct | Chat completion, Tool use | Global endpoint | 2024-12-06 |
| Meta | Llama-4-Maverick-17B-128E-Instruct-FP8 | Chat completion, Image to text, Multimodal | Global endpoint | 2025-04-05 |
| Microsoft | MAI-DS-R1 | Chat completion, Reasoning | | 2025-04 |
| Mistral AI | mistral-document-ai-2505 | PDF to text, Image to text, Document parsing | Global endpoint, Data Zone | 2025-05 |
| Mistral AI | mistral-document-ai-2512 | PDF to text, Image to text, Document parsing | Global endpoint, Data Zone | 2025-12 |
| Mistral AI | Mistral-Large-3 | Chat completion, Tool use, Code generation | Global endpoint, Data Zone | 2025-06 |
| Moonshot AI | Kimi-K2-Thinking | Chat completion, Reasoning | Global endpoint | 2025-07 |
| Moonshot AI | Kimi-K2.5 | Chat completion, Long context, Tool use | Global endpoint | 2025-07 |
| OpenAI | codex-mini | Code generation, Responses | Global endpoint | 2025-05-16 |
| OpenAI | dall-e-3 | Text to image | Canada East | 2023-10-03 |
| OpenAI | davinci-002 | Text completion, Fine-tuning base | Canada East | 2023-09-22 |
| OpenAI | gpt-image-1 | Text to image, Image to image, Image editing | Global endpoint | 2025-04-15 |
| OpenAI | gpt-image-1-mini | Text to image | Global endpoint | 2025-10-06 |
| OpenAI | gpt-image-1.5 | Text to image, Image to image, Image editing | Global endpoint | 2025-12-16 |
| OpenAI | gpt-35-turbo | Chat completion | Canada East | 2023-03-01 |
| OpenAI | gpt-35-turbo-16k | Chat completion, Long context | Canada East | 2023-06-13 |
| OpenAI | gpt-35-turbo-instruct | Text completion | Canada East | 2023-09-22 |
| OpenAI | gpt-4 | Chat completion, Responses | Canada East | 2023-03-14 |
| OpenAI | gpt-4-32k | Chat completion, Long context, Responses | Canada East | 2023-03-14 |
| OpenAI | gpt-4.1 | Chat completion, Responses, Tool use | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.1-mini | Chat completion, Responses, Tool use | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.1-nano | Chat completion, Responses | Canada East, Global endpoint, Data Zone | 2025-04-14 |
| OpenAI | gpt-4.5-preview | Chat completion, Responses, Tool use | Global endpoint | 2025-02-27 |
| OpenAI | gpt-4o | Chat completion, Responses, Multimodal, Tool use | Canada East | 2024-11-20 |
| OpenAI | gpt-4o-audio-preview | Audio generation, Audio input/output | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini | Chat completion, Responses, Multimodal | Canada East | 2024-07-18 |
| OpenAI | gpt-4o-mini-audio-preview | Audio generation, Audio input/output | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini-realtime-preview | Realtime audio, Audio generation | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-mini-transcribe | Speech to text, Transcription | Global endpoint | 2025-12-15 |
| OpenAI | gpt-4o-mini-tts | Text to speech | Global endpoint | 2025-12-15 |
| OpenAI | gpt-4o-realtime-preview | Realtime audio, Audio generation | Global endpoint | 2024-12-17 |
| OpenAI | gpt-4o-transcribe | Speech to text, Transcription | Global endpoint | 2025-03-20 |
| OpenAI | gpt-4o-transcribe-diarize | Speech to text, Transcription, Speaker diarization | Global endpoint | 2025-10-15 |
| OpenAI | gpt-5 | Chat completion, Responses, Multimodal, Tool use | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-chat | Chat completion, Responses | Canada East, Global endpoint | 2025-10-03 |
| OpenAI | gpt-5-codex | Code generation, Chat completion, Responses | Global endpoint | 2025-09-15 |
| OpenAI | gpt-5-mini | Chat completion, Responses | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-nano | Chat completion, Responses | Canada East, Global endpoint | 2025-08-07 |
| OpenAI | gpt-5-pro | Chat completion, Responses, Tool use | Global endpoint | 2025-10-06 |
| OpenAI | gpt-5.1 | Chat completion, Responses, Tool use | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-chat | Chat completion, Responses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-codex | Code generation, Responses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.1-codex-max | Code generation, Responses | Global endpoint | 2025-12-04 |
| OpenAI | gpt-5.1-codex-mini | Code generation, Responses | Canada East, Global endpoint | 2025-11-13 |
| OpenAI | gpt-5.2 | Chat completion, Responses, Tool use | Global endpoint | 2025-12-11 |
| OpenAI | gpt-5.2-chat | Chat completion, Responses | Global endpoint | 2025-12-11 |
| OpenAI | gpt-5.2-codex | Code generation, Responses | Global endpoint | 2026-01-14 |
| OpenAI | gpt-5.3-codex | Code generation, Responses | Global endpoint | |
| OpenAI | gpt-audio | Audio generation, Audio input/output | Global endpoint | 2025-08-28 |
| OpenAI | gpt-audio-1.5 | Audio generation, Audio input/output | Global endpoint | |
| OpenAI | gpt-audio-mini | Audio generation, Audio input/output | Global endpoint | 2025-12-15 |
| OpenAI | gpt-oss-120b | Chat completion | Global endpoint | |
| OpenAI | gpt-realtime | Realtime audio, Audio generation | Global endpoint | 2025-08-28 |
| OpenAI | gpt-realtime-1.5 | Realtime audio, Audio generation | Global endpoint | 2026-02-23 |
| OpenAI | gpt-realtime-mini | Realtime audio, Audio generation | Global endpoint | 2025-12-15 |
| OpenAI | model-router | Chat completion, Automatic model routing | Global endpoint | 2025-11-18 |
| OpenAI | o1 | Chat completion, Responses, Reasoning | Canada East | 2024-12-17 |
| OpenAI | o1-mini | Chat completion, Responses, Reasoning | Global endpoint, Data Zone | 2024-09-12 |
| OpenAI | o1-preview | Chat completion, Responses, Reasoning | Canada East | 2024-09-12 |
| OpenAI | o3 | Chat completion, Responses, Reasoning | Canada East, Global endpoint, Data Zone | 2025-04-16 |
| OpenAI | o3-deep-research | Deep research, Data generation, Reasoning | Global endpoint | 2025-06-26 |
| OpenAI | o3-mini | Chat completion, Responses, Reasoning | Canada East, Global endpoint, Data Zone | 2025-01-31 |
| OpenAI | o3-pro | Chat completion, Responses, Reasoning | Global endpoint | 2025-06-10 |
| OpenAI | o4-mini | Chat completion, Responses, Reasoning | Canada East, Global endpoint, Data Zone | 2025-04-16 |
| OpenAI | sora | Video generation | Global endpoint | 2025-05-02 |
| OpenAI | sora-2 | Video generation | Global endpoint | 2025-10-06 |
| OpenAI | text-embedding-3-large | Embeddings, Semantic search | Canada East | 2024-01-25 |
| OpenAI | text-embedding-3-small | Embeddings, Semantic search | Canada East | 2024-01-25 |
| OpenAI | text-embedding-ada-002 | Embeddings, Semantic search | Canada East | 2022-12-15 |
| OpenAI | tts | Text to speech | Canada East | 2023-11-06 |
| OpenAI | tts-hd | Text to speech, High quality audio | Canada East | 2023-11-06 |
| OpenAI | whisper | Speech to text, Automatic speech recognition, Translation | Canada East | 2022-09-21 |
| xAI | grok-3 | Chat completion, Tool use | Global endpoint, Data Zone | 2025-02-17 |
| xAI | grok-3-mini | Chat completion, Reasoning | Global endpoint, Data Zone | 2025-02-17 |
| xAI | grok-4 | Chat completion, Reasoning, Tool use | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-4-fast-non-reasoning | Chat completion | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-4-fast-reasoning | Chat completion, Reasoning | Global endpoint, Data Zone | 2025-07-10 |
| xAI | grok-code-fast-1 | Code generation, Chat completion | Global endpoint, Data Zone | 2025-08 |

## AWS

### General information

Here is an up to date list of available models in AWS, make sure see that its not a third party marketplace one: [Bedrock models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).

Here is the Bedrock pricing as well: [Bedrock model pricing](https://aws.amazon.com/bedrock/pricing/)

### Table

| Provider | Model | Purpose | Location | Release Date |
| - | - | - | - | - |
| Amazon | Nova 2 Lite | Chat completion, Image to text, Video to text, Multimodal | Serverless, Cross-region inference | 2025 |
| Amazon | Nova Lite | Chat completion, Agents, RAG, Text generation, Summarization, Translation, Image to text, Video to text, Multimodal | Serverless, Cross-region inference | 2024-12-03 |
| Amazon | Rerank 1.0 | Text reranking, Semantic search | Serverless | 2024 |
| Amazon | Titan Multimodal Embeddings G1 | Embeddings, Multimodal search | Serverless | 2023-11-28 |
| Amazon | Titan Text Embeddings V2 | Embeddings, Semantic search | Serverless | 2024-04-23 |
| Anthropic | Claude 3 Haiku | Chat completion, Image to text, Conversation | Serverless | 2024-03-13 |
| Anthropic | Claude 3 Sonnet | Chat completion, Image to text, Code generation, Complex reasoning, Multilingual | Serverless | 2024-03-04 |
| Anthropic | Claude Haiku 4.5 | Chat completion, Reasoning, Code generation, Computer use, Tool use, Multimodal | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Opus 4.5 | Chat completion, Reasoning (thinking model), Code generation, Computer use, Tool use, Multimodal, Agentic search | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Opus 4.6 | Chat completion, Hybrid reasoning, Code generation, Computer use, Tool use, Multimodal, Agentic search, Memory | Serverless, Cross-region inference | 2025 |
| Anthropic | Claude Sonnet 4.5 | Chat completion, Reasoning (thinking model), Code generation, Computer use, Tool use, Multimodal, Agentic search | Serverless, Cross-region inference | 2025-07-22 |
| Anthropic | Claude Sonnet 4.6 | Chat completion, Hybrid reasoning, Code generation, Computer use, Tool use, Multimodal, Agentic search, Memory | Serverless, Cross-region inference | 2025 |
| Cohere | Embed English | Embeddings, Semantic search | Serverless | 2023 |
| Cohere | Embed Multilingual | Embeddings, Multilingual semantic search | Serverless | 2023 |
| Cohere | Embed v4 | Embeddings, Multimodal, Multilingual semantic search | Serverless, Cross-region inference | 2025-04-24 |
| Cohere | Rerank 3.5 | Text reranking, Semantic search | Serverless | 2024-10 |
| Meta | Llama 3 70B Instruct | Chat completion, Code generation, Text classification, Sentiment analysis, Summarization | Serverless | 2024-04-18 |
| Meta | Llama 3 8B Instruct | Chat completion, Text summarization, Text classification, Sentiment analysis | Serverless | 2024-04-18 |
| Mistral AI | Mistral 7B Instruct | Chat completion, Text generation, Code generation, Text classification | Serverless | 2023-09-27 |
| Mistral AI | Mistral Large (24.02) | Chat completion, Complex reasoning, Code generation, RAG, Agents | Serverless | 2024-02-26 |
| Mistral AI | Mixtral 8x7B Instruct | Chat completion, Complex reasoning, Text generation, Code generation | Serverless | 2023-12-11 |
| TwelveLabs | Pegasus 1.2 | Video to text, Multimodal, Video understanding | Serverless, Cross-region inference | 2024 |

## GCP

### General information

Here is the up to date list of the models GCP offers in our environment: [Google Cloud docs](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-partner-models)

Pricing information: [Pricing information GCP](https://cloud.google.com/vertex-ai/generative-ai/pricing)

### Table

| Provider | Model | Purpose | Location | Release Date |
| - | - | - | - | - |
| AI21 Labs | Jamba 1.5 Large | Chat completion, Long context, High quality | Serverless | 2024-08 |
| AI21 Labs | Jamba 1.5 Mini | Chat completion, High throughput, Low cost | Serverless | 2024-08 |
| Alibaba | Qwen3 235B | Chat completion, Reasoning (hybrid thinking mode) | Serverless | 2025-04-29 |
| Alibaba | Qwen3 Coder | Code generation, Software development | Serverless | 2025 |
| Alibaba | Qwen3-Next-80B Instruct | Chat completion, Instruction following, Code generation | Serverless | 2025 |
| Alibaba | Qwen3-Next-80B Thinking | Chat completion, Reasoning (thinking model), Code generation | Serverless | 2025 |
| Anthropic | Claude 3.5 Sonnet | Chat completion, Code generation, Complex reasoning | Serverless | 2024-06-20 |
| Anthropic | Claude 3.5 Sonnet v2 | Chat completion, Code generation, Agentic, Complex reasoning | Serverless | 2024-10-22 |
| Anthropic | Claude Haiku 4.5 | Chat completion, Code generation, Tool use, High throughput | Serverless | 2025-07-22 |
| Anthropic | Claude Opus 4 | Chat completion, Reasoning, Code generation, Agentic, Long-running tasks | Serverless | 2025-05-22 |
| Anthropic | Claude Opus 4.1 | Chat completion, Reasoning, Code generation, Agentic, Long-running tasks | Serverless | 2025-07 |
| Anthropic | Claude Opus 4.5 | Chat completion, Reasoning (thinking model), Code generation, Computer use, Tool use, Multimodal | Serverless | 2025-07-22 |
| Anthropic | Claude Opus 4.6 | Chat completion, Hybrid reasoning, Code generation, Computer use, Tool use, Multimodal, Agentic | Serverless | 2025 |
| Anthropic | Claude Sonnet 4 | Chat completion, Code generation, Agentic, RAG, High volume | Serverless | 2025-02-24 |
| Anthropic | Claude Sonnet 4.5 | Chat completion, Reasoning (thinking model), Code generation, Computer use, Tool use, Multimodal | Serverless | 2025-07-22 |
| Anthropic | Claude Sonnet 4.6 | Chat completion, Hybrid reasoning, Code generation, Computer use, Tool use, Multimodal, Agentic | Serverless | 2025 |
| DeepSeek | DeepSeek-OCR | Image to text, PDF to text, Document parsing, OCR | Serverless | 2025 |
| DeepSeek | DeepSeek-R1 (0528) | Chat completion, Reasoning (thinking model) | Serverless | 2025-05-28 |
| DeepSeek | DeepSeek-V3.1 | Chat completion, Reasoning (hybrid thinking mode) | Serverless | 2025-06 |
| DeepSeek | DeepSeek-V3.2 | Chat completion, Reasoning, Agentic | Serverless | 2025-09 |
| GLM | GLM 4.7 | Chat completion, Code generation, Tool use, Complex reasoning | Serverless | 2025 |
| GLM | GLM 5 | Chat completion, Code generation, Agentic, Complex systems engineering | Serverless | 2025 |
| Google | Bart-large-cnn | Text summarization, Seq2seq generation | Serverless | 2020 |
| Google | BERT | Natural language understanding, Question answering, Text classification | Serverless | 2018-10 |
| Google | BERT (PEFT) | Fine-tunable NLP, Question answering | Serverless | 2023 |
| Google | Chirp 2 | Speech to text, Automatic speech recognition, Multilingual | Serverless | 2024 |
| Google | Chirp 3 | Speech to text, Automatic speech recognition, Multilingual | Serverless | 2025 |
| Google | CodeGemma | Code generation, Code completion | Serverless | 2024-04 |
| Google | CXR Foundation | Medical embeddings, Chest X-ray analysis | Serverless | 2024 |
| Google | Derm Foundation | Medical embeddings, Dermatology image analysis | Serverless | 2024 |
| Google | Derm Foundation | Medical embeddings, Dermatology image analysis | Serverless | 2024 |
| Google | DITO | Object detection, Image segmentation, Open vocabulary | Serverless | 2023 |
| Google | EmbeddingGemma | Embeddings, Semantic search | Serverless | 2025 |
| Google | Embeddings for Multimodal | Multimodal embeddings, Image search, Classification | Serverless | 2023 |
| Google | Embeddings for Text (multilingual) | Text embeddings, Multilingual semantic search | Serverless | 2023 |
| Google | Embeddings for Text (text-embedding-005) | Text embeddings, Semantic search, Classification | Serverless | 2024 |
| Google | Embeddings for Text (text-embedding-large-exp) | Text embeddings, Semantic search | Serverless | 2025 |
| Google | F-VLM (Deprecated) | Object detection, Open vocabulary | Serverless | 2022 |
| Google | FunctionGemma | Function calling, Tool use, Agentic tasks | Serverless | 2025 |
| Google | Gemini 2.0 Flash | Chat completion, Multimodal, Tool use, Real-time API | Serverless | 2025-02 |
| Google | Gemini 2.0 Flash-Lite | Chat completion, Multimodal, High throughput | Serverless | 2025-02 |
| Google | Gemini 2.5 Flash | Chat completion, Reasoning, Multimodal, Tool use | Serverless | 2025-05-20 |
| Google | Gemini 2.5 Flash Image Preview | Chat completion, Text to image, Image editing | Serverless | 2025 |
| Google | Gemini 2.5 Flash Image (Nano Banana) | Chat completion, Text to image, Image editing | Serverless | 2025 |
| Google | Gemini 2.5 Flash-Lite | Chat completion, Multimodal, Low latency | Serverless | 2025-09 |
| Google | Gemini 2.5 Flash-Lite Preview | Chat completion, Multimodal, Low latency | Serverless | 2025-09 |
| Google | Gemini 2.5 Flash Preview | Chat completion, Multimodal | Serverless | 2025-09 |
| Google | Gemini 2.5 Pro | Chat completion, Reasoning, Code generation, Complex prompts, Multimodal | Serverless | 2025-05-06 |
| Google | Gemini 3 Flash Preview | Chat completion, Reasoning, Code generation, Multimodal, Agentic | Serverless | 2026 |
| Google | Gemini 3 Pro Image Preview | Chat completion, Text to image, Image editing, Multimodal | Serverless | 2026 |
| Google | Gemini 3 Pro Preview | Chat completion, Reasoning, Code generation, Multimodal, Agentic | Serverless | 2026 |
| Google | Gemini 3.1 Pro Preview | Chat completion, Reasoning, Code generation, Multimodal, Agentic, Long context | Serverless | 2026 |
| Google | Gemini Computer Use Preview | Computer use, Browser automation, UI interaction | Serverless | 2025-10 |
| Google | Gemini Embedding 001 | Embeddings, Semantic search, Classification, Clustering | Serverless | 2025-03 |
| Google | Gemma | Chat completion, Text generation | Serverless | 2024-02 |
| Google | Gemma 2 | Chat completion, Text generation | Serverless | 2024-06 |
| Google | Gemma 3 | Chat completion, Text generation | Serverless | 2025-03-12 |
| Google | Gemma 3n | Chat completion, Text generation, Multimodal | Serverless | 2025-05 |
| Google | HeAR | Medical embeddings, Health acoustic analysis | Serverless | 2024 |
| Google | Imagen 2 for Generation and Editing | Text to image, Image editing, Inpainting | Serverless | 2023 |
| Google | Imagen 3 for Editing and Customization | Image editing, Inpainting, Reference image generation | Serverless | 2024 |
| Google | Imagen 3 for Generation | Text to image | Serverless | 2024 |
| Google | Imagen 4 Fast | Text to image | Serverless | 2025-05 |
| Google | Imagen 4 Fast Preview | Text to image | Serverless | 2025-06 |
| Google | Imagen 4 Ultra | Text to image, High quality | Serverless | 2025-05 |
| Google | Imagen 4 Ultra Preview | Text to image, High quality | Serverless | 2025-06 |
| Google | Imagen 4 | Text to image | Serverless | 2025-05 |
| Google | Imagen 4 Preview | Text to image | Serverless | 2025-06 |
| Google | Imagen for Captioning & VQA | Image captioning, Visual question answering | Serverless | 2023 |
| Google | Imagen Product Recontext | Product image generation, Image editing | Serverless | 2025-06 |
| Google | Imagery - Classification and Retrieval | Remote sensing, Satellite image classification, Zero-shot retrieval | Serverless | 2025-10 |
| Google | Imagery - Object Detection | Remote sensing, Satellite image object detection | Serverless | 2025-10 |
| Google | Label detector (PaLI zero-shot) | Image classification, Zero-shot detection | Serverless | 2023 |
| Google | Lyria 2 | Music generation, Text to audio | Serverless | 2025-06 |
| Google | MaMMUT | Visual question answering, Multimodal | Serverless | 2023 |
| Google | MedASR | Speech to text, Medical domain ASR | Serverless | 2025 |
| Google | MedGemma | Medical text and image comprehension | Serverless | 2025-05 |
| Google | MedSigLIP | Medical image and text embeddings | Serverless | 2024 |
| Google | OWL-ViT | Zero-shot object detection, Open vocabulary | Serverless | 2022 |
| Google | OWL-ViT v2 | Zero-shot object detection, Open vocabulary | Serverless | 2023 |
| Google | PaliGemma 1 & 2 | Multimodal, Image understanding, Visual QA | Serverless | 2024-12 |
| Google | Path Foundation | Medical embeddings, Pathology image analysis | Serverless | 2024 |
| Google | ShieldGemma 2 | Content safety, Moderation | Serverless | 2025-05 |
| Google | T5-1.1 | Text to text, Seq2seq generation | Serverless | 2020 |
| Google | T5-FLAN | Text to text, Instruction following | Serverless | 2022 |
| Google | T5Gemma | Text to text, Instruction following | Serverless | 2025 |
| Google | TimesFM | Time series forecasting | Serverless | 2024 |
| Google | TranslateGemma | Machine translation, Multilingual | Serverless | 2025 |
| Google | TxGemma | Therapeutic prediction, Drug discovery, Medical classification | Serverless | 2025 |
| Google | Veo 2 | Video generation | Serverless | 2025-01 |
| Google | Veo 3 | Video generation, Audio | Serverless | 2025-05-21 |
| Google | Veo 3 Fast | Video generation, Audio | Serverless | 2025-05 |
| Google | Veo 3 Fast Preview | Video generation, Audio | Serverless | 2025-05 |
| Google | Veo 3 Preview | Video generation, Audio | Serverless | 2025-05 |
| Google | Veo 3.1 | Video generation, Audio | Serverless | 2025 |
| Google | Veo 3.1 Fast | Video generation, Audio | Serverless | 2025 |
| Google | Veo 3.1 Fast Preview | Video generation, Audio | Serverless | 2025 |
| Google | Veo 3.1 Preview | Video generation, Audio | Serverless | 2025 |
| Google | Vertex Image Segmentation | Image segmentation, Mask generation | Serverless | 2025 |
| Google | WeatherNext 2 | Weather forecasting, AI prediction | Serverless | 2025 |
| Google | WeatherNext Demo | Weather forecasting, AI prediction | Serverless | 2024 |
| Meta | Llama 3.3 | Chat completion, Tool use, Text generation | Serverless | 2024-12-06 |
| Meta | Llama 4 Maverick 17B-128E | Chat completion, Reasoning, Code generation, Image to text, Multimodal | Serverless | 2025-04-05 |
| Meta | Llama 4 Scout 17B-16E | Chat completion, Reasoning, Multimodal | Serverless | 2025-04-05 |
| MiniMax | MiniMax M2 | Chat completion, Code generation, Agentic, Tool use, Planning | Serverless | 2025 |
| Mistral AI | Codestral 2 | Code generation, Code completion, Fill-in-the-middle | Serverless | 2025 |
| Mistral AI | Mistral Medium 3 | Chat completion, Code generation, Reasoning, Summarization, Long document understanding | Serverless | 2025-05 |
| Mistral AI | Mistral OCR (25.05) | PDF to text, Image to text, Document parsing, OCR | Serverless | 2025-05 |
| Mistral AI | Mistral Small 3.1 (25.03) | Chat completion, Multimodal, Long context | Serverless | 2025-03 |
| Moonshot AI | Kimi K2 Thinking | Chat completion, Reasoning (thinking model), Tool use, Agentic | Serverless | 2025-07 |
| OpenAI | gpt-oss 120B | Chat completion, Reasoning | Serverless | 2025 |
| OpenAI | gpt-oss 20B | Chat completion, Edge deployment, Efficiency | Serverless | 2025 |
