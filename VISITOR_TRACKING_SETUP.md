# Visitor IP Tracking Setup

This setup adds visitor IP tracking to your Google Sheets with automatic location detection. Here's what was implemented:

## What's New

1. **Form Submission Tracking (Sheet1)**: Enhanced to include visitor IP when someone submits the form
2. **Page Visit Tracking (Sheet3)**: New endpoint `/api/visit` that captures every page visit with IP-based location
3. **Frontend Integration**: Automatic tracking of all page visits using React hooks
4. **IP-based Location Detection**: Automatically determines visitor location from their IP address

## Google Sheets Structure

### Sheet1 (Form Submissions)
- Column A: Name
- Column B: Email  
- Column C: Phone
- Column D: Timestamp
- Column E: Location Data (from frontend)

### Sheet3 (Visitor Tracking) - Simplified Structure
- Column A: Visitor IP Address
- Column B: Location (determined from IP)
- Column C: Timestamp
- Column D: Referrer (or "Form Submission" for form submissions)

## How It Works

1. **IP Detection**: Uses multiple fallback methods to get the real IP address (handles proxies, load balancers, etc.)
2. **Location Detection**: Uses ipapi.co service to determine city and country from IP address
3. **Form Submissions**: When someone submits the contact form, their IP and location are logged to both Sheet1 and Sheet3
4. **Page Visits**: Every time someone visits any page on your site, their IP, location, and visit details are logged to Sheet3

## Location Detection Features

- **Automatic**: No manual setup required
- **Free Service**: Uses ipapi.co (free tier available)
- **Fallback**: Shows "Unknown" if location can't be determined
- **Local IPs**: Skips location lookup for local/private IP addresses (127.x.x.x, 192.168.x.x)
- **Format**: "City, Country" or just "Country" if city is unavailable

## Environment Variables Required

Make sure your `.env` file has:
```
GOOGLE_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id
```

## Testing

1. Start your server: `npm start`
2. Visit your website
3. Check Sheet3 in your Google Sheets - you should see visitor data with location
4. Submit the contact form
5. Check both Sheet1 and Sheet3 for the form submission data

## Example Sheet3 Data

```
IP Address    | Location           | Timestamp           | Referrer
192.168.1.1   | Unknown            | 07/01/2025 11:30 PM | Direct
84.250.163.163| Helsinki, Finland  | 07/01/2025 11:31 PM | https://google.com
84.250.163.163| Helsinki, Finland  | 07/01/2025 11:32 PM | Form Submission
```

## Privacy Considerations

- This tracks IP addresses which may be considered personal data in some jurisdictions
- Location data is approximate (city/country level)
- Consider adding a privacy policy if you haven't already
- The tracking is transparent and doesn't interfere with user experience
- All tracking calls are made asynchronously and won't break the site if they fail

## Customization

You can modify the tracking by:
- Changing the Google Sheets ranges in `server.js`
- Using a different geolocation service
- Adding more data fields to track
- Filtering or anonymizing IP addresses
- Adding rate limiting to prevent spam 