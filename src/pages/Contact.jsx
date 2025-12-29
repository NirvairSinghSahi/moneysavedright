import { useState } from 'react'
import { CONFIG } from '../config'
import { generateVCard } from '../utils/vcard'
import { useReveal } from '../hooks/useReveal'

function Contact() {
  useReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    // Name validation - strict rules
    const nameTrimmed = formData.name.trim()
    if (!nameTrimmed) {
      newErrors.name = 'Name is required'
    } else if (nameTrimmed.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (nameTrimmed.length > 100) {
      newErrors.name = 'Name must be less than 100 characters'
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(nameTrimmed)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods'
    }
    
    // Email validation - strict rules
    const emailTrimmed = formData.email.trim()
    if (!emailTrimmed) {
      newErrors.email = 'Email is required'
    } else {
      // RFC 5322 compliant email regex (simplified but strict)
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      if (!emailRegex.test(emailTrimmed)) {
        newErrors.email = 'Please enter a valid email address'
      } else if (emailTrimmed.length > 254) {
        newErrors.email = 'Email address is too long (maximum 254 characters)'
      }
    }
    
    // Phone validation - strict format (optional but validated if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        newErrors.phone = 'Phone number must be between 10 and 15 digits'
      } else if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number (e.g., (289) 879-2200 or +1-289-879-2200)'
      }
    }
    
    // Message validation - strict rules
    const messageTrimmed = formData.message.trim()
    if (!messageTrimmed) {
      newErrors.message = 'Message is required'
    } else if (messageTrimmed.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (messageTrimmed.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validate()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${CONFIG.api.baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        if (response.status === 404) {
          setSubmitError('Service temporarily unavailable. Please call us directly or try again later.')
        } else {
          const errorData = await response.json().catch(() => ({}))
          setSubmitError(errorData.error || 'Failed to send message. Please try again.')
        }
        return
      }

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setSubmitError(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setSubmitError('Network error. Please check your connection and try again.')
      } else {
        setSubmitError('An error occurred. Please try again or call us directly.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/contact.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title" style={{ 
            color: '#FFFFFF', 
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' 
          }}>
            Contact Us
          </h1>
          <p className="hero-subtitle" style={{ 
            color: '#FFFFFF', 
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.6)' 
          }}>
            Get in touch with MSR Tax and Insurance
          </p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">Phone</h3>
                <p className="mb-md"><a href={CONFIG.phoneTel} className="btn btn-primary btn-phone" data-action="call">{CONFIG.phoneFormatted}</a></p>
                <p>Monday - Friday: {CONFIG.businessHours.weekdays}</p>
                <p>Saturday: {CONFIG.businessHours.saturday}</p>
                <p>Sunday: {CONFIG.businessHours.sunday}</p>
              </div>
              <div className="card">
                <h3 className="card-title">Quick Actions</h3>
                <div className="d-flex flex-column gap-sm">
                  <a href={CONFIG.phoneTel} className="btn btn-outline" data-action="call">Call Now</a>
                  <button className="btn btn-outline" onClick={generateVCard} data-action="save-contact">Save Contact</button>
                  <a href="#contact-form" className="btn btn-outline">Send Message</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-light" id="contact-form" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Send Us a Message</h2>
            {submitted ? (
              <div className="card text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h3 className="text-success-green mb-md">Thank You!</h3>
                <p>We've received your message and will contact you soon.</p>
              </div>
            ) : (
              <form className="contact-form" style={{ maxWidth: '600px', margin: '0 auto' }} onSubmit={handleSubmit}>
                {submitError && (
                  <div className="card" style={{ 
                    maxWidth: '600px', 
                    margin: '0 auto 1.5rem', 
                    backgroundColor: '#FEE2E2', 
                    border: '1px solid #EF4444',
                    color: '#991B1B',
                    padding: '1rem'
                  }}>
                    <p style={{ margin: 0 }}>{submitError}</p>
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    maxLength={100}
                  />
                  {errors.name && <span id="name-error" className="error-message" role="alert">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    maxLength={254}
                    autoComplete="email"
                  />
                  {errors.email && <span id="email-error" className="error-message" role="alert">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(289) 879-2200"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <span id="phone-error" className="error-message" role="alert">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="tax">Tax Services</option>
                    <option value="business">Business Services</option>
                    <option value="cra">CRA Audits</option>
                    <option value="insurance">Insurance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    maxLength={2000}
                  ></textarea>
                  <div className="text-sm text-[#6B7280] mt-1">
                    {formData.message.length}/2000 characters
                  </div>
                  {errors.message && <span id="message-error" className="error-message" role="alert">{errors.message}</span>}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={loading}
                  style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact

