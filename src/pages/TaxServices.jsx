import { Link } from 'react-router-dom'
import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function TaxServices() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/personal_tax_services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Personal Tax Services</h1>
          <p className="hero-subtitle">Expert tax filing for individuals, students, and self-employed professionals</p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Comprehensive Personal Tax Solutions</h2>
            <p className="text-center mb-xl text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Whether you're filing as an individual, student, or self-employed professional, MSR Tax and Insurance provides expert tax services to maximize your refunds and minimize your stress. One phone call handles it all.
            </p>
          </div>
        </section>
        
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">E-FILE Services</h3>
                <p className="card-content">Electronic filing directly to the CRA. Fast, secure, and efficient tax submission with instant confirmation.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Instant CRA confirmation</li>
                  <li>Faster refund processing</li>
                  <li>Secure electronic submission</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">NETFILE Services</h3>
                <p className="card-content">Online tax filing through CRA's NETFILE system. Professional preparation and submission of your tax return.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>CRA-certified software</li>
                  <li>Direct submission to CRA</li>
                  <li>Electronic notice of assessment</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Individual Tax Returns</h3>
                <p className="card-content">Complete tax preparation for individuals, including all deductions, credits, and tax optimization strategies.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Maximize deductions</li>
                  <li>Claim all eligible credits</li>
                  <li>Tax planning advice</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Student Tax Returns</h3>
                <p className="card-content">Specialized tax services for students, including tuition credits, education amounts, and student-specific deductions.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Tuition tax credits</li>
                  <li>Education amounts</li>
                  <li>Student loan interest</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Why Mistakes Are Costly</h2>
            <div className="grid grid-3">
              <div className="card">
                <h4 className="mb-sm">Missed Deductions</h4>
                <p>Missing eligible deductions can cost you hundreds or thousands of dollars in unnecessary taxes.</p>
              </div>
              <div className="card">
                <h4 className="mb-sm">Filing Errors</h4>
                <p>Simple errors can trigger CRA reviews, audits, and penalties that add stress and expense.</p>
              </div>
              <div className="card">
                <h4 className="mb-sm">Late Filing</h4>
                <p>Late filing results in penalties and interest charges that compound over time.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-navy text-white" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl" style={{ color: '#E5E7EB' }}>How MSR Solves It</h2>
            <div className="grid grid-2" style={{ gap: 'var(--spacing-xl)', alignItems: 'start' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 className="mb-md" style={{ color: '#E5E7EB' }}>Expert Knowledge</h3>
                <p>Our certified tax professionals stay current with all CRA regulations and tax law changes to ensure accurate filing.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 className="mb-md" style={{ color: '#E5E7EB' }}>Thorough Review</h3>
                <p>We review every aspect of your return to identify all eligible deductions and credits you might miss.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 className="mb-md" style={{ color: '#E5E7EB' }}>Error Prevention</h3>
                <p>Our systematic approach catches errors before submission, preventing costly CRA reviews and penalties.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 className="mb-md" style={{ color: '#E5E7EB' }}>Peace of Mind</h3>
                <p>With MSR handling your taxes, you can focus on what matters most while we ensure everything is done right.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md">One Phone Call Does It All</h2>
            <p className="mb-xl text-secondary">Ready to get your taxes done right? Call us today.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact {CONFIG.phoneFormatted}</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default TaxServices

