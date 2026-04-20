# ⚖️ LexGuard — AI-Powered Legal Analysis Platform

> A production-ready AI-driven legal feasibility analysis platform built for startup founders, innovators, and businesses to evaluate legal risks before launching products.

---

## 🚀 Overview

LexGuard helps founders analyze whether their startup idea is legally feasible by using:

- Retrieval Augmented Generation (RAG)
- LLM-as-Judge filtering
- Vector-based legal document search
- AI-generated compliance reports

Users can submit a product idea through text input or document upload and receive a complete legal feasibility report including:

✔ Executive Summary  
✔ Compliance Scores  
✔ Risk Assessment  
✔ Relevant Legal Policies  
✔ Actionable Recommendations

---

## 🧠 Problem Statement

Many startup founders launch products without understanding:

- legal compliance risks
- data privacy obligations
- AI regulations
- financial laws
- consumer protection requirements

This often leads to:

❌ legal disputes  
❌ compliance violations  
❌ product shutdowns  
❌ investor rejection

LexGuard solves this by providing early-stage legal intelligence.

---

## 🏗 System Architecture

```text
User Input
   ↓
File Upload / Product Description
   ↓
RAG Retrieval System
   ↓
Vector Search on Legal Documents
   ↓
LLM-as-Judge Multi-Stage Filtering
   ↓
Context Compression (50 → 20 → 10 → 5)
   ↓
Final Legal Analysis Generation
   ↓
Frontend Dashboard Report

## ⚙️ Tech Stack

### Backend

- **Framework:** Flask 3.0  
- **Language:** Python  
- **LLM Provider:** Groq  
- **Judge Model:** llama-3.1-8b-instant  
- **Analysis Model:** qwen-qwq-32b  
- **Embeddings:** Legal-BERT (`nlpaueb/legal-bert-base-uncased`)  
- **Vector Database:** Supabase PostgreSQL + pgvector  
- **Document Database:** MongoDB  
- **Libraries:** Transformers, PyTorch, Sentence Transformers  

---

### Frontend

- **Framework:** Next.js 14  
- **Language:** TypeScript  
- **Styling:** TailwindCSS  
- **Icons:** Lucide React  
- **HTTP Client:** Axios  
- **Authentication:** Gmail Login Flow  
- **Dashboard:** Dark Premium UI  

---

## ✨ Key Features

### 📄 Product Analysis

Users can submit startup ideas using:

- Manual text input  
- PDF upload  
- DOCX upload  

---

### 🌍 Country + Domain Filtering

#### Supported Countries

- USA  
- Europe  
- India  
- Australia  

#### Supported Domains

- AI  
- Healthcare  
- FinTech  
- Crypto  
- Biotech  
- Consumer Apps  
- Insurance  

## 🌟 Novelty of the Project

Most existing legal-tech platforms focus only on legal document search or static compliance checklists.

### LexGuard introduces a unique approach by combining:

### 🔹 RAG + LLM-as-Judge Architecture

Instead of simply retrieving legal documents, LexGuard uses a multi-stage filtering pipeline where an LLM acts as a legal relevance judge to identify the most important policies.

This improves:

- precision
- explainability
- trustworthiness
- cost efficiency

---

### 🔹 Startup Idea → Legal Feasibility Mapping

Unlike traditional legal tools that require users to search manually, LexGuard directly converts a startup/product idea into a legal feasibility report.

This bridges the gap between:

```text
innovation idea → legal compliance understanding
