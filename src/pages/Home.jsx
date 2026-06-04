import React from 'react'
import { ArrowRight, Zap, Droplet, Shield, Award, BookOpen, HeartHandshake, MapPin, Users, Lightbulb } from 'lucide-react'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import TeamGallery from '../components/TeamGallery'
import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  const pillars = [
    {
      icon: Zap,
      title: "Renewable Energy Focus",
      desc: "Supplementing development power using localized solar grids to decrease national grid strain and secure uninterrupted commercial activities.",
      isGreen: true
    },
    {
      icon: Droplet,
      title: "Water Purification Plants",
      desc: "Engineering private water treatment and purification systems to preserve resources, securing sustainable sanitation on traditional lands.",
      isGreen: true
    },
    {
      icon: Shield,
      title: "Dignity Restoration",
      desc: "Reversing the trend of substandard rural developments by establishing modern retail and commercial zones historically restricted to cities.",
      isGreen: false
    },
    {
      icon: Award,
      title: "Skills & Economic Growth",
      desc: "Directly empowering communities by transferring crucial engineering and trade skills to local youth during construction phases.",
      isGreen: false
    }
  ]

  const stats = [
    { value: "100%", label: "Black-Owned", sub: "Level 1 B-BBEE" },
    { value: "50+ Yrs", label: "Combined Wealth", sub: "Of Board Experience" },
    { value: "NDP 2030", label: "Aligned Goals", sub: "National Development" },
    { value: "R200M+", label: "Project Capacity", sub: "In Turnkey Scale" }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Rashed Investments | Sustainable Property & Infrastructure Development</title>
        <meta name="description" content="100% Black-owned property development firm specializing in rural and traditional land developments. Aligned with South African NDP 2030." />
      </Helmet>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroContent} className="animate-fade-in">
            <div className="glow-badge" style={{ marginBottom: '1.5rem' }}>
              <span>Sustainable Property Specialists</span>
            </div>
            <h1 style={styles.heroTitle}>
              Restoring Dignity Through <span className="text-gold-gradient">Modern Development</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Developing modern commercial, retail, and industrial infrastructure in rural and traditional communities across South Africa. Aligned to the National Development Plan 2030.
            </p>
            <div style={styles.heroBtns}>
              <Link to="/projects" className="btn-premium btn-primary">
                <span>Explore Flagship Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-premium btn-secondary">
                <span>Meet Our Leadership</span>
              </Link>
            </div>
          </div>
          
          <div style={styles.heroVisual} className="animate-fade-in">
            <div style={styles.imageCard}>
              <img 
                src="/hero_smart_town.png" 
                alt="Modern Retail Smart Village Render" 
                style={styles.heroImg}
              />
              <div style={styles.imageBadge} className="glass-panel">
                <MapPin size={14} color="var(--accent-primary)" />
                <span>Limpopo Development Concept</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <AnimatedSection direction="up" delay={0.2}>
        <section style={styles.statsSection}>
          <div className="container">
            <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-panel" style={styles.statCard}>
                <h3 style={styles.statVal} className="text-gold-gradient">{stat.value}</h3>
                <h4 style={styles.statLabel}>{stat.label}</h4>
                <p style={styles.statSub}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Overview & Pillars */}
      <section style={styles.pillarsSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag">Strategic Pillars</span>
            <h2 className="section-title">Aligned with National Progress</h2>
            <p className="section-subtitle">
              Our projects support the South African National Development Plan 2030 by establishing localized economic hubs, reducing grid pressures through solar, and securing water resources.
            </p>
          </div>

          <div className="grid-cards">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={idx} 
                  className={pillar.isGreen ? "glass-panel-green" : "glass-panel"} 
                  style={styles.pillarCard}
                >
                  <div style={{
                    ...styles.iconWrapper,
                    background: pillar.isGreen ? 'rgba(107, 158, 107, 0.10)' : 'rgba(156, 180, 146, 0.10)',
                    borderColor: pillar.isGreen ? 'var(--border-green)' : 'var(--border-accent)',
                  }}>
                    <Icon size={24} color={pillar.isGreen ? "var(--accent-green)" : "var(--accent-primary)"} />
                  </div>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Legacy & Totem Story */}
      <section style={styles.legacySection}>
        <div className="container" style={styles.legacyContainer}>
          <div style={styles.legacyContent} className="animate-fade-in">
            <span className="section-tag">Our Totem & Heritage</span>
            <h2 className="section-title">
              Rashed: <span className="text-gold-gradient">What's in the Name?</span>
            </h2>
            <p style={styles.legacyText}>
              Rashed is short for <strong>Rashede</strong>, our family or clan totem. The Khangales are part of the Vhafamadi clan, whose praise chant, or Tshirendo, carries the name Rashede. We originate from Ha-Mashau.
            </p>
            <blockquote style={styles.blockquote}>
              "Mufamadi. Rashede. Ratshivhomba. Randodza. Mukonde wa mubvumela ndodzi dzi ala, wa Ha-Ramutsindela wa thumbu ya ngwedi..."
            </blockquote>
            <p style={styles.legacyText}>
              The name is our daily commitment to serving and nurturing local communities. When our late great-great-grandfather, Khangale, returned from the Anglo-Boer War, locals named him "Boulo". To this day, our family homestead is proudly called <strong>Ha-Boulo</strong>.
            </p>
            <div style={styles.legacyFooter}>
              <span style={styles.signatureName}>Boulo, Rashede!</span>
            </div>
          </div>
          <div style={styles.legacyVisual} className="animate-fade-in">
            <div style={styles.legacyImageFrame}>
              <img 
                src="/heritage_venda.png" 
                alt="Heritage illustration of Limpopo mountains blending with architecture" 
                style={styles.legacyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Project Preview Carousel */}
      <section style={styles.carouselSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag-green">Flagship Renderings</span>
            <h2 className="section-title">Urban Village Shopping Centre</h2>
            <p className="section-subtitle">
              Take an early look at our ongoing mixed-use development in Tshishushuru Village, Lwamondo, Limpopo. Combining retail convenience with civic safety and ecological infrastructure.
            </p>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Executive Leadership Team */}
      <TeamGallery />

      {/* CSI Section */}
      <section style={styles.csiSection}>
        <div className="container" style={styles.csiContainer}>
          <div style={styles.csiContent}>
            <span className="section-tag-green">Social Responsibility</span>
            <h2 className="section-title">Corporate Social Investment (CSI)</h2>
            <p style={styles.csiSubText}>
              Our biggest investment is in people. We believe in leaving an indelible mark on the communities where we operate. We run extensive training programs under our CSI wing.
            </p>
            <div style={styles.csiFeatures}>
              <div style={styles.csiFeatureItem}>
                <div style={styles.csiIconBox}>
                  <BookOpen size={20} color="var(--accent-green)" />
                </div>
                <div>
                  <h4 style={styles.csiFeatureTitle}>Early Childhood Development (ECD)</h4>
                  <p style={styles.csiFeatureDesc}>Supporting rural daycare and early learning centers with building upgrades and educational materials.</p>
                </div>
              </div>
              <div style={styles.csiFeatureItem}>
                <div style={styles.csiIconBox}>
                  <HeartHandshake size={20} color="var(--accent-green)" />
                </div>
                <div>
                  <h4 style={styles.csiFeatureTitle}>Skills &amp; Artisan Training</h4>
                  <p style={styles.csiFeatureDesc}>Equipping local youth with certified engineering, masonry, plumbing, electrical, and commercial management skills.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.csiVisual}>
            <div className="glass-panel-green" style={styles.csiCard}>
              <h3 style={styles.csiCardTitle} className="text-green-gradient">Community Support Foundations</h3>
              <ul className="custom-list">
                <li className="custom-list-item">
                  <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                  <span>Youth Artisan Accreditation</span>
                </li>
                <li className="custom-list-item">
                  <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                  <span>Destitute Family Emergency Relief</span>
                </li>
                <li className="custom-list-item">
                  <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                  <span>Local Small Business Incubation</span>
                </li>
                <li className="custom-list-item">
                  <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                  <span>Crime Prevention via Youth Jobs</span>
                </li>
                <li className="custom-list-item">
                  <span className="custom-list-bullet" style={{ borderColor: 'var(--accent-green)' }}></span>
                  <span>Elderly &amp; Child-Headed Home Aid</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-secondary)',
    overflowX: 'hidden',
  },
  heroSection: {
    position: 'relative',
    background: 'radial-gradient(circle at 80% 20%, rgba(156, 180, 146, 0.06) 0%, transparent 60%)',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    padding: '6rem 0',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 80%, var(--bg-secondary))',
    zIndex: 1,
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.25fr 1fr',
    gap: '5rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: '1.22rem',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '540px',
  },
  heroBtns: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  heroVisual: {
    position: 'relative',
    width: '100%',
  },
  imageCard: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(156, 180, 146, 0.15)',
    boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6), 0 0 40px rgba(156,180,146,0.05)',
  },
  heroImg: {
    width: '100%',
    height: '490px',
    objectFit: 'cover',
    display: 'block',
  },
  imageBadge: {
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.25rem',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    color: '#FFFFFF',
    border: '1px solid var(--border-accent)',
  },
  statsSection: {
    padding: '1.5rem 0 3.5rem 0',
    position: 'relative',
    zIndex: 10,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  statCard: {
    padding: '2.5rem 2rem',
    textAlign: 'center',
    borderRadius: '16px',
  },
  statVal: {
    fontSize: '2.8rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
  },
  statLabel: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '0.25rem',
  },
  statSub: {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
  },
  pillarsSection: {
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid rgba(255, 255, 255, 0.02)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.02)',
  },
  sectionHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  pillarCard: {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    border: '1px solid transparent',
  },
  pillarTitle: {
    fontSize: '1.38rem',
    fontWeight: 700,
    marginBottom: '1.1rem',
  },
  pillarDesc: {
    fontSize: '0.98rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.65',
  },
  legacySection: {
    background: 'radial-gradient(circle at 10% 80%, rgba(156, 180, 146, 0.04) 0%, transparent 55%)',
  },
  legacyContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '5rem',
    alignItems: 'center',
  },
  legacyVisual: {
    position: 'relative',
    width: '100%',
  },
  legacyImageFrame: {
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(156, 180, 146, 0.10)',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
  },
  legacyImg: {
    width: '100%',
    height: '540px',
    objectFit: 'cover',
    display: 'block',
  },
  legacyContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  legacyText: {
    marginBottom: '1.5rem',
    fontSize: '1.08rem',
    lineHeight: '1.75',
  },
  blockquote: {
    borderLeft: '3px solid var(--accent-primary)',
    paddingLeft: '1.75rem',
    margin: '2rem 0',
    fontStyle: 'italic',
    fontSize: '1.15rem',
    color: '#FFFFFF',
    lineHeight: '1.6',
    fontWeight: 300,
    fontFamily: 'var(--font-display)',
  },
  legacyFooter: {
    marginTop: '1rem',
  },
  signatureName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    color: 'var(--accent-primary)',
    fontSize: '1.35rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  carouselSection: {
    background: 'var(--bg-tertiary)',
  },
  teamSection: {
    background: 'var(--bg-secondary)',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  teamCard: {
    padding: '3rem 2rem 2.5rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamImgWrapper: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid var(--accent-primary)',
    boxShadow: '0 10px 25px -10px var(--accent-glow-primary)',
    marginBottom: '2rem',
  },
  teamImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  teamName: {
    fontSize: '1.45rem',
    fontWeight: 800,
    color: '#FFFFFF',
    marginBottom: '0.35rem',
  },
  teamRole: {
    fontSize: '0.88rem',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '1.25rem',
  },
  divider: {
    width: '40px',
    height: '2px',
    background: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '1.5rem',
  },
  teamDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  cardLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#FFFFFF',
    transition: 'var(--transition-fast)',
  },
  csiSection: {
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  csiContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '5rem',
    alignItems: 'center',
  },
  csiContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  csiSubText: {
    marginBottom: '3rem',
    fontSize: '1.12rem',
    lineHeight: '1.75',
  },
  csiFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  csiFeatureItem: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  csiIconBox: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    background: 'rgba(107, 158, 107, 0.10)',
    border: '1px solid var(--border-green)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  csiFeatureTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    color: '#FFFFFF',
  },
  csiFeatureDesc: {
    fontSize: '0.98rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  csiVisual: {
    width: '100%',
  },
  csiCard: {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
  },
  csiCardTitle: {
    fontSize: '1.55rem',
    fontWeight: 800,
    marginBottom: '2.5rem',
    fontFamily: 'var(--font-display)',
  },
}

// Global responsive simulator styling for Home
const localStyleSheet = document.createElement("style")
localStyleSheet.innerText = `
  @media (max-width: 991px) {
    .home-hero-container {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    .legacy-container {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    .csi-container {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    .team-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .stats-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media (max-width: 600px) {
    .stats-grid {
      grid-template-columns: 1fr !important;
    }
  }
`
document.head.appendChild(localStyleSheet)
