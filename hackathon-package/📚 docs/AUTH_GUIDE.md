# AUTH_GUIDE.md — Authentication Guide

## 1. Overview
This guide provides detailed instructions on authentication flows, token handling, and best security practices for using SeraX APIs.

---

## 2. Authentication Flows

### 2.1 API Key Authentication
- All API requests require a valid API key.  
- API key should be sent in the request header:

```http
GET /rest/v1/profiles
Host: api.serax.io
apikey: YOUR_API_KEY
```
Use environment variables to store API keys:
# Example for local environment
export API_KEY="your_supabase_api_key_here"
### 2.2 User Authentication (JWT)
For endpoints requiring user sign-in:
Sign up via /auth/signup
Receive a JWT access token
Use the token in Authorization header:
Authorization: Bearer YOUR_JWT_TOKEN
Token expires after a predefined time (e.g., 1 hour).
Refresh tokens via /auth/refresh to maintain session.
## 3. Token Handling Best Practices
Never hardcode API keys or JWT tokens in source code.
Store sensitive credentials in environment variables or secret managers.
Use HTTPS for all API requests to prevent token interception.
Rotate keys regularly and revoke old ones.
## 4. Security Reminder
Critical: Do not commit API keys to public repositories.
Always validate tokens server-side before granting access to user data.
Enable Row Level Security (RLS) in Supabase to restrict user access to only their own records.
## 5. Sample Environment Setup
# API Keys
VITE_API_KEY=your_supabase_api_key_here
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_ELEVENLABS_API_KEY=your_elevenlabs_key_optional

# JWT Token Settings
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRATION=3600
