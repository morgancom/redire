require('dotenv').config();
const express = require('express');
const app = express();

// Set the port (Vercel/Render will assign via PORT env variable)
const PORT = process.env.PORT || 3000;

// Set the redirect target URL (change this to your target link)
const REDIRECT_URL = process.env.REDIRECT_URL || 'https://bluemoodpeptides.pythonanywhere.com';

// Middleware
app.use(express.static('public'));

// Root route - redirect to target URL
app.get('/', (req, res) => {
  res.redirect(REDIRECT_URL);
});

// Optional: API endpoint to check the redirect target
app.get('/api/target', (req, res) => {
  res.json({ target: REDIRECT_URL });
});

// 404 - redirect to target for any unmapped routes
app.get('*', (req, res) => {
  res.redirect(REDIRECT_URL);
});

// Start server
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
  console.log(`Redirecting to: ${REDIRECT_URL}`);
});
