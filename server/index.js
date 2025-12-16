import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      })
    }

    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured')
      return res.status(500).json({ 
        success: false, 
        error: 'Email service not configured' 
      })
    }

    // Prepare email content
    const serviceLabels = {
      tax: 'Tax Services',
      business: 'Business Services',
      cra: 'CRA Audits',
      insurance: 'Insurance',
      other: 'Other'
    }

    const serviceLabel = serviceLabels[service] || 'Not specified'

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL,
      subject: `New Contact Form Submission - ${serviceLabel}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Service Interest:</strong> ${serviceLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        Service Interest: ${serviceLabel}
        
        Message:
        ${message}
      `
    })

    if (error) {
      throw error
    }

    res.json({ 
      success: true, 
      message: 'Thank you for your message. We will contact you soon.' 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Handle Resend specific errors
    if (error.message) {
      console.error('Resend error details:', error.message)
    }

    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️  WARNING: RESEND_API_KEY not set. Email functionality will not work.')
  }
})

