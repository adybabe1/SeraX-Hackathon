# Social Fitness Feed

Real-time social platform for sharing workout achievements and progress.

---

## Setup

```bash
cd social-feed
npm install
cp .env.example .env
```
# Add your API keys to .env
npm start
Key Features
Live post updates
Team progress tracking
Activity feed
Rate Limits
100 requests/minute for feed updates
Implement client-side debouncing for search
.env.example
# API Configuration
REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here

# Feature Flags
REACT_APP_ENABLE_REALTIME=true
REACT_APP_POST_LIMIT=50
