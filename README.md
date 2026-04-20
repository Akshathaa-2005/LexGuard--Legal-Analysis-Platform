⚖️ LexGuard — AI-Powered Legal Analysis Platform

A production-ready AI-driven legal feasibility analysis platform built for startup founders, innovators, and businesses to evaluate legal risks before launching products.

🚀 Overview

LexGuard helps founders analyze whether their startup idea is legally feasible by using:

Retrieval Augmented Generation (RAG)
LLM-as-Judge filtering
Vector-based legal document search
AI-generated compliance reports

Users can submit a product idea through text input or document upload and receive a complete legal feasibility report including:

✔ Executive Summary
✔ Compliance Scores
✔ Risk Assessment
✔ Relevant Legal Policies
✔ Actionable Recommendations

🧠 Problem Statement

Many startup founders launch products without understanding:

legal compliance risks
data privacy obligations
AI regulations
financial laws
consumer protection requirements

This often leads to:

❌ legal disputes
❌ compliance violations
❌ product shutdowns
❌ investor rejection

LexGuard solves this by providing early-stage legal intelligence.

🏗 System Architecture
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
⚙️ Tech Stack
Backend
Framework: Flask 3.0
Language: Python
LLM Provider: Groq
Judge Model: llama-3.1-8b-instant
Analysis Model: qwen-qwq-32b
Embeddings: Legal-BERT (nlpaueb/legal-bert-base-uncased)
Vector DB: Supabase PostgreSQL + pgvector
Document DB: MongoDB
Libraries: Transformers, PyTorch, Sentence Transformers
Frontend
Framework: Next.js 14
Language: TypeScript
Styling: TailwindCSS
Icons: Lucide React
HTTP Client: Axios
Authentication: Gmail Login Flow
Dashboard: Dark Premium UI
✨ Key Features
Core Functionalities
📄 Product Analysis

Submit startup ideas using:

manual text input
PDF upload
DOCX upload
🌍 Country + Domain Filtering

Target legal analysis based on:

Countries
USA
Europe
India
Australia
Domains
AI
Healthcare
FinTech
Crypto
Biotech
Consumer Apps
Insurance
🔍 Smart Legal Retrieval

Semantic search across:

500+ Legal Documents

using:

vector embeddings
legal chunk retrieval
policy ranking
🤖 LLM-as-Judge Filtering

Advanced relevance filtering pipeline:

50 → 20 → 10 → 5

This improves:

accuracy
cost efficiency
response quality
📊 Structured Legal Reports

Includes:

Executive Summary
Validity Score (0–100)
Compliance Breakdown
Risk Level
Policy References
Recommendations
📘 Report Components
1. Executive Summary

High-level legal feasibility explanation.

2. Validity Score
0 – 100

Overall startup compliance readiness score.

3. Compliance Scores

Separate scoring for:

Data Privacy
AI Regulation
Financial Regulation
Consumer Protection
4. Risk Analysis

Risk levels:

🟢 Low
🟡 Medium
🔴 High

5. Policy Relevance

Most relevant legal documents with:

summaries
download support
relevance scores
6. Recommendations

Clear next-step actions to reduce legal risk.

🗄 Database Architecture
Supabase PostgreSQL (pgvector)
Tables
legal_documents
legal_sections
legal_chunks
Primary Retrieval Source
legal_chunks
MongoDB
{
  "_id": ObjectId,
  "document_id": "DOC123",
  "country": "USA",
  "filename": "policy.pdf",
  "publish_date": "2025-01-01",
  "text": "Full policy content"
}
📦 Installation Guide
Backend Setup
Step 1
cd backend
Step 2
pip install -r requirements.txt
Step 3 — Environment Variables

Create .env

GROQ_API_KEY=your_groq_api_key

SUPABASE_HOST=your_supabase_host
SUPABASE_DB=postgres
SUPABASE_USER=postgres
SUPABASE_PASSWORD=your_password
SUPABASE_PORT=5432

MONGODB_URI=your_mongodb_uri
Step 4
python app.py

Backend runs on:

http://localhost:5000
Frontend Setup
Step 1
cd frontend
Step 2
npm install
Step 3
npm run dev

Frontend runs on:

http://localhost:3000
🔌 API Endpoints
POST /analyze

Generate legal feasibility report.

Request
{
  "product_description": "AI that analyzes hospital records",
  "country": "USA",
  "domain": "Healthcare"
}
Response

Structured legal report JSON

POST /upload

Upload PDF or DOCX and extract text.

Response
{
  "filename": "document.pdf",
  "extracted_text": "Extracted text..."
}
GET /policy/{document_id}

Download complete policy document.

🔄 Workflow
Step 1

Upload product idea

↓

Step 2

Select country + domain

↓

Step 3

Run legal analysis

↓

Step 4

Review compliance report

↓

Step 5

Download policies + recommendations

⚡ Performance Features
Batch Processing

Parallel LLM calls with optimized execution.

Retry Logic

Automatic retries using exponential backoff.

Context Compression

Reduces token cost while improving quality.

Graceful Failure Handling

Professional production-grade error handling.

🔐 Security Features
Secure .env variable management
File validation
Protected API handling
CORS configuration
Safe database access
Read-only legal database retrieval
🚀 Deployment Notes
Backend
Python 3.8+
GPU recommended
Frontend
Node.js 18+
Modern browser required
External Services
Supabase
MongoDB
Groq API Key
🧪 Future Improvements
PDF report export
Role-based admin panel
Real-time legal alerts
Team collaboration
Multi-country comparison engine
Compliance monitoring dashboard
