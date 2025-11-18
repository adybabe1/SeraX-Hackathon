# SeraX Hackathon Package  
**Complete Software API & Documentation Toolkit**  
Version: 1.0  
Last Updated: 10/17/2025  

Welcome to the official SeraX Hackathon Package — your complete toolkit for building AI-powered fitness applications in 48 hours. Everything in this repository is designed to help you ship fast, test fast, and innovate boldly.  

No hardware required. All projects run in the browser or locally.

---

## 📦 Repository Structure

hackathon-package/
│
├── 📚 docs/
│   ├── API_DOCUMENTATION.md
│   ├── QUICKSTART.md
│   ├── TUTORIALS.md
│   ├── AUTH_GUIDE.md
│   ├── ENDPOINTS.md
│   └── FAQ_TROUBLESHOOTING.md
│
├── 🚀 sample_projects/
│   ├── workout-dashboard/
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── src/
│   │
│   ├── social-feed/
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── src/
│   │
│   └── voice-coach-demo/
│       ├── README.md
│       ├── requirements.txt
│       ├── .env.example
│       └── src/
│
├── ⚡ edge_examples/
│   ├── custom-workout-generator/
│   └── audio-processor/
│
└── README.md (this file)

---

# A. 📚 Core Documentation ("The Manuals")

This folder contains all official developer docs for the SeraX API.

---

## **1. API_DOCUMENTATION.md (MASTER DOC)**

**Contents include:**

### **Introduction**
“Build the future of fitness in 48 hours using SeraX AI-powered APIs.”

### ⚡ **Rate Limits**
| Category | Limit |
|---------|--------|
| Standard REST | 100 requests/min |
| AI/Compute | 20 requests/min |
| Realtime | 10 concurrent connections |

*Tip: Cache anything you can.*

### 🔑 **Authentication**
All requests require:
apikey: YOUR_API_KEY_HERE

**Do NOT commit keys** — always use `.env`.

### 🔧 **Core APIs Included**
- Supabase REST API  
- Supabase Auth API  
- Realtime WebSocket channels  
- Edge Functions  
  - `generate-workout`
  - `elevenlabs-tts`
  - `cv-generation`

### 🧩 **Key Endpoints**

| Endpoint | Method | Purpose | Limit |
|----------|--------|----------|--------|
| `/rest/v1/workout_sessions` | GET/POST | Workout Logs | 100/min |
| `/rest/v1/performance_metrics` | GET/POST | Metrics | 100/min |
| `/rest/v1/posts` | GET/POST | Social Feed | 100/min |
| `/functions/v1/generate-workout` | POST | AI Plan | 20/min |
| `/functions/v1/elevenlabs-tts` | POST | Voice | 20/min |

**RLS Enabled** — users cannot access other users’ data.

---

## **2. QUICKSTART.md**
Get building in **10 minutes**.

### Step 1: Get API Key  
Login → Dashboard → API Keys  
Store in `.env`.

### Step 2: Test Your Connection  
```bash
curl -H "apikey: YOUR_KEY" "https://api.serax.io/rest/v1/profiles"
Step 3: First JS Request
fetch('https://api.serax.io/rest/v1/profiles', {
  headers: { apikey: API_KEY }
})
```
### Step 4: Build a micro workflow
Generate → Log → Post → Refresh feed
(Full version in TUTORIALS.md)
## 3. TUTORIALS.md
Structured exercises for beginners → advanced.
Exercises include:

# Creating user profiles
Generating AI workouts
Posting to social feed
Building a realtime dashboard (WebSockets)
Includes a diagram:
Generate → Log Session → Post → Live Dashboard
## 4. AUTH_GUIDE.md
# Covers:
Auth flow diagrams
Token storage best practices
Short-lived vs long-lived tokens
#⚠️ Environment variable warnings
Secure client storage
## 5. ENDPOINTS.md
A single page containing:
All REST endpoints
All Edge Functions
All parameters
Request & response schemas
Example curl & JS snippets
## 6. FAQ_TROUBLESHOOTING.md
# ⚡ Common Errors
401 → Missing/invalid API key
403 → RLS violation (wrong user data)
429 → Rate limit exceeded
500 → Temporary server issue
503 → AI backend overloaded
Edge Case Handling
Exponential backoff
Defensive parsing of incomplete JSON
Validate all inputs
Simulate multi-user tests for RLS
Pro Tips
Start with 1 user test
Cache everything
Use .env
Test UI error states
Use #api-support
## B. 🚀 sample_projects/ Directory
Turnkey templates you can run immediately.
# Project 1: workout-dashboard/
Includes:
AI workout generator
Metrics visualizer
Realtime progress tracking
Contains:
README.md
.env.example
Vite + Supabase setup
# Project 2: social-feed/
Live social fitness stream:
Live updates
Team events
Rate limit handling
Project 3: voice-coach-demo/
Python + Flask
Text-to-speech
On-demand audio generation
## C. ⚡ edge_examples/ Directory
Contains two fully functional Edge Functions:
✔ custom-workout-generator
AI workout generation
Deno Edge Function
config.toml included
✔ audio-processor
Handles WAV/MP3 input
Sends audio to processing API
Returns detected metadata
These can be deployed instantly.
## D. 🆘 Support & Resources
Slack Support
Join: #api-support
Response Time: < 30 minutes
Weekend code review: Sat 2–4 PM
Emergency API issues → tag @mentors
# 🎯 Success Checklist
 API key configured
 First API call working
 One starter project running
 .env configured
 RLS understood
 Live updates tested
 Rate limit handling added
 Error UI implemented
# ⚡ Final Demo Checklist
Before submitting your project:
Keys stored in .env (NOT in code)
Rate limits handled gracefully
Error states visible to judges
Multi-user RLS tested
Realtime features shown live
Full workflow demonstrated
# Demo Tip:
Show: Generate → Log → Share → Live Update
