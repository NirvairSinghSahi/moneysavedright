import { Link } from 'react-router-dom'
import { CONFIG } from '../config'
import Hero from '../components/Hero'
import { useReveal } from '../hooks/useReveal'

function Home() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <Hero />
      
      <div id="main-content">
        <style>{`
          .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.25rem;
            max-width: 1000px;
            margin: 0 auto;
          }
          .stats-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem;
            background: white;
            border: 1.5px solid #E5E7EB;
            border-left: 4px solid #D4AF37;
            border-radius: 8px;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }
          .stats-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
            border-left-color: #B8941F;
            border-color: #D4AF37;
          }
          .stats-card:hover .stats-icon {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
          }
          .stats-icon {
            flex-shrink: 0;
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 8px rgba(212, 175, 55, 0.25);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .stats-content {
            flex: 1;
            min-width: 0;
          }
          .stats-number {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.2;
            margin: 0 0 0.25rem 0;
          }
          .stats-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
            line-height: 1.3;
          }
          .stats-description {
            font-size: 0.75rem;
            color: #666;
            margin: 0.25rem 0 0 0;
            line-height: 1.4;
          }
          @media (max-width: 768px) {
            .stats-container {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        <section className="section bg-light" data-reveal="fade-up" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <div className="container">
            <h2 className="text-center mb-xl">Why Choose MSR Tax and Insurance</h2>
            <div className="stats-container">
              <div className="stats-card">
                <div className="stats-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="stats-content">
                  <div className="stats-number">15+</div>
                  <p className="stats-label">Years of Experience</p>
                  <p className="stats-description">Trusted expertise</p>
                </div>
              </div>
              
              <div className="stats-card">
                <div className="stats-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stats-content">
                  <div className="stats-number">10,000+</div>
                  <p className="stats-label">Clients Served</p>
                  <p className="stats-description">Satisfied customers</p>
                </div>
              </div>
              
              <div className="stats-card">
                <div className="stats-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="stats-content">
                  <div className="stats-number">98%</div>
                  <p className="stats-label">Success Rate</p>
                  <p className="stats-description">Proven excellence</p>
                </div>
              </div>
              
              <div className="stats-card">
                <div className="stats-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="stats-content">
                  <div className="stats-number">24/7</div>
                  <p className="stats-label">Support Available</p>
                  <p className="stats-description">Always here for you</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Our Services</h2>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">Personal Tax Services</h3>
                <p className="card-content">E-FILE, NETFILE, individual tax returns, student returns, and self-employed tax services. Expert handling of all personal tax needs.</p>
                <Link to="/tax-services" className="btn btn-outline mt-md">Learn More</Link>
              </div>
              <div className="card">
                <h3 className="card-title">Business Services</h3>
                <p className="card-content">HST Returns, Business Registration, New Incorporation, and Corporate Tax Returns. Complete business tax solutions.</p>
                <Link to="/business-services" className="btn btn-outline mt-md">Learn More</Link>
              </div>
              <div className="card">
                <h3 className="card-title">CRA Audits & Resolutions</h3>
                <p className="card-content">Expert representation and resolution for CRA audits. We handle the stress so you don't have to.</p>
                <Link to="/cra-audits" className="btn btn-outline mt-md">Learn More</Link>
              </div>
              <div className="card">
                <h3 className="card-title">Insurance Services</h3>
                <p className="card-content">Life, Health, Travel, and Business Insurance. Comprehensive coverage tailored to your needs.</p>
                <Link to="/insurance-services" className="btn btn-outline mt-md">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-lg" style={{ color: '#E5E7EB' }}>One Phone Call Does It All</h2>
            <p className="mb-xl" style={{ fontSize: '1.25rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              At MSR Tax and Insurance, we understand that your time is valuable. That's why we've streamlined our services so that one phone call can handle all your tax and insurance needs. No multiple appointments, no runaround—just expert service, delivered right.
            </p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contact {CONFIG.phoneFormatted}
            </a>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md">Ready to Get Started?</h2>
            <p className="mb-xl text-secondary">Contact us today and experience the MSR difference.</p>
            <div className="d-flex gap-md justify-center flex-wrap">
              <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact Now</a>
              <Link to="/contact" className="btn btn-outline">Book Appointment</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
