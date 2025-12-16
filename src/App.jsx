import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import TaxServices from './pages/TaxServices'
import BusinessServices from './pages/BusinessServices'
import CRAAudits from './pages/CRAAudits'
import InsuranceServices from './pages/InsuranceServices'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

// Lazy load the legal pages to avoid ad blocker issues
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimers = lazy(() => import('./pages/Disclaimers'))

function LoadingFallback() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
}

function App() {
  console.log('App component rendering')
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tax-services" element={<TaxServices />} />
        <Route path="business-services" element={<BusinessServices />} />
        <Route path="cra-audits" element={<CRAAudits />} />
        <Route path="insurance-services" element={<InsuranceServices />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route 
          path="privacy-policy" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Privacy />
            </Suspense>
          } 
        />
        <Route 
          path="terms-of-service" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Terms />
            </Suspense>
          } 
        />
        <Route 
          path="disclaimers" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Disclaimers />
            </Suspense>
          } 
        />
      </Route>
    </Routes>
  )
}

export default App
