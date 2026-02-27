# Contact Form Setup Guide

## Overview
The contact form allows visitors to send you messages directly from your portfolio. Currently, it logs submissions to the console. For production, you can integrate email services.

## Current Setup (Development)
- ✅ Form validates input
- ✅ Shows loading states
- ✅ Animated with Framer Motion
- ✅ Logs to console
- ⚠️ **Does not send emails** (needs configuration)

---

## Add Email Sending (Production)

### Option 1: Gmail SMTP (Free, Simple)

1. **Install nodemailer**:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Create App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication
   - Go to "App Passwords"
   - Generate password for "Mail"

3. **Add to `.env` file**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=alaebilaizi@gmail.com
   ```

4. **Uncomment email code** in `server/routes.ts` (lines marked with TODO)

### Option 2: SendGrid (Reliable, Free tier)

1. **Sign up**: https://sendgrid.com/
2. **Get API Key**: Settings → API Keys
3. **Install**: `npm install @sendgrid/mail`
4. **Add to routes.ts**:
   ```typescript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   await sgMail.send({
     to: process.env.CONTACT_EMAIL,
     from: process.env.SENDGRID_FROM_EMAIL,
     subject: `Portfolio Contact: ${subject}`,
     text: message,
     html: `...`
   });
   ```

### Option 3: Resend (Modern, Developer-friendly)

1. **Sign up**: https://resend.com/
2. **Get API Key**: API Keys
3. **Install**: `npm install resend`
4. **Use in routes.ts**:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'portfolio@yourdomain.com',
     to: process.env.CONTACT_EMAIL,
     subject: `Portfolio Contact: ${subject}`,
     html: `...`
   });
   ```

---

## Testing Locally

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Open**: http://localhost:5000

3. **Fill form** and submit

4. **Check console** for submission log

---

## Vercel Deployment

### Add Environment Variables:

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. Add these variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`

3. **Redeploy** your project

---

## Security Notes

- ⚠️ **Never commit `.env` to Git**
- ✅ Use environment variables for all secrets
- ✅ Validate all form inputs on backend
- ✅ Add rate limiting to prevent spam (optional)
- ✅ Use HTTPS in production (Vercel handles this)

---

## Form Features

### Frontend ([Home.tsx](client/src/pages/Home.tsx)):
- ✅ Input validation
- ✅ Loading state
- ✅ Success animation
- ✅ Error handling
- ✅ Framer Motion animations
- ✅ Responsive design

### Backend ([routes.ts](server/routes.ts)):
- ✅ Email validation
- ✅ Required field checking
- ✅ Error handling
- ✅ Console logging
- ⏳ Email sending (needs configuration)

---

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify backend is running
- Check network tab for API call

**Emails not sending?**
- Verify environment variables are set
- Check SMTP credentials
- Review server logs
- Test with a simple email first

**Rate limiting needed?**
- Install: `npm install express-rate-limit`
- Add to routes.ts:
  ```typescript
  import rateLimit from 'express-rate-limit';
  
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 5 requests per windowMs
  });
  
  app.post("/api/contact", contactLimiter, async (req, res) => {
    // ...
  });
  ```

---

## Alternative: Contact via Email Link

If you prefer not to set up email sending, you can replace the form with a mailto link:

```tsx
<a href="mailto:alaebilaizi@gmail.com?subject=Portfolio Contact">
  Send Email
</a>
```

But the form provides a better user experience! 🎉
