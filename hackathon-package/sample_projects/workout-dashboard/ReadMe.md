# Workout Dashboard

A responsive web app that generates AI workouts and displays performance analytics.

---

## Quick Start

### 1. Clone and Install
```bash
git clone <repo-url>
cd workout-dashboard
npm install
```
### 2. Configure Environment
cp .env.example .env
# Edit .env with your API key and settings
### 3. Run the Application
npm run dev
Features
AI workout generation
Performance metrics visualization
Real-time progress tracking
API Notes
Rate limit: 20 requests/min for AI endpoints
Cache workout results for better performance
.env.example
# SeraX API Configuration
VITE_API_KEY=your_supabase_api_key_here
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_ELEVENLABS_API_KEY=your_elevenlabs_key_optional

# Application Settings
VITE_APP_TITLE="Workout Dashboard"
VITE_MAX_WORKOUT_REQUESTS=10
package.json Dependencies
{
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0",
    "chart.js": "^4.4.0",
    "express": "^4.18.0",
    "dotenv": "^16.3.0"
  },
  "scripts": {
    "dev": "vite --port 3000",
    "build": "vite build",
    "preview": "vite preview"
  }
}
