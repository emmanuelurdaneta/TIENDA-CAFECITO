import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main className="main container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
