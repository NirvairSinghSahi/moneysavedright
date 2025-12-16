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
        
        <section className="section bg-light" data-reveal="fade-up">
          <div className="container">
            <h2 className="text-center mb-xl">Our Mission & Values</h2>
            <div className="grid grid-2">
              <div className="card">
                <h3 className="card-title">Excellence</h3>
                <p className="card-content">We strive for excellence in every interaction, ensuring accuracy, professionalism, and outstanding results.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Integrity</h3>
                <p className="card-content">We conduct business with the highest ethical standards, building trust through transparency and honesty.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Simplicity</h3>
                <p className="card-content">We simplify complex processes, making tax and insurance services accessible and stress-free.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Client-Focused</h3>
                <p className="card-content">Your success is our success. We're committed to understanding your needs and delivering personalized solutions.</p>
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

