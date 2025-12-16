import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function InsuranceServices() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/insurance.jpg)',
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
            Insurance Services
          </h1>
          <p className="hero-subtitle" style={{ 
            color: '#FFFFFF', 
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.6)' 
          }}>
            Comprehensive insurance coverage tailored to your needs
          </p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Complete Insurance Solutions</h2>
            <p className="text-center mb-xl text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              From life and health insurance to travel and business coverage, MSR Tax and Insurance provides comprehensive insurance solutions. One phone call gets you the coverage you need.
            </p>
          </div>
        </section>
        
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">Life Insurance</h3>
                <p className="card-content">Protect your loved ones with comprehensive life insurance coverage. Term, whole life, and universal life options available.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Term life insurance</li>
                  <li>Whole life insurance</li>
                  <li>Universal life insurance</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Health Insurance</h3>
                <p className="card-content">Supplement your provincial health coverage with additional health insurance for dental, vision, and extended health benefits.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Extended health coverage</li>
                  <li>Dental insurance</li>
                  <li>Vision insurance</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Travel Insurance</h3>
                <p className="card-content">Comprehensive travel insurance coverage for your trips, including medical emergencies, trip cancellation, and baggage protection.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Medical emergency coverage</li>
                  <li>Trip cancellation protection</li>
                  <li>Baggage and personal effects</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Business Insurance</h3>
                <p className="card-content">Protect your business with comprehensive commercial insurance, including liability, property, and business interruption coverage.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>General liability insurance</li>
                  <li>Commercial property insurance</li>
                  <li>Business interruption insurance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md" style={{ color: '#E5E7EB' }}>One Phone Call Does It All</h2>
            <p className="mb-xl">Ready to protect what matters most? Call us today for a free insurance consultation.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact {CONFIG.phoneFormatted}</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default InsuranceServices

