import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

// Import CSS
import './assets/css/main.css'
import './assets/css/components.css'
import './assets/css/utilities.css'
import './assets/css/animations.css'

// Mark JS as enabled for animations
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-enabled')
}

console.log('Main.jsx loaded, root element:', document.getElementById('root'))

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 2rem; text-align: center;"><h1>Error: Root element not found</h1><p>Please check index.html</p></div>'
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>
    )
    console.log('React app rendered successfully')
  } catch (error) {
    console.error('Error rendering React app:', error)
    rootElement.innerHTML = `<div style="padding: 2rem; text-align: center;"><h1>Error Rendering App</h1><p>${error.message}</p></div>`
  }
}
