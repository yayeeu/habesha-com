import express from 'express';
import path from 'path';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// === Your API endpoint ===
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, phone, location } = req.body;
    console.log('Received form submission:', { name, email, phone, location });

    // Validate required fields
    if (!name || !email || !phone) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets client
    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY
        ?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format location data
    const locationString = location ? [
      location.ip,
      location.city || 'Unknown',
      location.region || 'Unknown',
      location.country || 'Unknown',
      location.timezone || 'Unknown'
    ].join(', ') : 'Location data not available';

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E', // Updated range to include location
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name, 
          email, 
          phone,
          new Date().toLocaleString('en-US', { 
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          locationString
        ]],
      },
    });

    console.log('Successfully appended data to Google Sheet');
    res.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ 
      error: 'Failed to submit form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// === Serve frontend from Vite build ===
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving index.html
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Google Sheet ID:', process.env.GOOGLE_SHEET_ID ? 'Configured' : 'Not configured');
  console.log('Google Client Email:', process.env.GOOGLE_CLIENT_EMAIL ? 'Configured' : 'Not configured');
  console.log('Google Private Key:', process.env.GOOGLE_PRIVATE_KEY ? 'Configured' : 'Not configured');
}); 