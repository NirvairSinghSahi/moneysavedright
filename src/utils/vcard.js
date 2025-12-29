import { CONFIG } from '../config'

export function generateVCard(event) {
  try {
    // Prevent default if event is provided
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    const vcardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${CONFIG.companyName}`,
      `TEL;TYPE=CELL:${CONFIG.phone}`,
      `NOTE:${CONFIG.brandPromise}`,
      'END:VCARD'
    ].join('\n')

    // Check if we're on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    
    if (isMobile) {
      // For mobile devices, use data URL approach which works better
      const dataUri = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcardData)
      const link = document.createElement('a')
      link.href = dataUri
      link.download = 'MSR-Tax-Insurance.vcf'
      link.setAttribute('target', '_blank')
      
      if (isIOS) {
        // iOS requires the link to be in the DOM and visible (even briefly)
        // We'll position it off-screen but make it accessible
        link.style.position = 'absolute'
        link.style.left = '0'
        link.style.top = '0'
        link.style.width = '1px'
        link.style.height = '1px'
        link.style.opacity = '0'
        link.style.pointerEvents = 'auto'
        link.style.zIndex = '9999'
      } else {
        // Android - can be hidden
        link.style.display = 'none'
      }
      
      document.body.appendChild(link)
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        // Try multiple methods for better compatibility
        try {
          // Primary method: direct click
          link.click()
        } catch (e) {
          // Fallback: try MouseEvent
          try {
            const clickEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            })
            link.dispatchEvent(clickEvent)
          } catch (e2) {
            // Last resort: try programmatic click after small delay
            setTimeout(() => {
              try {
                link.click()
              } catch (e3) {
                console.error('All click methods failed:', e3)
              }
            }, 100)
          }
        }
        
        // Clean up after a delay
        setTimeout(() => {
          if (link.parentNode) {
            document.body.removeChild(link)
          }
        }, 2000)
      })
    } else {
      // Desktop approach using Blob
      const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'MSR-Tax-Insurance.vcf'
      link.style.display = 'none'
      
      document.body.appendChild(link)
      link.click()
      
      setTimeout(() => {
        if (link.parentNode) {
          document.body.removeChild(link)
        }
        URL.revokeObjectURL(url)
      }, 100)
    }
  } catch (error) {
    console.error('Error generating vCard:', error)
    
    // Fallback: Try to open as data URL in new window/tab
    try {
      const dataUri = 'data:text/vcard;charset=utf-8,' + encodeURIComponent([
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${CONFIG.companyName}`,
        `TEL;TYPE=CELL:${CONFIG.phone}`,
        `NOTE:${CONFIG.brandPromise}`,
        'END:VCARD'
      ].join('\n'))
      
      window.open(dataUri, '_blank')
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError)
      alert('Unable to save contact. Please copy the phone number manually: ' + CONFIG.phoneFormatted)
    }
  }
}

