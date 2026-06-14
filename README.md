# Redirect Server

A simple Node.js redirect server that forwards visitors to your target URL.

## Setup Instructions

### Local Testing
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (optional):
   ```
   PORT=3000
   REDIRECT_URL=https://your-target-url.com
   ```

3. Run the server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` - it will redirect to your target URL

### Deployment on Vercel

1. **Push to GitHub:**
   - Create a GitHub repository
   - Push this folder to GitHub

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Add New..." and select "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Node.js settings
   - Add Environment Variable:
     - **Name:** `REDIRECT_URL`
     - **Value:** Your target URL (e.g., https://bluemoodpeptides.pythonanywhere.com)
   - Click "Deploy"

3. **Done!** Vercel will give you a live URL that redirects to your target

### Deployment on Render (Alternative)

1. **Push to GitHub:**
   - Create a GitHub repository
   - Push this folder to GitHub

2. **Deploy on Render:**
   - Go to https://render.com
   - Sign in with GitHub
   - Click "New +" and select "Web Service"
   - Connect your GitHub repo
   - Fill in settings:
     - **Name:** redirect-server (or any name)
     - **Environment:** Node
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
   - Add Environment Variable:
     - **Key:** `REDIRECT_URL`
     - **Value:** Your target URL (e.g., https://bluemoodpeptides.pythonanywhere.com)
   - Click "Create Web Service"

## Files Included

- `server.js` - Main Node.js server
- `package.json` - Dependencies and scripts
- `.env.example` - Template for environment variables
- `README.md` - This file

## Environment Variables

- `PORT` - Server port (default: 3000)
- `REDIRECT_URL` - Target URL to redirect to (default: https://bluemoodpeptides.pythonanywhere.com)
