# Quickstart — GET BUILDING IN 10 MINUTES

## QUICKSTART.md

### Step 1: Get Your API Key
- Register at [hackathon-portal.serax.io]  
- Receive unique API key via email  
- Security Note: Store your API key in environment variables. Never hardcode in source code.

---

### Step 2: Test Your Connection

```bash
curl -H "apikey: YOUR_KEY_HERE" "https://api.serax.io/rest/v1/profiles"
```
### Step 3: First API Call (JavaScript)
const API_KEY = process.env.API_KEY; // Use environment variables in production

fetch('https://api.serax.io/rest/v1/profiles', {
  headers: { 
    'apikey': API_KEY,
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log('Your profile:', data));
### Step 4: Build a Micro-Workflow
// Example Micro-Workflow
// 1. Generate workout
// 2. Log session
// 3. Post to feed

// See TUTORIALS.md for full workflow examples
