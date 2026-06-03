import React, { useState } from 'react'
import { Check, ShieldCheck, MapPin, Eye, ShoppingCart, Award, GraduationCap, Users } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Gallery from '../components/Gallery'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    { name: "Retail Shopping Center", desc: "Anchored by major grocery stores, banks (ATMs), beauty services, building material outlets, and specialty stores." },
    { name: "2 Drive-Through Fast Food Outlets", desc: "Top-tier international/national quick service restaurant drive-through channels." },
    { name: "24-Hour Filling Station", desc: "Fully equipped fuel station complete with a 24-hour convenience shop and automated car wash." },
    { name: "Stand-Alone Lifestyle Lounge", desc: "A premium social lounge serving food, beverages, and entertainment in a luxury setting." },
    { name: "Integrated Transport Hub", desc: "Mini taxi rank and dedicated e-hailing stations, offering safe community transport links." },
    { name: "Rental Accommodation Block", desc: "Modern, secure, and environmentally friendly rental housing units for local residents and professionals." }
  ]

  const publicServices = [
    { title: "Health Center & Clinics", text: "Localized medical infrastructure providing emergency care, diagnostics, and basic health services." },
    { title: "Government Service Desks", text: "Dedicated facilities hosting Department of Labour (UIF issues) and Home Affairs (ID and passport services)." },
    { title: "24-Hour Round-the-Clock Security", desc: "Comprehensive patrol officials, perimeter fences, CCTV, and solar streetlights supporting public safety." }
  ]

  const galleryImages = [
    { src: "/extracted_images/image_2.png", title: "Main Center Layout" },
    { src: "/extracted_images/image_3.png", title: "Shopping Center Elevation" },
    { src: "/extracted_images/image_14.png", title: "Site Master Plan" },
    { src: "/extracted_images/image_17.png", title: "Lifestyle Complex Render" },
    { src: "/extracted_images/image_25.png", title: "Geotechnical Survey Map" },
    { src: "/extracted_images/image_37.png", title: "Zoning & Section Drawing" }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Our Projects | Rashed Investments</title>
        <meta name="description" content="Explore Rashed Investments' flagship projects including the Urban Village Lifestyle Shopping Centre." />
      </Helmet>
      {/* Hero Head */}
      <section style={styles.projectHero}>
        <div className="container" style={styles.projectHeroContainer}>
          <span className="section-tag">Flagship Development</span>
          <h1 style={styles.projectTitle}>Urban Village Lifestyle Shopping Centre</h1>
          <p style={styles.projectLocation}>
            <MapPin size={18} color="var(--accent-gold)" />
            <span>Tshishushuru Village, Lwamondo, Thulamela Municipality, Limpopo</span>
          </p>
          <p style={styles.projectHeroDesc}>
            An eco-friendly, mixed-use smart town development designed to reverse the demeaning trend of substandard rural development. Integrating shopping, petroleum, dining, security, housing, and government services.
          </p>
        </div>
      </section>

      {/* Tabs Menu */}
      <div style={styles.tabsWrapper}>
        <div className="container" style={styles.tabsContainer}>
          <button 
            style={{...styles.tabBtn, color: activeTab === 'overview' ? 'var(--accent-gold)' : 'var(--text-secondary)', borderColor: activeTab === 'overview' ? 'var(--accent-gold)' : 'transparent'}}
            onClick={() => setActiveTab('overview')}
          >
            Project Overview
          </button>
          <button 
            style={{...styles.tabBtn, color: activeTab === 'components' ? 'var(--accent-gold)' : 'var(--text-secondary)', borderColor: activeTab === 'components' ? 'var(--accent-gold)' : 'transparent'}}
            onClick={() => setActiveTab('components')}
          >
            Core Infrastructure
          </button>
          <button 
            style={{...styles.tabBtn, color: activeTab === 'gallery' ? 'var(--accent-gold)' : 'var(--text-secondary)', borderColor: activeTab === 'gallery' ? 'var(--accent-gold)' : 'transparent'}}
            onClick={() => setActiveTab('gallery')}
          >
            Renders & Layouts
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
                <h2 style={styles.panelHeading} className="text-gold-gradient">The Smart Town Concept</h2>
                <p style={styles.panelParagraph}>
                  Tshishushuru Urban Village represents the pinnacle of modern property engineering on traditional leader-owned land. Rather than creating isolated commercial properties, Rashed Investments is engineering a self-sustaining eco-system.
                </p>
                <p style={styles.panelParagraph}>
                  Powered by clean photovoltaic solar grids and supplied by our on-site water purification systems, this smart development will withstand national infrastructure failures while providing clean sanitation and water preservation.
                </p>

                <div style={styles.socialImpactBox} className="glass-panel">
                  <h3 style={styles.impactTitle}>Corporate Social Investment Integration</h3>
                  <p style={styles.impactText}>
                    The Centre will establish a dedicated CSI Foundation. A percentage of retail proceeds and developer capital will fund:
                  </p>
                  <ul style={styles.impactList}>
                    <li><GraduationCap size={16} color="var(--accent-gold)" /> Academic scholarships and bursaries for students.</li>
                    <li><Users size={16} color="var(--accent-gold)" /> Direct food and shelter support for the destitute.</li>
                    <li><Award size={16} color="var(--accent-gold)" /> Micro-grants for local agricultural and art entrepreneurs.</li>
                  </ul>
                </div>
              </div>

              <div style={styles.overviewSidebar}>
                <div className="glass-panel" style={styles.sidebarCard}>
                  <h3 style={styles.sidebarCardTitle}>Project Specs</h3>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Developer</span>
                    <span style={styles.specVal}>Rashed Investments</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Municipality</span>
                    <span style={styles.specVal}>Thulamela Local</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Ownership Type</span>
                    <span style={styles.specVal}>100% Black-Owned</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Energy Grid</span>
                    <span style={styles.specVal}>Solar PV Supplemented</span>
                  </div>
                  <div style={styles.specItem}>
                    <span style={styles.specLabel}>Water System</span>
                    <span style={styles.specVal}>On-site Treatment</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '4rem' }}>
                <Gallery />
              </div>
            </div>
          )}

          {/* COMPONENTS PANEL */}
          {activeTab === 'components' && (
            <div className="animate-fade-in">
              <h2 style={styles.panelHeading} className="text-gold-gradient">Retail & Transport Layout</h2>
              <div style={styles.featuresGrid}>
                {features.map((feat, idx) => (
                  <div key={idx} className="glass-panel" style={styles.featCard}>
                    <div style={styles.checkWrapper}>
                      <Check size={16} color="var(--accent-gold)" />
                    </div>
                    <div>
                      <h4 style={styles.featTitle}>{feat.name}</h4>
                      <p style={styles.featText}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{...styles.panelHeading, marginTop: '5rem'}} className="text-gold-gradient">Public & Security Services</h2>
              <div style={styles.featuresGrid}>
                {publicServices.map((service, idx) => (
                  <div key={idx} className="glass-panel" style={styles.featCard}>
                    <div style={styles.checkWrapper}>
                      <ShieldCheck size={16} color="var(--accent-gold)" />
                    </div>
                    <div>
                      <h4 style={styles.featTitle}>{service.title}</h4>
                      <p style={styles.featText}>{service.text || service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GALLERY PANEL */}
          {activeTab === 'gallery' && (
            <div className="animate-fade-in">
              <h2 style={styles.panelHeading} className="text-gold-gradient">Extracted Site Layouts & Architectural Renders</h2>
              <p style={{...styles.panelParagraph, marginBottom: '3rem'}}>
                The following layouts and blueprints were extracted from the official Rashed Investments corporate profile document, representing current engineering surveys and designs for the Limpopo development.
              </p>
              <div style={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="glass-panel" style={styles.galleryCard}>
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
                      <span style={styles.galleryImgTitle}>{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-primary)',
  },
  projectHero: {
    background: 'linear-gradient(rgba(10, 13, 20, 0.9) 0%, rgba(10, 13, 20, 0.95) 100%), url("/extracted_images/image_2.png") no-repeat center center / cover',
    textAlign: 'center',
    padding: '8rem 0 5rem 0',
  },
  projectHeroContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: '3.2rem',
    fontWeight: 800,
    marginBottom: '1rem',
  },
  projectLocation: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--accent-gold)',
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  projectHeroDesc: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
  },
  tabsWrapper: {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
    padding: '1.5rem 0',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
  panelSection: {
    padding: '5rem 0',
  },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '4rem',
  },
  overviewContent: {},
  panelHeading: {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
  },
  panelParagraph: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
  },
  socialImpactBox: {
    padding: '2.5rem',
    borderRadius: '16px',
    marginTop: '3rem',
    border: '1px solid var(--border-gold)',
  },
  impactTitle: {
    fontSize: '1.3rem',
    color: '#FFFFFF',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  impactText: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
  },
  impactList: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  overviewSidebar: {},
  sidebarCard: {
    padding: '2.5rem',
    borderRadius: '16px',
  },
  sidebarCardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#FFFFFF',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    paddingBottom: '0.75rem',
  },
  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.85rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
    fontSize: '0.95rem',
  },
  specLabel: {
    color: 'var(--text-muted)',
  },
  specVal: {
    color: 'var(--text-primary)',
    fontWeight: 500,
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  featCard: {
    padding: '2rem',
    borderRadius: '16px',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  checkWrapper: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(212, 175, 55, 0.08)',
    border: '1px solid var(--border-gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featTitle: {
    fontSize: '1.15rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#FFFFFF',
  },
  featText: {
    fontSize: '0.95rem',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  galleryCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.05)',
    position: 'relative',
    height: '240px',
  },
  galleryImgWrapper: {
    width: '100%',
    height: '100%',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '1.25rem',
    background: 'linear-gradient(to top, rgba(10,13,20,0.95) 0%, transparent 100%)',
    display: 'flex',
    alignItems: 'flex-end',
  },
  galleryImgTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '1.05rem',
    color: '#FFFFFF',
  },
  /* Responsive simulation */
  '@media (max-width: 900px)': {
    overviewGrid: {
      gridTemplateColumns: '1fr',
    },
    tabsContainer: {
      gap: '1.5rem',
    }
  }
}
