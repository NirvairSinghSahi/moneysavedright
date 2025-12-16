import { useState, useEffect } from 'react'
import { CONFIG } from '../config'

function ServiceTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemHeight = 70 // Height of each item in pixels

  // Create extended array for infinite scroll (duplicate services for seamless loop)
  const extendedServices = [...CONFIG.services, ...CONFIG.services, ...CONFIG.services]
  const middleStart = CONFIG.services.length // Start index in the middle section

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CONFIG.services.length)
    }, 2500) // Change every 2.5 seconds

    return () => clearInterval(interval)
  }, [])

  // Calculate offset to center the current item
  // Container height is 80px, center is at 40px from top
  // Each item is 70px tall, so its center is at 35px from its top
  const containerHeight = 80
  const centerY = containerHeight / 2 // 40px (center of container)
  const targetItemIndex = middleStart + currentIndex
  const targetItemTop = targetItemIndex * itemHeight // Top position of target item
  const itemCenterOffset = itemHeight / 2 // 35px (half of item height)
  // Position item so its center aligns with container center
  const offset = centerY - (targetItemTop + itemCenterOffset)

  // Calculate which items should be visible and their styles
  const getItemStyle = (index) => {
    const centerIndex = middleStart + currentIndex
    const distance = Math.abs(index - centerIndex)
    
    let opacity = 1
    let blur = '0px'
    let scale = 1

    if (distance === 0) {
      // Center item - fully visible and clear
      opacity = 1
      blur = '0px'
      scale = 1
    } else if (distance === 1) {
      // Adjacent items (above and below) - slightly blurred
      opacity = 0.7
      blur = '1.5px'
      scale = 0.95
    } else if (distance === 2) {
      // Further items - more blurred
      opacity = 0.4
      blur = '3px'
      scale = 0.85
    } else {
      // Hidden items - very blurred
      opacity = 0.2
      blur = '5px'
      scale = 0.75
    }

    return {
      opacity,
      filter: `blur(${blur})`,
      transform: `scale(${scale})`,
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  }

  return (
    <div className="service-ticker" data-service-ticker aria-live="polite">
      <div 
        className="service-ticker-picker"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {extendedServices.map((service, index) => (
          <div
            key={`${service}-${index}`}
            className="service-ticker-item"
            style={getItemStyle(index)}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceTicker
