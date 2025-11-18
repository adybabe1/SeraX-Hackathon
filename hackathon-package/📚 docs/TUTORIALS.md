# TUTORIALS.md — STRUCTURED EXERCISES

## Exercise 1: User Profile Setup
- Objective: Create and display a user profile  
- Tip: Test with one user profile first before building multi-user features

---

## Exercise 2: AI Workout Generation
- Objective: Generate a 15-minute AI workout for a "busy student"  
- Endpoint: `/functions/v1/generate-workout`  
- Rate Limit Note: Cache workout results to avoid hitting 20/min limit

---

## Exercise 3: Social Fitness Feed
- Objective: Log workouts and post results to social feed  
- Endpoints: `/rest/v1/workout_sessions` + `/rest/v1/posts`

---

## Exercise 4: Real-time Team Dashboard — CLOUD INTEGRATION

```javascript
// Connect to realtime feed for live team updates
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, API_KEY);

// Subscribe to team progress updates
const subscription = supabase
  .channel('team-progress')
  .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'posts' },
      (payload) => {
        console.log('Live update!', payload);
        updateDashboard(payload.new);
      }
  )
  .subscribe();
API Workflow Diagram
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│   Generate      │    │     Log          │    │     Post to     │    │    Live          │
│   AI Workout    │───▶│   Workout        │───▶│    Social       │───▶│   Dashboard      │
│                 │    │   Session        │    │     Feed        │    │   Updates        │
└─────────────────┘    └──────────────────┘    └─────────────────┘    └──────────────────┘
         │                       │                       │                      │
         ▼                       ▼                       ▼                      ▼
  /functions/v1/          /rest/v1/               /rest/v1/posts        Realtime Subscription
  generate-workout      workout_sessions                                (WebSocket)
