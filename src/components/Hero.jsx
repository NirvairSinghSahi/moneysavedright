import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CONFIG } from '../config'
import { generateVCard } from '../utils/vcard'
import ServiceTicker from './ServiceTicker'

function Hero() {
  const navigate = useNavigate()
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    // Set a timeout to show logo even if image fails to load
    const timer = setTimeout(() => {
      if (!logoLoaded) {
        setLogoError(true)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [logoLoaded])

  const handleBookAppointment = () => {
    navigate('/contact')
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-logo">
          {!logoError ? (
            <img 
              src="/assets/images/logo.jpeg" 
              alt="MSR Tax and Insurance Logo" 
              onLoad={() => setLogoLoaded(true)}
              onError={() => {
                setLogoError(true)
                setLogoLoaded(true)
              }}
              style={{
                width: '250px',
                height: '250px',
                maxWidth: '100%',
                opacity: logoLoaded ? 1 : 0,
                transform: logoLoaded ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                display: logoError ? 'none' : 'block'
              }}
            />
          ) : (
            <div style={{
              width: '250px',
              height: '250px',
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              MSR
            </div>
          )}
        </div>
        
        <h1 className="hero-title">{CONFIG.brandPromise}</h1>
        
        <p className="hero-subtitle">
          {CONFIG.brandPromiseFull}
        </p>
        
        <ServiceTicker />
        
        <div className="hero-ctas">
          <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone" data-action="call">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Now
          </a>
          <button className="btn btn-secondary" onClick={generateVCard} data-action="save-contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Save Contact
          </button>
          <button className="btn btn-secondary" onClick={handleBookAppointment} data-action="book-appointment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
