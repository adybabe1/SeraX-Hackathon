# Audio Processor (Edge Function)

This Edge Function processes audio input for:
- Voice commands  
- Fitness callouts  
- Rep counting  
- Coaching cues  

Includes support for WAV/MP3 uploads.

---

## 🚀 Deployment

```bash
supabase functions deploy audio-processor
```
## 🛠️ Environment Variables
AUDIO_API_URL=https://api.audio-ml.com/v1/process
AUDIO_API_KEY=your_key_here
## 📡 Example Request
curl -X POST \
  -H "Content-Type: audio/wav" \
  -H "Authorization: Bearer YOUR_SUPABASE_ANON_KEY" \
  --data-binary "@/Users/me/voice.wav" \
  https://<PROJECT_REF>.functions.supabase.co/audio-processor
## 🔍 Sample Response
{
  "detected_phrase": "Good job, keep going!",
  "confidence": 0.93
}
