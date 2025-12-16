import { CONFIG } from '../config'

function Disclaimers() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <main id="main-content" className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="mb-xl">Disclaimers</h1>
          <p className="text-secondary mb-lg">Last updated: 2024</p>
          
          <section className="mb-xl">
            <h2 className="mb-md">General Information</h2>
            <p className="mb-md">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
            </p>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Tax Services Disclaimer</h2>
            <p className="mb-md">
              Tax laws and regulations are complex and subject to change. The information provided on this website does not constitute tax advice. Each individual's tax situation is unique, and you should consult with a qualified tax professional for advice specific to your circumstances. {CONFIG.companyName} is not responsible for any errors or omissions in the information provided.
            </p>
          </section>
          
          <section className="mb-xl">
            <h2 className="mb-md">Contact Us</h2>
            <p className="mb-md">
              If you have questions about these disclaimers, please contact us at:
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

export default Disclaimers

