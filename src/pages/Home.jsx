import React from 'react'
import { ArrowRight, Zap, Droplet, Shield, Award, BookOpen, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const pillars = [
    {
      icon: Zap,
      title: "Renewable Energy Focus",
      desc: "Supplementing power by using solar energy grids to reduce pressure from the national grid, facilitating environmentally friendly developments."
    },
    {
      icon: Droplet,
      title: "Water Treatment & Preservation",
      desc: "Developing custom water treatment plants to support water preservation, recognizing water as a scarce and essential national resource."
    },
    {
      icon: Shield,
      title: "Dignity Restoration",
      desc: "Reversing demeaning trends of substandard rural development by building modern commercial, retail, and industrial spaces."
    },
    {
      icon: Award,
      title: "100% Black-Owned",
      desc: "A level 1 B-BBEE property development firm established to drive socio-economic activities in rural areas and township communities."
    }
  ]

  const stats = [
    { value: "100%", label: "Black-Owned" },
    { value: "50+ Yrs", label: "Combined Experience" },
    { value: "Level 1", label: "B-BBEE Contributor" },
    { value: "NDP 2030", label: "Aligned Goals" }
  ]

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section className="hero-wrapper" style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroContent} className="animate-fade-in">
            <span style={styles.heroTag}>Sustainable Infrastructure Specialists</span>
            <h1 style={styles.heroTitle}>
              Restoring Dignity Through <span className="text-gold-gradient">Modern Property Development</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Developing modern commercial, retail, and industrial facilities in rural and traditional communities across South Africa, aligned to the National Development Plan 2030.
            </p>
            <div style={styles.heroBtns}>
              <Link to="/projects" className="btn-premium btn-primary">
                <span>Explore Flagship Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-premium btn-secondary">
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
          
          <div style={styles.heroVisual} className="animate-fade-in">
            <div style={styles.imageCard}>
              <img 
                src="/extracted_images/image_2.png" 
                alt="Modern Retail Architecture" 
                style={styles.heroImg}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div style={styles.imageBadge}>
                <span>Lwamondo Project Render</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={styles.statsSection}>
        <div className="container">
          <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-panel" style={styles.statCard}>
                <h3 style={styles.statVal} className="text-gold-gradient">{stat.value}</h3>
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Pillars */}
      <section style={styles.pillarsSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag">Strategic Pillars</span>
            <h2 className="section-title">Aligned with National Progress</h2>
            <p className="section-subtitle">
              Our developments directly support the South African National Development Plan 2030, establishing localized economic growth, creating green jobs, and transferring crucial engineering skills.
            </p>
          </div>

          <div className="grid-cards">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div key={idx} className="glass-panel" style={styles.pillarCard}>
                  <div style={styles.iconWrapper}>
                    <Icon size={24} color="var(--accent-gold)" />
                  </div>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Legacy & Name Story */}
      <section style={styles.legacySection}>
        <div className="container" style={styles.legacyContainer}>
          <div style={styles.legacyVisual}>
            <div style={styles.legacyImageFrame}>
              <img 
                src="/extracted_images/image_12.png" 
                alt="Traditional Land Heritage" 
                style={styles.legacyImg}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
          <div style={styles.legacyContent}>
            <span className="section-tag">Our Heritage</span>
            <h2 className="section-title" style={styles.legacyTitle}>
              Rashed: <span className="text-gold-gradient">What's in the Name?</span>
            </h2>
            <p style={styles.legacyText}>
              Rashed is short for <strong>Rashede</strong>, our family or clan totem. The Khangales are part of the Vhafamadi clan, whose praise chant, or Tshirendo, carries the name Rashede. We originate from Ha-Mashau.
            </p>
            <blockquote style={styles.blockquote}>
              "Mufamadi. Rashede. Ratshivhomba. Randodza. Mukonde wa mubvumela ndodzi dzi ala, wa Ha-Ramutsindela..."
            </blockquote>
            <p style={styles.legacyText}>
              The name Rashed is our way of preserving our legacy and reminding ourselves of the values of serving and nurturing communities which our forefathers held in high esteem. When our late great-great-grandfather, Khangale, returned from the Second Anglo-Boer War, locals named him "Boulo". To this day, our homestead is called <strong>Ha-Boulo</strong>.
            </p>
            <div style={styles.legacyFooter}>
              <span style={styles.signatureName}>Boulo, Rashede!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CSI Section */}
      <section style={styles.csiSection}>
        <div className="container" style={styles.csiContainer}>
          <div style={styles.csiContent}>
            <span className="section-tag">Social Responsibility</span>
            <h2 className="section-title">Corporate Social Investment (CSI)</h2>
            <p style={styles.csiSubText}>
              Our biggest investment is in people. We believe in leaving an indelible mark on the communities where we operate. We run extensive training programs under our CSI wing.
            </p>
            <div style={styles.csiFeatures}>
              <div style={styles.csiFeatureItem}>
                <BookOpen size={20} color="var(--accent-gold)" />
                <div>
                  <h4 style={styles.csiFeatureTitle}>Early Childhood Development (ECD)</h4>
                  <p style={styles.csiFeatureDesc}>Supporting rural daycare and early learning centers with building upgrades and educational materials.</p>
                </div>
              </div>
              <div style={styles.csiFeatureItem}>
                <HeartHandshake size={20} color="var(--accent-gold)" />
                <div>
                  <h4 style={styles.csiFeatureTitle}>Skills & Artisan Training</h4>
                  <p style={styles.csiFeatureDesc}>Equipping local youth with masonry, plumbing, electrical, and commercial management skills that make them employable.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.csiVisual}>
            <div className="glass-panel" style={styles.csiCard}>
              <h3 style={styles.csiCardTitle} className="text-gold-gradient">Community Pillars</h3>
              <ul style={styles.csiList}>
                <li>Poverty Alleviation</li>
                <li>Artisan Training & Accreditation</li>
                <li>Child-headed Families Support</li>
                <li>Elderly Assistance Programs</li>
                <li>Crime Prevention via Job Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-primary)',
  },
  heroSection: {
    position: 'relative',
    background: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 80%, var(--bg-primary))',
    zIndex: 1,
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroTag: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--accent-gold)',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: '3.75rem',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
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
  },
  imageCard: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
  },
  heroImg: {
    width: '100%',
    height: '480px',
    objectFit: 'cover',
    display: 'block',
  },
  imageBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(10, 13, 20, 0.8)',
    backdropFilter: 'blur(8px)',
    border: '1px solid var(--border-gold)',
    padding: '0.5rem 1rem',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-display)',
    color: '#FFFFFF',
  },
  statsSection: {
    padding: '2rem 0',
    marginTop: '-4rem',
    position: 'relative',
    zIndex: 10,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
  },
  statCard: {
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '12px',
  },
  statVal: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  pillarsSection: {
    background: 'var(--bg-secondary)',
  },
  sectionHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  pillarCard: {
    padding: '2.5rem',
    borderRadius: '16px',
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(212, 175, 55, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '1px solid rgba(212, 175, 55, 0.2)',
  },
  pillarTitle: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  pillarDesc: {
    fontSize: '0.95rem',
  },
  legacySection: {
    background: 'radial-gradient(circle at 10% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 50%)',
  },
  legacyContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '5rem',
    alignItems: 'center',
  },
  legacyVisual: {
    position: 'relative',
  },
  legacyImageFrame: {
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  legacyImg: {
    width: '100%',
    height: '550px',
    objectFit: 'cover',
    display: 'block',
  },
  legacyContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  legacyTitle: {
    marginBottom: '2rem',
  },
  legacyText: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
  },
  blockquote: {
    borderLeft: '3px solid var(--accent-gold)',
    paddingLeft: '1.5rem',
    margin: '1.5rem 0',
    fontStyle: 'italic',
    fontSize: '1.15rem',
    color: '#FFFFFF',
    lineHeight: 1.5,
  },
  legacyFooter: {
    marginTop: '1rem',
  },
  signatureName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--accent-gold)',
    fontSize: '1.25rem',
    letterSpacing: '0.05em',
  },
  csiSection: {
    background: 'var(--bg-secondary)',
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
    marginBottom: '2.5rem',
    fontSize: '1.1rem',
  },
  csiFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  csiFeatureItem: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  csiFeatureTitle: {
    fontSize: '1.15rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  csiFeatureDesc: {
    fontSize: '0.95rem',
  },
  csiVisual: {},
  csiCard: {
    padding: '3rem',
    borderRadius: '16px',
  },
  csiCardTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: '2rem',
  },
  csiList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    listStyleType: 'none',
  },
  csiListLi: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  }
}
