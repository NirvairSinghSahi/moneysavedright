import { useNavigate } from 'react-router-dom'
import { CONFIG } from '../config'
import { generateVCard } from '../utils/vcard'

function MobileActionBar() {
  const navigate = useNavigate()

  const handleBookAppointment = () => {
    navigate('/contact')
  }

  return (
    <div className="mobile-action-bar">
      <div className="mobile-action-bar-buttons">
        <button 
          className="mobile-action-btn" 
          onClick={() => window.location.href = CONFIG.phoneTel}
          aria-label="Call MSR Tax and Insurance"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Call</span>
        </button>
        <button 
          className="mobile-action-btn" 
          onClick={(e) => generateVCard(e)}
          aria-label="Save Contact"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <span>Save</span>
        </button>
        <button 
          className="mobile-action-btn" 
          onClick={handleBookAppointment}
          aria-label="Book Appointment"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Book</span>
        </button>
      </div>
    </div>
  )
}

export default MobileActionBar

