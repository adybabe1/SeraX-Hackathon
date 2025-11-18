# Voice Coach Demo

Text-to-speech integration for AI-powered voice coaching.

---

## Installation

```bash
cd voice-coach-demo
pip install -r requirements.txt
cp .env.example .env
```
# Configure your API keys
python app.py
Usage Notes
TTS endpoint: 20 requests/minute limit
Audio files are generated on-demand
Cache frequently used coaching phrases
.env.example
# SeraX API
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your_service_role_key_here

# TTS Settings
ELEVENLABS_API_KEY=your_elevenlabs_key
VOICE_ID=21m00Tcm4TlvDq8ikWAM
requirements.txt
supabase==1.0.0
requests==2.31.0
python-dotenv==1.0.0
flask==2.3.0
