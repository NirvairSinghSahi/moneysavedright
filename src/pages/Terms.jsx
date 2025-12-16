import { CONFIG } from '../config'

function Terms() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <main id="main-content" className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="mb-xl">Terms of Service</h1>
          <p className="text-secondary mb-lg">Last updated: 2024</p>
          
          <section className="mb-xl">
            <h2 className="mb-md">Agreement to Terms</h2>
            <p className="mb-md">
              By accessing or using the services of {CONFIG.companyName} ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Services</h2>
            <p className="mb-md">
              {CONFIG.companyName} provides tax preparation, tax filing, business services, CRA audit representation, and insurance services. Our services are provided subject to these terms and any additional agreements we may enter into with you.
            </p>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Contact Us</h2>
            <p className="mb-md">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>{CONFIG.companyName}</strong><br />
              Phone: <a href={CONFIG.phoneTel}>{CONFIG.phoneFormatted}</a><br />
              Email: <a href="mailto:info@msrtaxinsurance.com">info@msrtaxinsurance.com</a>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Terms

