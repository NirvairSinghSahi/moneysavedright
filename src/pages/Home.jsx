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
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Why Choose MSR Tax and Insurance</h2>
            <div className="grid grid-2">
              <div className="card text-center">
                <h3 className="text-gold mb-sm">15+</h3>
                <p className="font-semibold">Years of Experience</p>
              </div>
              <div className="card text-center">
                <h3 className="text-gold mb-sm">10,000+</h3>
                <p className="font-semibold">Clients Served</p>
              </div>
              <div className="card text-center">
                <h3 className="text-gold mb-sm">98%</h3>
                <p className="font-semibold">Success Rate</p>
              </div>
              <div className="card text-center">
                <h3 className="text-gold mb-sm">24/7</h3>
                <p className="font-semibold">Support Available</p>
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
