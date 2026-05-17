<p align="center">
  <img src="https://img.shields.io/badge/EQUIDA-Autonomous%20Diligence%20Platform-3766AD?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMiA3TDEyIDEyTDIyIDdMMTIgMloiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjIgMTdMMTIgMjJMMiAxN0wxMiAxMkwyMiAxN1oiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==&logoColor=white" alt="Equida Platform"/>
</p>

<h1 align="center">EQUIDA</h1>
<h3 align="center">Equity Intelligence Diligence Analytics</h3>
<p align="center"><em>1000% Autonomous, Production-Grade Private Equity Platform</em></p>

<p align="center">
  <img src="https://img.shields.io/badge/React-UI%20Framework-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/FastAPI-Gateway-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyTorch-Native%20Inference-EE4C2C?style=flat-square&logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/Unsloth-LLM%20Engine-FF6F00?style=flat-square&logo=huggingface&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-pgvector-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
</p>

---

## Overview

**EQUIDA** is a fully autonomous, production-grade diligence and reporting platform designed exclusively for Private Equity and Venture Capital Fund Managers. It natively executes local 4-bit fine-tuned language models on a CUDA GPU to ensure absolute data privacy.

The system encompasses the entire investment lifecycle, replacing manual financial screening and regulatory compliance drafting with a **5-Agent Autonomous Architecture**.

### Key Highlights

- 🧠 **Native Unsloth Inference** — Runs local 4-bit PyTorch tensors without cloud wrappers, ensuring absolute financial data privacy.
- 🚦 **Kill-Switch Underwriting** — Hardcoded deterministic injection overrides that instantly reject insolvent or highly concentrated targets.
- 📊 **Hybrid RAG Engine** — Merges internal vector lookups (pgvector) with live fallback web-scraping to verify dynamic macroeconomic factors like the Tunisian TMM.
- ⚖️ **Automated Post-Deal Compliance** — Autonomously monitors the *Code des Sociétés Commerciales (CSC)* and drafts legal PV AGO and PV CA resolutions.
- 🔄 **Continuous Learning Loop** — Captures analyst override feedback as semantic embeddings to dynamically adjust future evaluations without retraining.

---

## System Architecture

```mermaid
graph TB
    subgraph Frontend Client
        A["💻 React UI (Vite)"]
        B["📊 14-Col Matrix"]
        C["📅 CSC Tracker"]
    end

    subgraph FastAPI Gateway
        D["Main API Gateway"]
        E["Continuous Learning Loop"]
    end

    subgraph Unsloth Inference Layer
        F["CUDA GPU"]
        G["4-Bit Quantized Weights"]
    end

    subgraph Multi-Agent Hive
        H["🕵️ Agent 1: The Auditor"]
        I["🌍 Agent 2: The Researcher"]
        J["🛑 Agent 3: The Underwriter"]
        K["📝 Agent 4: The Reporter"]
        L["⚖️ Agent 5: Compliance Officer"]
    end

    subgraph Data & RAG Engine
        M["PostgreSQL (pgvector)"]
        N["Hybrid Web Scraper"]
    end

    A --> D
    D --> F
    F --> G
    D --> H & I & J & K & L
    I --> M & N
    L --> M
    E --> M

    style H fill:#1e293b,stroke:#2E7D52,color:#fff
    style I fill:#1e293b,stroke:#3766AD,color:#fff
    style J fill:#1e293b,stroke:#C0392B,color:#fff
    style K fill:#1e293b,stroke:#D97706,color:#fff
    style L fill:#1e293b,stroke:#8B5CF6,color:#fff
```

---

## Autonomous Agent Pipeline

```mermaid
flowchart LR
    subgraph Data Ingestion
        A1["SME Databook\n(Excel/PDF)"] --> A2["Unsloth Extractor"]
        A2 --> A3["Structured JSON"]
    end

    subgraph Deterministic Analysis
        A3 --> B1["Program-of-Thought (PoT)\nSandbox"]
        B1 --> C1{"Math Logic Holds?"}
        C1 -->|No| D1["🚨 FAIL: Insolvency"]
        C1 -->|Yes| C2["Local RAG Lookup"]
    end

    subgraph Underwriter & Kill-Switches
        C2 --> E1["Check Client Concentration"]
        C2 --> E2["Check Cash Reserves"]
        E1 & E2 --> F1{"Overrides Triggered?"}
        F1 -->|Yes| F2["Inject Lethal Flag\nScore Capped at 3/10"]
        F1 -->|No| F3["Proceed to Reporting"]
    end

    style B1 fill:#0f172a,stroke:#3766AD,color:#fff
    style D1 fill:#2d1215,stroke:#C0392B,color:#C0392B
    style F2 fill:#2d1215,stroke:#C0392B,color:#C0392B
    style F3 fill:#0d2818,stroke:#2E7D52,color:#2E7D52
```

---

## Post-Investment & CSC Compliance Workflow

```mermaid
sequenceDiagram
    participant UI as EQUIDA Tracker
    participant DB as Postgres DB
    participant Ag5 as Compliance Agent
    participant LLM as Unsloth Model
    participant Doc as Legal Exporter

    DB->>Ag5: Trigger: Board Mandate < 90 Days
    Ag5->>UI: Push Amber Alert (T-90)
    UI->>Ag5: Request "Pre-draft Renewal"
    Ag5->>LLM: Inject legal context & Fund details
    LLM->>Ag5: Return French PV AGO Resolution
    Ag5->>UI: Show "Draft Ready" Modal
    UI->>Doc: Approve & Export (.docx)
    Doc-->>UI: File Downloaded
```

---

## Tech Stack

```mermaid
mindmap
  root((EQUIDA))
    ML & AI
      Unsloth 4-Bit Inference
      PyTorch
      Transformers
      Hugging Face
    Architecture & Logic
      5-Agent Hive
      Program-of-Thought
      Prompt Injection Kill-Switches
    Infrastructure & Backend
      FastAPI Gateway
      PostgreSQL
      pgvector
      Uvicorn
    Frontend & UI
      React 19
      Vite
      Tailwind CSS v4
      Lucide React
    RAG & Data
      BeautifulSoup Web Scraper
      SQLAlchemy ORM
      Continuous Learning Loop
```

---

## Multi-Agent Operations

| Agent | Role | Execution Mechanics |
|-------|------|---------------------|
| **Auditor** | Math Sandbox | Extracts JSON variables via LLM, then executes deterministic Python accounting rules (e.g., `assert Net_Income < EBITDA - Debt`). |
| **Researcher** | RAG Enrichment | Intercepts metrics and validates against local Tunisian market data and historical override vectors. |
| **Underwriter** | Kill-Switch Engine | Immutable Python overrides. Bypasses text generation entirely to force `DO NOT PROCEED` flags on high-risk technical parameters. |
| **Reporter** | Memo Compilation | Few-shot structuring that drafts investment memorandums and marks AI-generated content with mandatory `[AI-drafted]` flags. |
| **Compliance Officer**| Governance Monitor | Polling engine tracking T-180, T-90, and T-30 differentials against the Tunisian CSC for automated legal document drafting. |

---

## Quick Start

### 1. Boot the Frontend
```bash
cd equida-platform/frontend
npm install
npm run dev
```

### 2. Connect the AI Backend
Place your fine-tuned Hugging Face weights into the `backend/equida-finance-model` directory.
```bash
cd equida-platform/backend
pip install -r requirements.txt
python main.py
```
*The FastAPI server runs on `http://localhost:8000` and immediately loads the model tensors to your GPU.*

> **Note**: The fine-tuned Unsloth model weights (`equida-finance-model`) are ignored in this repository due to GitHub size limits. However, the exact inference pipeline is fully visible in `backend/llm_engine.py`. 

---

<p align="center"><strong>EQUIDA</strong> — Institutional Intelligence. Zero Compromises.</p>
<p align="center"><em>Built by Antigravity · 2026</em></p>
