import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Helper function to send JSON response
function sendJson(res, statusCode, data) {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = statusCode
  res.end(JSON.stringify(data))
}

// Helper function to parse JSON body
async function parseBody(req) {
  // Vercel might already parse the body, so check first
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  }
  
  // Otherwise, parse manually
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(body))
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.statusCode = 200
    res.end()
    return
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return sendJson(res, 405, { 
      success: false, 
      error: 'Method not allowed' 
    })
  }

  try {
    const body = await parseBody(req)
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return sendJson(res, 400, { 
        success: false, 
        error: 'Name, email, and message are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return sendJson(res, 400, { 
        success: false, 
        error: 'Invalid email format' 
      })
    }

    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('Resend API key not configured')
      return sendJson(res, 500, { 
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

    return sendJson(res, 200, { 
      success: true, 
      message: 'Thank you for your message. We will contact you soon.' 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Handle Resend specific errors
    if (error.message) {
      console.error('Resend error details:', error.message)
    }

    return sendJson(res, 500, { 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    })
  }
}

