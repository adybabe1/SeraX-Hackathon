# Custom Workout Generator (Edge Function)

This Edge Function generates personalized workout plans in real time using user profile data, fitness level, available equipment, and duration.

Perfect for:
- Fitness apps  
- Personalized coaching systems  
- Gamified training experiences  

---

## 🚀 Deployment

```bash
supabase functions deploy custom-workout-generator
🛠️ Environment Variables
Add these to your .env or Supabase dashboard:
OPENAI_API_KEY=your_key_here
WORKOUT_MODEL=basic-fitness-1
```
## 📡 Example Request
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SUPABASE_ANON_KEY" \
  -d '{
    "user": {
      "level": "beginner",
      "equipment": ["dumbbells"],
      "duration": 25
    }
  }' \
  https://<PROJECT_REF>.functions.supabase.co/custom-workout-generator
## 🧪 Sample Response
{
  "plan": [
    "5-min warmup",
    "3x12 dumbbell squats",
    "3x10 shoulder press",
    "2 rounds light cardio",
    "Cooldown stretch"
  ]
}
