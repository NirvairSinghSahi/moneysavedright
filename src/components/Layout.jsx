import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'

function Layout() {
  console.log('Layout rendering')
  return (
    <>
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
