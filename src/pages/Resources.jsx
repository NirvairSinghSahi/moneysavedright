import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function Resources() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/resources.jpg)',
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
            Resources
          </h1>
          <p className="hero-subtitle" style={{ 
            color: '#FFFFFF', 
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.6)' 
          }}>
            Helpful guides and information
          </p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Resource Library</h2>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">Tax Filing Guide</h3>
                <p className="card-content">Complete guide to filing your personal tax return, including deadlines, deductions, and credits.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
              <div className="card">
                <h3 className="card-title">Business Tax Basics</h3>
                <p className="card-content">Essential information for business owners about HST, corporate taxes, and business registration.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
              <div className="card">
                <h3 className="card-title">CRA Audit Preparation</h3>
                <p className="card-content">What to expect during a CRA audit and how to prepare your documentation.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
              <div className="card">
                <h3 className="card-title">Insurance Guide</h3>
                <p className="card-content">Understanding different types of insurance and choosing the right coverage for your needs.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
              <div className="card">
                <h3 className="card-title">Tax Deadlines Calendar</h3>
                <p className="card-content">Important tax filing deadlines and dates to remember throughout the year.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
              <div className="card">
                <h3 className="card-title">Deduction Checklist</h3>
                <p className="card-content">Comprehensive checklist of common tax deductions you might be eligible to claim.</p>
                <button className="btn btn-outline mt-md">Download PDF</button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md" style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: '700' }}>Need More Help?</h2>
            <p className="mb-xl" style={{ color: '#FFFFFF', fontSize: '1.25rem', opacity: '0.95' }}>Our experts are here to answer your questions. One phone call does it all.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact {CONFIG.phoneFormatted}</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Resources

