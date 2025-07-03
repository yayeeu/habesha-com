import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    // Validate required fields
    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Initialize Google Sheets client
    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:C', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone]],
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 
