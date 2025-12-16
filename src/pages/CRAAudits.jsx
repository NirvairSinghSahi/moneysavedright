import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function CRAAudits() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/cra_audits.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">CRA Audits & Resolutions</h1>
          <p className="hero-subtitle">Expert representation and resolution for CRA audits</p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">When the CRA Comes Calling, We Answer</h2>
            <p className="text-center mb-xl text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              CRA audits can be stressful and overwhelming. At MSR Tax and Insurance, we provide expert representation and resolution services. We handle the stress so you don't have to. One phone call gets you the expert help you need.
            </p>
          </div>
        </section>
        
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">What We Handle</h2>
            <div className="grid grid-2">
                <div className="card">
                  <h3 className="card-title">Personal Tax Audits</h3>
                  <p className="card-content">Representation for individual tax audits, including income verification, deduction reviews, and credit audits.</p>
                </div>
                <div className="card">
                  <h3 className="card-title">Business Tax Audits</h3>
                  <p className="card-content">Comprehensive business audit representation, including HST/GST audits, corporate tax audits, and payroll audits.</p>
                </div>
                <div className="card">
                  <h3 className="card-title">Appeals & Objections</h3>
                  <p className="card-content">Filing appeals and objections to CRA assessments, including Notice of Objection preparation and representation.</p>
                </div>
                <div className="card">
                  <h3 className="card-title">Collections & Resolutions</h3>
                  <p className="card-content">Negotiating payment arrangements, penalty abatements, and tax debt resolution with the CRA.</p>
                </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl" style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: '700' }}>Our Track Record</h2>
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="text-center">
                <h3 className="mb-sm" style={{ color: '#E5E7EB' }}>95%</h3>
                <p>Successful Resolutions</p>
              </div>
              <div className="text-center">
                <h3 className="mb-sm" style={{ color: '#E5E7EB' }}>500+</h3>
                <p>Audits Resolved</p>
              </div>
              <div className="text-center">
                <h3 className="mb-sm" style={{ color: '#E5E7EB' }}>$2M+</h3>
                <p>In Penalties Saved</p>
              </div>
              <div className="text-center">
                <h3 className="mb-sm" style={{ color: '#E5E7EB' }}>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md">Need Immediate Help with a CRA Audit?</h2>
            <p className="mb-xl text-secondary">Don't face the CRA alone. Call us now for expert representation.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              Contact {CONFIG.phoneFormatted}
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default CRAAudits

