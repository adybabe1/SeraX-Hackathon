# FAQ & Troubleshooting Guide

This document covers the most common errors, edge cases, rate-limit behaviors, and best practices for building reliable integrations.

---

## ⚠️ Common Errors & How to Fix Them

### **401 — Unauthorized**
**Cause:**  
- API key missing  
- Invalid token  
- Header not included correctly  

**Fix:**  
- Verify `apikey` header is included  
- Check for typos in `.env`  
- Restart your server after updating env vars  

---

### **403 — Forbidden (RLS Violation)**
**Cause:**  
Trying to access data that belongs to another user.  
Row Level Security (RLS) blocks cross-user access.

**Fix:**  
- Ensure JWT corresponds to the logged-in user  
- Double-check `user_id` filters in queries  
- Never hardcode user IDs  

---

### **429 — Too Many Requests**
**Cause:**  
Rate limit exceeded.

**Fix:**  
- Wait **60 seconds** before retrying  
- Cache frequently requested data  
- Debounce search/UI actions  

---

### **500 — Internal Server Error**
**Cause:**  
Unexpected backend issue.

**Fix:**  
- Retry after **30 seconds**  
- If repeated, report in `#api-support`  

---

### **503 — Service Unavailable**
**Cause:**  
AI/compute services are temporarily overloaded.

**Fix:**  
- Implement retry logic  
- Backoff intervals: 5s → 10s → 20s  
- Avoid rapid-fire requests during development  

---

## 🧩 Edge Case Handling

### **Network Instability**
Use **exponential backoff** for all retries.

Recommended retry schedule:  
`1s → 2s → 4s → 8s → 16s`

---

### **Partial / Incomplete Data**
Sometimes APIs return partial objects.

Best practices:  
- Always null-check fields  
- Display loading placeholders  
- Avoid assuming arrays are fully populated  

---

### **Concurrent Users / Multi-Session**
When several sessions update data simultaneously:

- Test RLS with multiple dummy users  
- Verify each user only sees their own data  
- Avoid storing user IDs client-side  

---

### **Data Validation**
Before hitting the API:

- Validate emails, passwords, numeric inputs  
- Limit message length  
- Strip unsafe characters  

---

## 👩🏾‍💻 Participant Pro Tips

### 🚀 **Start Simple**
Get **one** flow working first — authentication or a single read endpoint.

---

### 🔒 **Secure Your Keys**
Use a `.env` file and **never commit it**.

.gitignore
.env

---

### 📱 **Test Iteratively**
Add one screen → test → repeat.  
Do not build everything before validating your API calls.

---

### 👥 **Multi-User Warning**
Make sure your app handles authentication properly **before** demoing with multiple accounts.

---

### ⏱️ **Rate Limit Awareness**
Cache data like:
- User profile  
- Static feeds  
- Repeated queries  

---

### 🔄 **Error Handling**
Always show a fallback UI state:
- “Retry” button  
- Loading skeleton  
- Offline mode (optional)

---

## 🧑‍🏫 Mentor Support

### **Slack/Discord**
Join the `#api-support` channel.

### **Response Time**
Under **30 minutes** during event hours.

### **Code Review Sessions**
Saturday: **2 PM – 4 PM**

### **Emergency API Issues**
Tag mentors directly:  
`@mentors`
