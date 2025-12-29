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
        
        <section className="section bg-light" data-reveal="fade-up" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <div className="container">
            <h2 className="text-center mb-xl">What We Handle</h2>
            <style>{`
              .audit-services-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
                max-width: 1400px;
                margin: 0 auto;
              }
              .audit-service-card {
                background: white;
                border-radius: 12px;
                padding: 2rem;
                transition: all 0.3s ease;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                border: 2px solid transparent;
                position: relative;
                overflow: hidden;
              }
              .audit-service-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #1a1a1a 0%, #D4AF37 50%, #1a1a1a 100%);
                transform: scaleX(0);
                transition: transform 0.3s ease;
              }
              .audit-service-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 12px 28px rgba(212, 175, 55, 0.2);
                border-color: #D4AF37;
              }
              .audit-service-card:hover::before {
                transform: scaleX(1);
              }
              .audit-service-card:hover .service-icon {
                transform: scale(1.1) rotate(-5deg);
                background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
              }
              .service-icon-wrapper {
                margin-bottom: 1.25rem;
                display: flex;
                justify-content: center;
              }
              .service-icon {
                width: 60px;
                height: 60px;
                border-radius: 12px;
                background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
              }
              .service-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1a1a1a;
                margin: 0 0 0.75rem 0;
                line-height: 1.3;
                text-align: center;
              }
              .service-description {
                font-size: 0.95rem;
                color: #555;
                line-height: 1.6;
                margin: 0;
                text-align: center;
              }
              @media (max-width: 1200px) {
                .audit-services-container {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (max-width: 768px) {
                .audit-services-container {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>
            <div className="audit-services-container">
              <div className="audit-service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="service-title">Personal Tax Audits</h3>
                <p className="service-description">Representation for individual tax audits, including income verification, deduction reviews, and credit audits.</p>
              </div>
              
              <div className="audit-service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="service-title">Business Tax Audits</h3>
                <p className="service-description">Comprehensive business audit representation, including HST/GST audits, corporate tax audits, and payroll audits.</p>
              </div>
              
              <div className="audit-service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      <path d="M13 8H7"></path>
                      <path d="M17 12H7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="service-title">Appeals & Objections</h3>
                <p className="service-description">Filing appeals and objections to CRA assessments, including Notice of Objection preparation and representation.</p>
              </div>
              
              <div className="audit-service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="service-title">Collections & Resolutions</h3>
                <p className="service-description">Negotiating payment arrangements, penalty abatements, and tax debt resolution with the CRA.</p>
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

