import { google } from 'googleapis';
import express from 'express';
import cors from 'cors';

const router = express.Router();

// Initialize Google Sheets client
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = '1dptmBbAWT1GGNJum-hkvvxFxPCnxn4GLBgCpeu5BiSw';
const RANGE = 'Sheet1!A:D';

router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const submissionDate = new Date().toISOString();
    const values = [[name, email, phone, submissionDate]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit form data' 
    });
  }
});

export default router; 