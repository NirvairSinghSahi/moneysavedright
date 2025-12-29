import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'
import ScrollToTop from './ScrollToTop'

function Layout() {
  console.log('Layout rendering')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minHeight: '-webkit-fill-available' }}>
      <ScrollToTop />
      <Navigation />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}

export default Layout
