import { CONFIG } from '../config'
import { useReveal } from '../hooks/useReveal'

function BusinessServices() {
  useReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <section 
        className="hero" 
        style={{
          backgroundImage: 'url(/assets/images/business_services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Business Services</h1>
          <p className="hero-subtitle">Complete business tax and registration solutions</p>
        </div>
      </section>
      
      <main id="main-content">
        <section className="section" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Comprehensive Business Solutions</h2>
            <p className="text-center mb-xl text-secondary" style={{ maxWidth: '800px', margin: '0 auto' }}>
              From HST returns to new incorporations, MSR Tax and Insurance provides expert business services to keep your company compliant and optimized. One phone call handles all your business tax needs.
            </p>
          </div>
        </section>
        
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">HST Returns</h3>
                <p className="card-content">Professional HST/GST return preparation and filing. We handle all the complexities so you can focus on your business.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Monthly, quarterly, or annual filing</li>
                  <li>Input tax credit optimization</li>
                  <li>Deadline management</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Business Registration</h3>
                <p className="card-content">Complete business registration services including business name registration, HST/GST registration, and business number setup.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Business name registration</li>
                  <li>HST/GST registration</li>
                  <li>Business number setup</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">New Incorporation</h3>
                <p className="card-content">Full incorporation services including federal and provincial incorporation, articles of incorporation, and initial setup.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>Federal or provincial incorporation</li>
                  <li>Articles of incorporation</li>
                  <li>Corporate tax setup</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Corporate Tax Returns</h3>
                <p className="card-content">Comprehensive corporate tax return preparation, including T2 returns, tax planning, and optimization strategies.</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                  <li>T2 corporate tax returns</li>
                  <li>Tax planning and optimization</li>
                  <li>Year-end tax strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section" data-reveal="fade-up">
          <div className="container text-center">
            <h2 className="mb-md">One Phone Call Does It All</h2>
            <p className="mb-xl text-secondary">Ready to streamline your business tax services? Call us today.</p>
            <a href={CONFIG.phoneTel} className="btn btn-primary btn-phone">Contact {CONFIG.phoneFormatted}</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default BusinessServices

