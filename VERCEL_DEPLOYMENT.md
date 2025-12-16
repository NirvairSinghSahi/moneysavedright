# Vercel Deployment Guide

This guide will help you deploy the MSR Tax and Insurance website to Vercel with the contact form working.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Your Resend API key and verified email/domain

## Deployment Steps

### 1. Push Your Code to GitHub/GitLab/Bitbucket

Make sure your code is in a Git repository and pushed to your remote.

### 2. Deploy to Vercel

1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will auto-detect Vite as the framework
4. Click "Deploy"

### 3. Configure Environment Variables

After deployment, you need to add environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_FROM_EMAIL=your-verified-email@yourdomain.com
   CONTACT_EMAIL=msrtax09@gmail.com
   ```

4. Make sure to add these for **Production**, **Preview**, and **Development** environments
5. Click **Save**

### 4. Redeploy

After adding environment variables, you need to redeploy:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**

Or trigger a new deployment by pushing a commit to your repository.

## How It Works

- The frontend is built using Vite and served as static files
- The contact form API is handled by serverless functions in the `/api` folder
- When a form is submitted, it calls `/api/contact` which sends an email via Resend
- The API automatically uses relative paths in production (no need to configure `VITE_API_URL`)

## Testing

1. Visit your deployed site
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email (the address set in `CONTACT_EMAIL`) for the submission

## Troubleshooting

### Form shows "Network error"

- Check that environment variables are set correctly in Vercel
- Make sure you've redeployed after adding environment variables
- Check Vercel function logs: **Deployments** → Click on deployment → **Functions** tab

### Email not sending

- Verify your Resend API key is correct
- Check that `RESEND_FROM_EMAIL` is a verified email/domain in Resend
- Check Vercel function logs for error messages
- Make sure `CONTACT_EMAIL` is set to a valid email address

### API endpoint not found

- Make sure the `/api` folder is in the root of your project
- Check that `api/contact.js` exists
- Verify the deployment logs for any build errors

## Local Development

For local development, you can still use the Express server:

```bash
npm run dev:all
```

This runs both the frontend (Vite) and backend (Express) servers.

For production builds, the API routes in `/api` will be used automatically by Vercel.

