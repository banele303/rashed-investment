import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Info, LayoutList, Hammer, Phone, ArrowUpRight, Menu, X } from 'lucide-react'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Overview', icon: Building2 },
    { path: '/about', label: 'About & Team', icon: Info },
    { path: '/services', label: 'Our Services', icon: Hammer },
    { path: '/projects', label: 'Flagship Project', icon: LayoutList },
    { path: '/contact', label: 'Contact Us', icon: Phone },
  ]

  return (
    <nav style={styles.navBar}>
      <div className="container" style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <img 
            src="/rashed-logo.png" 
            alt="Rashed Investments" 
            style={styles.logoImg}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div style={styles.logoTextWrapper}>
            <span style={styles.logoTitle}>RASHED</span>
            <span style={styles.logoSubtitle}>INVESTMENTS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={styles.desktopNav}>
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                style={{
                  ...styles.navLink,
                  color: active ? 'var(--accent-gold)' : 'var(--text-primary)',
                  borderColor: active ? 'var(--accent-gold)' : 'transparent',
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            )
          })}
          <Link to="/contact" className="btn-premium btn-primary" style={styles.navBtn}>
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={styles.mobileDrawer}>
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                style={{
                  ...styles.mobileNavLink,
                  color: active ? 'var(--accent-gold)' : 'var(--text-primary)',
                  background: active ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                }}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            )
          })}
          <Link 
            to="/contact" 
            className="btn-premium btn-primary" 
            onClick={() => setIsOpen(false)}
            style={styles.mobileNavBtn}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerGrid}>
        <div style={styles.footerBrand}>
          <div style={styles.footerLogo}>
            <img 
              src="/rashed-logo.png" 
              alt="Rashed Logo" 
              style={styles.logoImg}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={styles.logoTextWrapper}>
              <span style={styles.logoTitle}>RASHED</span>
              <span style={styles.logoSubtitle}>INVESTMENTS</span>
            </div>
          </div>
          <p style={styles.footerBrandDesc}>
            100% Black-owned property development firm specializing in rural & traditional land development. Advancing sustainable economic activities through innovative basic services, renewable energy, and modern commercial facilities.
          </p>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Quick Navigation</h4>
          <div style={styles.footerLinksGrid}>
            <Link to="/" style={styles.footerLink}>Overview</Link>
            <Link to="/about" style={styles.footerLink}>About & Leadership</Link>
            <Link to="/services" style={styles.footerLink}>Our Services</Link>
            <Link to="/projects" style={styles.footerLink}>Flagship Project</Link>
            <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
          </div>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Corporate Office</h4>
          <p style={styles.footerContactText}>
            538 Furrow Road, Feather Falls Estate<br />
            Homes Haven, Krugersdorp, 1739<br />
            South Africa
          </p>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Direct Contact</h4>
          <p style={styles.footerContactText}>
            <strong>Ndivhuwo Khangale</strong><br />
            072 254 9448 | ndivhuwo@rashed.co.za
          </p>
          <p style={styles.footerContactText}>
            <strong>Vhahangwele Khangale</strong><br />
            067 285 5095 | vhahangwele@rashed.co.za
          </p>
          <p style={styles.footerContactText}>
            <strong>General Inquiry</strong><br />
            info@rashed.co.za
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div className="container" style={styles.footerBottomContainer}>
          <p style={styles.copyrightText}>
            &copy; {new Date().getFullYear()} Rashed Investments. All Rights Reserved. Aligned to the NDP 2030.
          </p>
          <div style={styles.footerLegal}>
            <span style={styles.legalLink}>Privacy Policy</span>
            <span style={styles.legalLink}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div style={styles.appWrapper}>
          <Navigation />
          <main style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1 0 auto',
    marginTop: '80px', // Matches Nav height
  },
  navBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    background: 'rgba(10, 13, 20, 0.85)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImg: {
    height: '42px',
    width: 'auto',
  },
  logoTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.4rem',
    color: '#FFFFFF',
    letterSpacing: '0.05em',
    lineHeight: 1,
  },
  logoSubtitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.65rem',
    color: 'var(--accent-gold)',
    letterSpacing: '0.25em',
    marginTop: '2px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.75rem',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: '0.95rem',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'var(--transition-fast)',
  },
  navBtn: {
    padding: '0.6rem 1.25rem',
    fontSize: '0.9rem',
    borderRadius: '6px',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    background: 'rgba(10, 13, 20, 0.98)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    zIndex: 999,
  },
  mobileNavLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.85rem 1rem',
    borderRadius: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
  },
  mobileNavBtn: {
    width: '100%',
    marginTop: '0.5rem',
    padding: '0.85rem',
  },
  footer: {
    background: '#07090E',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '5rem 0 0 0',
    marginTop: 'auto',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
    gap: '3rem',
    paddingBottom: '4rem',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  footerBrandDesc: {
    fontSize: '0.95rem',
    maxWidth: '360px',
  },
  footerSectionTitle: {
    fontSize: '1.1rem',
    color: '#FFFFFF',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-display)',
  },
  footerLinksGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerLink: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    transition: 'var(--transition-fast)',
  },
  footerContactText: {
    fontSize: '0.95rem',
    marginBottom: '1.25rem',
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
    padding: '2rem 0',
    background: '#040508',
  },
  footerBottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyrightText: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  footerLegal: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  legalLink: {
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
  /* Media Query Helpers simulated in styles */
  '@media (max-width: 991px)': {
    footerGrid: {
      gridTemplateColumns: '1fr 1fr',
    }
  },
  '@media (max-width: 768px)': {
    mobileToggle: {
      display: 'block',
    },
    desktopNav: {
      display: 'none',
    },
    footerGrid: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    }
  }
}

// Inline CSS for Responsive Simulation in JavaScript
const styleSheet = document.createElement("style")
styleSheet.innerText = `
  @media (max-width: 900px) {
    .nav-bar-desktop { display: none !important; }
    .nav-toggle-mobile { display: block !important; }
    footer .container { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
  }
  @media (max-width: 600px) {
    footer .container { grid-template-columns: 1fr !important; }
  }
`
document.head.appendChild(styleSheet)

export default App
