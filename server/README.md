# Server Setup for Resend Integration

This server handles contact form submissions and sends emails via Resend.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create a `.env` file** in the root directory with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_FROM_EMAIL=your-verified-sender-email@example.com
   CONTACT_EMAIL=contact@example.com
   PORT=3001
   ```

3. **Get Resend API Key**
   - Sign up at https://resend.com
   - Go to API Keys section
   - Create a new API key
   - Copy the API key to your `.env` file

4. **Verify Domain/Email in Resend**
   - Go to Domains section in Resend dashboard
   - Add and verify your domain, or use the default Resend domain
   - Use your verified email as `RESEND_FROM_EMAIL` (format: `noreply@yourdomain.com` or `onboarding@resend.dev` for testing)

5. **Run the Server**
   ```bash
   npm run dev:server
   ```

   Or run both frontend and backend together:
   ```bash
   npm run dev:all
   ```

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "service": "tax",
  "message": "I need help with my taxes"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We will contact you soon."
}
```

### GET /api/health
Health check endpoint.

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key (required)
- `RESEND_FROM_EMAIL`: Verified sender email address (required, format: `name@yourdomain.com` or use `onboarding@resend.dev` for testing)
- `CONTACT_EMAIL`: Email address where contact form submissions will be sent (optional, defaults to RESEND_FROM_EMAIL)
- `PORT`: Server port (optional, defaults to 3001)

## Resend Benefits

- **Free Tier**: 3,000 emails/month free
- **Simple API**: Clean and easy to use
- **Great Deliverability**: High email delivery rates
- **Fast Setup**: Quick domain verification process

