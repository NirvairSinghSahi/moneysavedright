import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CONFIG } from '../config'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tax-services', label: 'Tax Services' },
    { path: '/business-services', label: 'Business Services' },
    { path: '/cra-audits', label: 'CRA Audits' },
    { path: '/insurance-services', label: 'Insurance' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Navigation Bar - Works for both Desktop and Mobile */}
      <nav 
        className={`sticky lg:sticky top-0 z-50 bg-[#F5F5F5] transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 text-[#1A1A1A] font-bold hover:opacity-80 transition-opacity flex-shrink-0"
              aria-label="MSR Tax and Insurance Home"
              onClick={closeMobileMenu}
            >
              <div className="flex-shrink-0">
                <img 
                  src="/assets/images/logo.jpeg" 
                  alt="MSR Tax and Insurance Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (!e.target.nextSibling) {
                      const fallback = document.createElement('div')
                      fallback.textContent = 'MSR'
                      fallback.className = 'h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-[#E5E7EB] rounded-full text-[#1A1A1A] font-bold text-xs sm:text-sm'
                      e.target.parentNode.appendChild(fallback)
                    }
                  }}
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-base sm:text-lg leading-tight font-bold">{CONFIG.companyName}</span>
                <span className="text-xs text-[#6B7280] font-medium uppercase tracking-wide hidden md:block">{CONFIG.brandPromise}</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-start ml-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[#1A1A1A] font-medium hover:text-[#000000] transition-colors whitespace-nowrap ${
                    location.pathname === link.path ? 'text-[#000000] font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Always show hamburger, close button is in sidebar */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#E5E7EB] rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
        style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="p-6 h-full overflow-y-auto" style={{ maxHeight: '100vh', paddingBottom: '80px' }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/images/logo.jpeg" 
                alt="MSR Logo"
                className="h-10 w-10 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  if (!e.target.nextSibling) {
                    const fallback = document.createElement('div')
                    fallback.textContent = 'MSR'
                    fallback.className = 'h-10 w-10 flex items-center justify-center bg-[#E5E7EB] rounded-full text-[#1A1A1A] font-bold text-xs'
                    e.target.parentNode.appendChild(fallback)
                  }
                }}
              />
              <span className="text-[#1A1A1A] font-bold text-lg">{CONFIG.companyName}</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-[#1A1A1A] hover:bg-[#E5E7EB] rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => {
                      closeMobileMenu()
                      // Small delay to ensure navigation happens
                      setTimeout(() => {
                        window.scrollTo(0, 0)
                      }, 100)
                    }}
                    className={`block px-4 py-3 rounded-lg text-[#1A1A1A] font-medium hover:bg-[#F5F5F5] transition-colors ${
                      location.pathname === link.path ? 'bg-[#F5F5F5] font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navigation
