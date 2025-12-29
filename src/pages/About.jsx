import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function About() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/about.jpg)',
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
            About MSR Tax and Insurance
          </h1>
          <p className="hero-subtitle" style={{ 
            color: '#FFFFFF', 
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.6)' 
          }}>
            {CONFIG.brandPromise}
          </p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Our Story</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="mb-md">
                MSR Tax and Insurance was founded with a simple mission: to make tax and insurance services accessible, reliable, and stress-free for Canadians. We understand that dealing with taxes and insurance can be overwhelming, which is why we've built our business around one core principle: "{CONFIG.brandPromise}"
              </p>
              <p className="mb-md">
                With over 15 years of experience, we've helped thousands of individuals and businesses navigate the complexities of Canadian tax law and insurance. Our team of certified professionals stays current with all CRA regulations and insurance industry changes to ensure you receive the best possible service.
              </p>
              <p>
                What sets us apart is our commitment to making everything simple. One phone call handles all your tax and insurance needs—no multiple appointments, no runaround, just expert service delivered right.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section bg-light" data-reveal="fade-up" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <div className="container">
            <h2 className="text-center mb-xl">Our Mission & Values</h2>
            <style>{`
              .values-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                gap: 1.5rem;
                max-width: 1100px;
                margin: 0 auto;
              }
              .value-card {
                background: white;
                border-radius: 12px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s ease;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                border: 2px solid transparent;
                position: relative;
                overflow: hidden;
              }
              .value-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #D4AF37 0%, #B8941F 100%);
                transform: scaleX(0);
                transition: transform 0.3s ease;
              }
              .value-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 12px 28px rgba(212, 175, 55, 0.2);
                border-color: #D4AF37;
              }
              .value-card:hover::before {
                transform: scaleX(1);
              }
              .value-card:hover .value-icon {
                transform: scale(1.1) rotate(5deg);
                background: linear-gradient(135deg, #B8941F 0%, #D4AF37 100%);
              }
              .value-icon-wrapper {
                margin-bottom: 1.25rem;
                display: flex;
                justify-content: center;
              }
              .value-icon {
                width: 56px;
                height: 56px;
                border-radius: 12px;
                background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
                transition: all 0.3s ease;
              }
              .value-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: #1a1a1a;
                margin: 0 0 0.75rem 0;
                line-height: 1.3;
              }
              .value-description {
                font-size: 0.95rem;
                color: #555;
                line-height: 1.6;
                margin: 0;
              }
              @media (max-width: 768px) {
                .values-container {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>
            <div className="values-container">
              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">We strive for excellence in every interaction, ensuring accuracy, professionalism, and outstanding results.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">We conduct business with the highest ethical standards, building trust through transparency and honesty.</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon-wrapper">
                  <div className="value-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="value-title">Simplicity</h3>
                <p className="value-description">We simplify complex processes, making tax and insurance services accessible and stress-free.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md" style={{ color: '#D4AF37', fontSize: '2.5rem', fontWeight: '700' }}>Ready to Experience the MSR Difference?</h2>
            <p className="mb-xl" style={{ color: '#FFFFFF', fontSize: '1.25rem', opacity: '0.95' }}>One phone call does it all. Contact us today.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact {CONFIG.phoneFormatted}</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default About

