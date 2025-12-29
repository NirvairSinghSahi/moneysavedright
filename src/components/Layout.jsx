import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'
import ScrollToTop from './ScrollToTop'

function Layout() {
  console.log('Layout rendering')
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}

export default Layout
