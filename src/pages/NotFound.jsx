import { Link } from 'react-router-dom'
import { CONFIG } from '../config'

function NotFound() {
  return (
    <div style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', maxWidth: '600px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
        <Link to="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default NotFound

