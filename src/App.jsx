import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Info, LayoutList, Hammer, Phone, ArrowUpRight, Menu, X, Landmark, ExternalLink, BookOpen } from 'lucide-react'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import Support from './pages/Support.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import DarkModeToggle from './components/DarkModeToggle.jsx'

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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Overview', icon: Building2 },
    { path: '/about', label: 'About & Team', icon: Info },
    { path: '/services', label: 'Our Services', icon: Hammer },
    { path: '/projects', label: 'Flagship Project', icon: LayoutList },
    { path: '/blog', label: 'Insights & News', icon: BookOpen },
    { path: '/contact', label: 'Contact Us', icon: Phone },
  ]

  return (
    <nav style={{
      ...styles.navBar,
      background: scrolled ? 'rgba(7, 9, 8, 0.95)' : 'rgba(7, 9, 8, 0.75)',
      borderBottom: scrolled ? '1px solid var(--border-accent)' : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
    }}>
      <div className="container" style={styles.navContainer}>
        {/* Logo — image only, no text */}
        <Link to="/" style={styles.logoLink}>
          <img 
            src="/rashed-logo.png" 
            alt="Rashed Investments Logo" 
            style={styles.logoImg}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div style={styles.desktopNav} className="nav-bar-desktop">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                style={{
                  ...styles.navLink,
                  color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontWeight: active ? '700' : '500',
                }}
              >
                <Icon size={14} style={{ color: active ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                <span>{link.label}</span>
                {active && <span style={styles.activeIndicator}></span>}
              </Link>
            )
          })}
          
          <DarkModeToggle />

          <Link to="/contact" className="btn-premium btn-primary" style={styles.navBtn}>
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} className="nav-toggle-mobile">
          {isOpen ? <X size={24} color="var(--accent-primary)" /> : <Menu size={24} />}
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
                  color: active ? 'var(--accent-primary)' : 'var(--text-primary)',
                  background: active ? 'rgba(156, 180, 146, 0.08)' : 'transparent',
                  borderLeft: active ? '3px solid var(--accent-primary)' : '3px solid transparent',
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            )
          })}
          
          <div style={{ padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Theme</span>
            <DarkModeToggle />
          </div>

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
          </div>
          <p style={styles.footerBrandDesc}>
            A 100% Black-owned property development and investment firm specializing in rural and traditional land developments. Restoring community dignity with eco-friendly infrastructure, solar grids, and clean water treatment systems.
          </p>
          <div style={styles.nationalAlignment}>
            <Landmark size={16} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>Aligned to the National Development Plan (NDP) 2030</span>
          </div>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Quick Links</h4>
          <div style={styles.footerLinksGrid}>
            <Link to="/" style={styles.footerLink}>Overview</Link>
            <Link to="/about" style={styles.footerLink}>About & Leadership</Link>
            <Link to="/services" style={styles.footerLink}>Our Services</Link>
            <Link to="/projects" style={styles.footerLink}>Flagship Project</Link>
            <Link to="/blog" style={styles.footerLink}>News & Insights</Link>
          </div>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Resources</h4>
          <div style={styles.footerLinksGrid}>
            <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
            <Link to="/faq" style={styles.footerLink}>FAQ</Link>
            <Link to="/support" style={styles.footerLink}>Support</Link>
          </div>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Corporate Office</h4>
          <p style={styles.footerContactText}>
            538 Furrow Road, Feather Falls Estate<br />
            Homes Haven, Krugersdorp, 1739<br />
            South Africa
          </p>
          <p style={styles.footerContactText}>
            <span style={{ color: 'var(--accent-primary)' }}>General Inquiry:</span><br />
            <a href="mailto:info@rashed.co.za" style={styles.inlineMail}>info@rashed.co.za</a>
          </p>
        </div>

        <div>
          <h4 style={styles.footerSectionTitle}>Direct Outreach</h4>
          <p style={styles.footerContactText}>
            <strong>Ndivhuwo Khangale</strong><br />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Executive Director</span><br />
            <a href="tel:0722549448" style={styles.footerTel}>072 254 9448</a> | <a href="mailto:ndivhuwo@rashed.co.za" style={styles.inlineMail}>ndivhuwo@rashed.co.za</a>
          </p>
          <p style={styles.footerContactText}>
            <strong>Vhahangwele Khangale</strong><br />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Technical Director</span><br />
            <a href="tel:0672855095" style={styles.footerTel}>067 285 5095</a> | <a href="mailto:vhahangwele@rashed.co.za" style={styles.inlineMail}>vhahangwele@rashed.co.za</a>
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div className="container" style={styles.footerBottomContainer}>
          <p style={styles.copyrightText}>
            &copy; {new Date().getFullYear()} Rashed Investments. All Rights Reserved. 
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
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
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
    backgroundColor: 'var(--bg-secondary)',
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
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    transition: 'var(--transition-smooth)',
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
    gap: '0.85rem',
  },
  logoImg: {
    height: '46px',
    width: 'auto',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-display)',
    fontSize: '0.92rem',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'var(--transition-fast)',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    right: 0,
    height: '2px',
    background: 'var(--accent-primary)',
    borderRadius: '2px',
    boxShadow: '0 0 8px var(--accent-primary)',
  },
  navBtn: {
    padding: '0.55rem 1.15rem',
    fontSize: '0.85rem',
    borderRadius: '6px',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    background: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-accent)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    zIndex: 999,
    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
  },
  mobileNavLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.9rem 1.25rem',
    borderRadius: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.98rem',
    transition: 'var(--transition-fast)',
  },
  mobileNavBtn: {
    width: '100%',
    marginTop: '0.5rem',
    padding: '0.9rem',
  },
  footer: {
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid var(--border-color)',
    padding: '6rem 0 0 0',
    marginTop: 'auto',
    position: 'relative',
    zIndex: 2,
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 0.8fr 1fr 1.1fr',
    gap: '3.5rem',
    paddingBottom: '5rem',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  footerBrandDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
    maxWidth: '360px',
  },
  nationalAlignment: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: 'rgba(156, 180, 146, 0.06)',
    border: '1px solid rgba(156, 180, 146, 0.12)',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    width: 'fit-content',
  },
  footerSectionTitle: {
    fontSize: '1.05rem',
    color: 'var(--text-primary)',
    marginBottom: '1.75rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  footerLinksGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },
  footerLink: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    transition: 'var(--transition-fast)',
    display: 'inline-block',
    width: 'fit-content',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
  },
  footerContactText: {
    fontSize: '0.95rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
  },
  footerTel: {
    color: 'var(--text-primary)',
    fontWeight: 600,
  },
  inlineMail: {
    color: 'var(--accent-primary)',
    textDecoration: 'underline',
  },
  footerBottom: {
    borderTop: '1px solid var(--border-color)',
    padding: '2rem 0',
    background: 'var(--bg-primary)',
  },
  footerBottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
  },
  copyrightText: {
    fontSize: '0.88rem',
    color: 'var(--text-muted)',
  },
  footerLegal: {
    display: 'flex',
    gap: '2rem',
    fontSize: '0.88rem',
    color: 'var(--text-muted)',
  },
  legalLink: {
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
}

// Global responsive simulator styling injection
const styleSheet = document.createElement("style")
styleSheet.innerText = `
  @media (max-width: 991px) {
    .nav-bar-desktop { display: none !important; }
    .nav-toggle-mobile { display: block !important; }
    footer .container { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
  }
  @media (max-width: 600px) {
    footer .container { grid-template-columns: 1fr !important; gap: 2rem !important; }
  }
  a:hover {
    color: var(--accent-primary-hover) !important;
  }
`
document.head.appendChild(styleSheet)

export default App
