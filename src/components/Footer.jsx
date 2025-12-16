import { Link } from 'react-router-dom'
import { CONFIG } from '../config'

function Footer() {
  return (
    <footer className="bg-navy text-white p-xl">
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 className="mb-md">{CONFIG.companyName}</h3>
            <p>{CONFIG.brandPromise}</p>
          </div>
          <div>
            <h4 className="mb-md">Quick Links</h4>
            <ul>
              <li><Link to="/tax-services" className="text-white">Tax Services</Link></li>
              <li><Link to="/business-services" className="text-white">Business Services</Link></li>
              <li><Link to="/cra-audits" className="text-white">CRA Audits</Link></li>
              <li><Link to="/insurance-services" className="text-white">Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-md">Contact</h4>
            <p><a href={CONFIG.phoneTel} className="text-white">{CONFIG.phoneFormatted}</a></p>
            <p><Link to="/contact" className="text-white">Contact Us</Link></p>
          </div>
        </div>
        <div className="text-center mt-xl pt-lg" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p>&copy; 2024 {CONFIG.companyName}. All rights reserved.</p>
          <p className="mt-sm">
            <Link to="/privacy-policy" className="text-white">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="text-white"> Terms of Service</Link> | 
            <Link to="/disclaimers" className="text-white"> Disclaimers</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

