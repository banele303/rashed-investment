import React, { useState } from 'react'
import { Check, ShieldCheck, MapPin, Eye, ShoppingCart, Award, GraduationCap, Users, X, Maximize2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const features = [
    { name: "Retail Shopping Center", desc: "Anchored by major grocery stores, national retail outlets, ATM bank networks, and pharmacy services." },
    { name: "2 Drive-Through Fast Food Outlets", desc: "Top-tier quick service restaurant drive-through channels for highway and commuter traffic." },
    { name: "24-Hour Filling Station", desc: "Fully equipped fuel station complete with convenience store and automated car wash systems." },
    { name: "Stand-Alone Lifestyle Lounge", desc: "A premium social lounge serving food, beverages, and entertainment in a luxury built-in setting." },
    { name: "Integrated Transport Hub", desc: "Mini taxi rank and dedicated e-hailing stations, offering safe, localized community transport links." },
    { name: "Rental Accommodation Block", desc: "Modern, secure, and environmentally friendly rental housing units for local residents and professionals." }
  ]

  const publicServices = [
    { title: "Health Center & Clinics", text: "Localized medical infrastructure providing emergency care, diagnostics, and basic health services." },
    { title: "Government Service Desks", text: "Dedicated facilities hosting Department of Labour (UIF issues) and Home Affairs (ID and passport services)." },
    { title: "24-Hour Security Infrastructure", text: "Round-the-clock security patrols, perimeter cameras, and solar streetlights supporting safety." }
  ]

  const galleryImages = [
    { src: "/extracted_images/image_2.png", title: "Main Center Architectural Layout" },
    { src: "/extracted_images/image_3.png", title: "Shopping Center Front Elevation" },
    { src: "/extracted_images/image_14.png", title: "Site Layout Master Plan" },
    { src: "/extracted_images/image_17.png", title: "Lifestyle Complex 3D Render" },
    { src: "/extracted_images/image_25.png", title: "Geotechnical Survey Map" },
    { src: "/extracted_images/image_37.png", title: "Zoning & Section Drawing" }
  ]

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Projects | Rashed Investments</title>
        <meta name="description" content="Detailed overview of the Lwamondo Urban Village Lifestyle Shopping Centre flagship development by Rashed Investments." />
      </Helmet>

      {/* Hero Head */}
      <section style={styles.projectHero}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.projectHeroContainer}>
          <div className="glow-badge" style={{ marginBottom: '1.5rem' }}>
            <span>Flagship Property Development</span>
          </div>
          <h1 style={styles.projectTitle}>Urban Village Lifestyle Shopping Centre</h1>
          <p style={styles.projectLocation}>
            <MapPin size={18} color="var(--accent-primary)" />
            <span>Tshishushuru Village, Lwamondo, Limpopo</span>
          </p>
          <p style={styles.projectHeroDesc}>
            An eco-friendly, mixed-use smart town development designed to reverse the demeaning trend of substandard rural developments by integrating shopping, dining, security, housing, and public services.
          </p>
        </div>
      </section>

      {/* Tabs Menu */}
      <div style={styles.tabsWrapper}>
        <div className="container" style={styles.tabsContainer}>
          <button 
            style={{
              ...styles.tabBtn, 
              color: activeTab === 'overview' ? 'var(--accent-primary)' : 'var(--text-secondary)', 
              borderColor: activeTab === 'overview' ? 'var(--accent-primary)' : 'transparent',
              fontWeight: activeTab === 'overview' ? '700' : '500',
            }}
            onClick={() => setActiveTab('overview')}
          >
            Project Overview
          </button>
          <button 
            style={{
              ...styles.tabBtn, 
              color: activeTab === 'components' ? 'var(--accent-primary)' : 'var(--text-secondary)', 
              borderColor: activeTab === 'components' ? 'var(--accent-primary)' : 'transparent',
              fontWeight: activeTab === 'components' ? '700' : '500',
            }}
            onClick={() => setActiveTab('components')}
          >
            Core Infrastructure
          </button>
          <button 
            style={{
              ...styles.tabBtn, 
              color: activeTab === 'gallery' ? 'var(--accent-primary)' : 'var(--text-secondary)', 
              borderColor: activeTab === 'gallery' ? 'var(--accent-primary)' : 'transparent',
              fontWeight: activeTab === 'gallery' ? '700' : '500',
            }}
            onClick={() => setActiveTab('gallery')}
          >
            Renders &amp; Blueprints
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <section style={styles.panelSection}>
        <div className="container">
          
          {/* OVERVIEW PANEL */}
          {activeTab === 'overview' && (
            <div style={styles.overviewGrid} className="animate-fade-in">
              <div style={styles.overviewContent}>
                <h2 style={styles.panelHeading} className="text-green-gradient">The Smart Town Concept</h2>
                <p style={styles.panelParagraph}>
                  Tshishushuru Urban Village represents the pinnacle of modern property engineering on traditional leader-owned land. Rather than constructing standard isolated commercial spaces, Rashed Investments is engineering a self-sustaining eco-system.
                </p>
                <p style={styles.panelParagraph}>
                  Powered by clean photovoltaic solar grids and supplied by our on-site water purification systems, this smart development is built to withstand national infrastructure failures while actively promoting water preservation and green energy usage.
                </p>

                <div style={styles.socialImpactBox} className="glass-panel-green">
                  <h3 style={styles.impactTitle} className="text-green-gradient">Corporate Social Investment Integration</h3>
                  <p style={styles.impactText}>
                    The Centre will establish a dedicated CSI Foundation. A percentage of retail lease proceeds and developer capital will directly fund:
                  </p>
                  <ul className="custom-list">
                    <li className="custom-list-item">
                      <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                      <span><strong>Academic Scholarships:</strong> Full bursaries for local engineering and business students.</span>
                    </li>
                    <li className="custom-list-item">
                      <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                      <span><strong>Destitute Support:</strong> Targeted food and clothing aid programs for child-headed families.</span>
                    </li>
                    <li className="custom-list-item">
                      <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                      <span><strong>Artisan Development:</strong> Direct incubation and grant funding for local artisan teams on site.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div style={styles.overviewSidebar}>
                <div className="glass-panel" style={styles.sidebarCard}>
                  <h3 style={styles.sidebarCardTitle}>Project Specifications</h3>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Lead Developer</span>
                    <span style={styles.specVal}>Rashed Investments</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Zoning Authority</span>
                    <span style={styles.specVal}>Thulamela Municipality</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Site Location</span>
                    <span style={styles.specVal}>Lwamondo, Limpopo</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Energy Grid</span>
                    <span style={styles.specVal}>Solar PV Grid Tied</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Water System</span>
                    <span style={styles.specVal}>Private Purification Plant</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>B-BBEE Level</span>
                    <span style={{...styles.specVal, color: 'var(--accent-primary)', fontWeight: 'bold'}}>Level 1 Contributor</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COMPONENTS PANEL */}
          {activeTab === 'components' && (
            <div className="animate-fade-in">
              <h2 style={styles.panelHeading} className="text-green-gradient">Commercial &amp; Transport Layout</h2>
              <div style={styles.featuresGrid}>
                {features.map((feat, idx) => (
                  <div key={idx} className="glass-panel" style={styles.featCard}>
                    <div style={styles.checkWrapper}>
                      <Check size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <h4 style={styles.featTitle}>{feat.name}</h4>
                      <p style={styles.featText}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{...styles.panelHeading, marginTop: '5rem'}} className="text-green-gradient">Public Health &amp; Safety Desks</h2>
              <div style={styles.featuresGrid}>
                {publicServices.map((service, idx) => (
                  <div key={idx} className="glass-panel" style={styles.featCard}>
                    <div style={styles.checkWrapper}>
                      <ShieldCheck size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <h4 style={styles.featTitle}>{service.title}</h4>
                      <p style={styles.featText}>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GALLERY PANEL */}
          {activeTab === 'gallery' && (
            <div className="animate-fade-in">
              <h2 style={styles.panelHeading} className="text-green-gradient">Architectural Blueprints &amp; Renders</h2>
              <p style={{...styles.panelParagraph, marginBottom: '3rem'}}>
                The following layouts and blueprints were extracted from the official corporate profile, representing current engineering surveys and site planning for the Limpopo development. Click any image to view details in full resolution.
              </p>
              
              <div style={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="glass-panel" style={styles.galleryCard} onClick={() => openLightbox(idx)}>
                    <div style={styles.galleryImgWrapper}>
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        style={styles.galleryImg} 
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                    </div>
                    <div style={styles.galleryOverlay}>
                      <div style={styles.galleryInfo}>
                        <span style={styles.galleryImgTitle}>{img.title}</span>
                        <div style={styles.zoomIconWrapper}>
                          <Maximize2 size={14} color="#FFFFFF" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <button style={styles.lightboxCloseBtn} onClick={closeLightbox}>
            <X size={28} />
          </button>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[lightboxIndex].src} 
              alt={galleryImages[lightboxIndex].title} 
              style={styles.lightboxImg} 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div style={styles.lightboxCaption}>
              <h3>{galleryImages[lightboxIndex].title}</h3>
              <p>Rashed Investments Technical Planning File</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-secondary)',
    overflowX: 'hidden',
  },
  projectHero: {
    position: 'relative',
    background: 'linear-gradient(rgba(7, 9, 14, 0.88) 0%, rgba(7, 9, 14, 0.95) 100%), url("/extracted_images/image_2.png") no-repeat center center / cover',
    textAlign: 'center',
    padding: '7rem 0 5rem 0',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 70%, var(--bg-secondary))',
    zIndex: 1,
  },
  projectHeroContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  projectTitle: {
    fontSize: '3.4rem',
    fontWeight: 900,
    marginBottom: '1rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '-0.02em',
  },
  projectLocation: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--accent-primary)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.15rem',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  projectHeroDesc: {
    fontSize: '1.2rem',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
  },
  tabsWrapper: {
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
    position: 'sticky',
    top: '80px',
    zIndex: 100,
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    borderBottom: '3px solid transparent',
    padding: '1.6rem 0',
    fontFamily: 'var(--font-display)',
    fontSize: '1.02rem',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
  panelSection: {
    padding: '5rem 0',
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: '1.45fr 1fr',
    gap: '4.5rem',
  },
  overviewContent: {},
  panelHeading: {
    fontSize: '1.8rem',
    fontWeight: 800,
    marginBottom: '1.5rem',
  },
  panelParagraph: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
  },
  socialImpactBox: {
    padding: '2.5rem',
    borderRadius: '20px',
    marginTop: '3.5rem',
    border: '1px solid var(--border-green)',
  },
  impactTitle: {
    fontSize: '1.38rem',
    fontWeight: 800,
    marginBottom: '1.25rem',
  },
  impactText: {
    fontSize: '1.02rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
    marginBottom: '1.75rem',
  },
  overviewSidebar: {},
  sidebarCard: {
    padding: '2.5rem',
    borderRadius: '20px',
  },
  sidebarCardTitle: {
    fontSize: '1.3rem',
    fontWeight: 800,
    marginBottom: '1.75rem',
    color: '#FFFFFF',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    paddingBottom: '0.9rem',
    fontFamily: 'var(--font-display)',
  },
  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
    fontSize: '0.98rem',
  },
  specLabel: {
    color: 'var(--text-muted)',
  },
  specVal: {
    color: 'var(--text-primary)',
    fontWeight: 600,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '2rem',
  },
  featCard: {
    padding: '2rem 1.75rem',
    borderRadius: '16px',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  checkWrapper: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(156, 180, 146, 0.08)',
    border: '1px solid var(--border-accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    color: '#FFFFFF',
  },
  featText: {
    fontSize: '0.98rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  galleryCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.05)',
    position: 'relative',
    height: '260px',
    cursor: 'pointer',
  },
  galleryImgWrapper: {
    width: '100%',
    height: '100%',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem',
    background: 'linear-gradient(to top, rgba(15,18,23,0.86) 0%, transparent 100%)',
  },
  galleryInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  galleryImgTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.05rem',
    color: '#FFFFFF',
  },
  zoomIconWrapper: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  /* Lightbox Styles */
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(3, 4, 6, 0.96)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  lightboxCloseBtn: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '50%',
    color: '#FFFFFF',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2001,
    transition: 'var(--transition-fast)',
    ':hover': {
      background: 'rgba(255,255,255,0.1)',
      color: 'var(--accent-primary)',
    }
  },
  lightboxContent: {
    maxWidth: '90%',
    maxHeight: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  lightboxImg: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '12px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 30px rgba(156,180,146,0.15)',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  lightboxCaption: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
}

// Inline CSS overrides for responsiveness simulation in Projects
const localProjStyleSheet = document.createElement("style")
localProjStyleSheet.innerText = `
  @media (max-width: 991px) {
    .overview-grid {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    .tabs-container {
      gap: 1.5rem !important;
    }
    .tab-btn {
      padding: 1.25rem 0 !important;
      font-size: 0.95rem !important;
    }
  }
  .gallery-card:hover .gallery-img {
    transform: scale(1.05);
  }
`
document.head.appendChild(localProjStyleSheet)
