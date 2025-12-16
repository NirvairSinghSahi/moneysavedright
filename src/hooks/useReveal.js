import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    
    if (revealElements.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const animationType = element.dataset.reveal || 'fade-up'
          element.classList.add(`revealed-${animationType}`)
          element.style.opacity = '1'
          element.style.transform = 'translate(0, 0)'
          observer.unobserve(element)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    revealElements.forEach(element => {
      const animationType = element.dataset.reveal || 'fade-up'
      if (animationType === 'fade-up') {
        element.style.opacity = '0'
        element.style.transform = 'translateY(30px)'
      } else if (animationType === 'fade-left') {
        element.style.opacity = '0'
        element.style.transform = 'translateX(-30px)'
      } else if (animationType === 'fade-right') {
        element.style.opacity = '0'
        element.style.transform = 'translateX(30px)'
      } else {
        element.style.opacity = '0'
      }
      observer.observe(element)
    })

    return () => {
      revealElements.forEach(element => observer.unobserve(element))
    }
  }, [])
}

