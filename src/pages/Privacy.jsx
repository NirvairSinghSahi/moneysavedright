import { CONFIG } from '../config'

function Privacy() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <main id="main-content" className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="mb-xl">Privacy Policy</h1>
          <p className="text-secondary mb-lg">Last updated: 2024</p>
          
          <section className="mb-xl">
            <h2 className="mb-md">Introduction</h2>
            <p className="mb-md">
              {CONFIG.companyName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Information We Collect</h2>
            <p className="mb-md">We may collect information about you in a variety of ways:</p>
            <ul style={{ listStyle: 'disc', marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Personal information you provide to us (name, email, phone number, etc.)</li>
              <li>Tax and financial information necessary to provide our services</li>
              <li>Information automatically collected when you visit our website</li>
              <li>Information from third-party sources, as permitted by law</li>
            </ul>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Contact Us</h2>
            <p className="mb-md">
              If you have questions about this Privacy Policy, please contact us at:
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

export default Privacy

