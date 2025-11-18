# Core Documentation ("Manuals")

## 1. API_DOCUMENTATION.md — MASTER DOCUMENT

## Introduction
Build the future of fitness in 48 hours using the AI-powered APIs.

---

## API Rate Limits and Considerations
- Standard Endpoints: 100 requests/minute per API key  
- AI Endpoints: 20 requests/minute (compute-intensive)  
- Realtime Connections: 10 concurrent connections per user  
- Best Practice: Implement client-side caching for frequently accessed resources.

---

## Authentication
- API Key required in all requests  
- Critical: Never commit API keys to public repositories. Use environment variables.

---

## Core APIs
- **Supabase REST API**: Full CRUD for profiles, workouts, metrics, posts, teams  
- **Authentication API**: Sign-up and sign-in  
- **Edge Functions**:  
  - `generate-workout` (AI)  
  - `elevenlabs-tts` (Voice)  
  - `cv-generation` (Visuals)  
- **Realtime API**: Subscribe to live feeds and team updates

---

## Key Endpoints & Examples

| Endpoint | Method | Purpose | Rate Limit | Example Usage |
|----------|--------|---------|------------|---------------|
| /rest/v1/workout_sessions | GET, POST | Workout History | 100/min | `curl -H "apikey: KEY" https://api.serax.io/rest/v1/workout_sessions` |
| /rest/v1/performance_metrics | GET, POST | Track Metrics | 100/min | `fetch('/rest/v1/performance_metrics', { headers: { 'apikey': API_KEY } })` |
| /rest/v1/posts | GET, POST | Social Feed | 100/min | See examples in `TUTORIALS.md` |
| /functions/v1/generate-workout | POST | AI Workout Plan | 20/min | Requires JSON payload |
| /functions/v1/elevenlabs-tts | POST | Text-to-Speech | 20/min | Returns audio output |

---

## Security
- Row Level Security (RLS) enabled  
- Users can only access records associated with their authenticated identity
