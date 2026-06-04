import React from 'react'
import { Search, Compass, DollarSign, HardHat, ShieldCheck, ShoppingBag, Droplet, Fuel, Home as HomeIcon, Sun, Heart, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function Services() {
  const lifecycle = [
    {
      step: "01",
      title: "Pre-Feasibility & Feasibility",
      icon: Search,
      desc: "Conducting rigorous site studies including geo-technical drilling, zoning verification, Environmental Impact Assessments (EIA), and structured consultations with traditional leaders and municipal authorities."
    },
    {
      step: "02",
      title: "Bespoke Spatial Design",
      icon: Compass,
      desc: "Translating conceptual visions into modern blueprints. Coordinating structural engineers, architectural technologists, and spatial planners to draft state-of-the-art, eco-conscious structures."
    },
    {
      step: "03",
      title: "Joint-Venture & Capital Investment",
      icon: DollarSign,
      desc: "Structuring investments and partnering with major banking systems, national retail anchors, and government infrastructure funds to secure financing for high-impact developments."
    },
    {
      step: "04",
      title: "Turnkey Civil Construction",
      icon: HardHat,
      desc: "Executing the entire construction lifecycle safely and on time. Deploying local workforces, hosting accredited artisan academies, and enforcing premium engineering standards."
    },
    {
      step: "05",
      title: "Operations & Facility Management",
      icon: ShieldCheck,
      desc: "Providing ongoing property maintenance, security services, renewable energy monitoring, water treatment plant operations, and retail tenant leasing management."
    }
  ]

  const sectors = [
    {
      title: "Retail & Commercial",
      icon: ShoppingBag,
      desc: "Creating state-of-the-art mixed-use lifestyle centers, drive-through complexes, and grocery hubs that bring urban conveniences directly to traditional land zones. Our commercial projects drive local economic growth and create central nodes for community engagement."
    },
    {
      title: "Water & Sanitation",
      icon: Droplet,
      isGreen: true,
      desc: "Building specialized water treatment facilities and wastewater purification systems to support communities and secure water resource preservation. We incorporate advanced filtration technology and sustainable resource management."
    },
    {
      title: "Petroleum & Gas",
      icon: Fuel,
      desc: "Constructing and managing modern 24-hour filling stations integrated with convenience stores, car washes, and fast-food drive-through assets. These facilities are designed with rigorous safety standards and high-throughput efficiency in mind."
    },
    {
      title: "Residential Accommodation",
      icon: HomeIcon,
      desc: "Designing and building high-quality, secure rental housing complexes and residential estates that elevate housing standards in developing communities. We prioritize functional aesthetics, green spaces, and community well-being."
    },
    {
      title: "Renewable Energy (Solar)",
      icon: Sun,
      isGreen: true,
      desc: "Supplementing grid infrastructure with localized photovoltaic solar panels and battery storage to power businesses and decrease load shedding pressure. Our solar installations reduce carbon footprints and ensure uninterrupted operations."
    },
    {
      title: "Community Projects",
      icon: Heart,
      desc: "Developing taxi ranks, public safety streetlights, e-hailing hubs, government office spaces, and local artisan training halls under CSI frameworks. We aim to uplift communities through strategic infrastructure improvements."
    }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Our Services | Rashed Investments</title>
        <meta name="description" content="Discover Rashed Investments' property development process and structural sectors including commercial, solar energy, and water treatment." />
      </Helmet>
      
      {/* Hero Banner with Dark Architectural Image overlay */}
      <section style={styles.heroBanner}>
        <div className="container" style={styles.heroContainer}>
          <div className="glow-badge-green" style={{ marginBottom: '1.5rem' }}>
            <span>Corporate Vision</span>
          </div>
          <h1 style={styles.heroTitle}>Developing Dignified Spaces</h1>
          <p style={styles.heroText}>
            To lead the architectural and economic transformation of rural communities through high-quality, sustainable property developments, restoring dignity to historically underserved areas. Our turnkey solutions span from visionary blueprints to operational mastery, forging landmarks of progress.
          </p>
          <div style={styles.heroStats}>
            <div style={styles.statBox}>
              <TrendingUp size={28} color="var(--accent-primary)" style={{marginBottom: '0.5rem'}} />
              <div style={styles.statNumber}>$500M+</div>
              <div style={styles.statLabel}>Projects Managed</div>
            </div>
            <div style={styles.statBox}>
              <Users size={28} color="var(--accent-primary)" style={{marginBottom: '0.5rem'}} />
              <div style={styles.statNumber}>10,000+</div>
              <div style={styles.statLabel}>Jobs Created</div>
            </div>
            <div style={styles.statBox}>
              <Target size={28} color="var(--accent-primary)" style={{marginBottom: '0.5rem'}} />
              <div style={styles.statNumber}>15+</div>
              <div style={styles.statLabel}>Sectors Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section style={styles.headerSection}>
        <div className="container animate-fade-in" style={styles.headerContainer}>
          <span className="section-tag">Our Capabilities</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Tailor-Made <span className="text-green-gradient">Turnkey Solutions</span>
          </h2>
          <p style={styles.headerDesc}>
            From initial geo-technical drilling and traditional leader consultations to final keys handover, Rashed Investments manages the complete life cycle of property and infrastructure development. We deliver excellence engineered for the future.
          </p>
        </div>
      </section>

      {/* Process Lifecycle Section with Improved Timeline */}
      <section style={styles.lifecycleSection}>
        <div className="container">
          <div style={styles.subHeader}>
            <span className="section-tag">The Lifecycle</span>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              We provide an integrated, end-to-end framework that guarantees safety, efficiency, quality control, and community enrichment at every stage of the project.
            </p>
          </div>

          <div style={styles.timelineContainer}>
            {lifecycle.map((stage, idx) => {
              const Icon = stage.icon
              return (
                <div key={idx} style={styles.timelineItem}>
                  <div style={styles.timelineNodeContainer}>
                    <div style={styles.timelineNodeGlow}>{stage.step}</div>
                  </div>
                  <div className="glass-panel" style={styles.timelineBody}>
                    <div style={styles.timelineHeader}>
                      <h3 style={styles.timelineTitle}>{stage.title}</h3>
                      <div style={styles.timelineIconWrapper}>
                        <Icon size={22} color="var(--accent-primary)" />
                      </div>
                    </div>
                    <p style={styles.timelineDesc}>{stage.desc}</p>
                    <div style={styles.timelineFeatures}>
                      <div style={styles.featureItem}><CheckCircle2 size={16} color="var(--accent-primary)" /> <span style={{marginLeft: '0.5rem'}}>Quality Assured</span></div>
                      <div style={styles.featureItem}><CheckCircle2 size={16} color="var(--accent-primary)" /> <span style={{marginLeft: '0.5rem'}}>Expert Led</span></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Sectors */}
      <section style={styles.sectorsSection}>
        <div className="container">
          <div style={styles.subHeader}>
            <span className="section-tag-green">Sectors We Serve</span>
            <h2 className="section-title">Infrastructure Development</h2>
            <p className="section-subtitle">
              We leverage our extensive builder network and regulatory knowledge to deliver custom infrastructure solutions across diverse sectors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {sectors.map((sector, idx) => {
              const Icon = sector.icon
              return (
                <div 
                  key={idx} 
                  className={sector.isGreen ? "glass-panel-green" : "glass-panel"} 
                  style={styles.sectorCard}
                >
                  <div style={{
                    ...styles.sectorIconWrapper,
                    background: sector.isGreen ? 'rgba(82, 183, 136, 0.08)' : 'rgba(156, 180, 146, 0.08)',
                    borderColor: sector.isGreen ? 'var(--border-green)' : 'var(--border-accent)',
                  }}>
                    <Icon size={28} color={sector.isGreen ? "var(--accent-green)" : "var(--accent-primary)"} />
                  </div>
                  <h3 style={styles.sectorTitle}>{sector.title}</h3>
                  <p style={styles.sectorDesc}>{sector.desc}</p>
                  <img src={`/services-sector-${idx+1}.png`} alt={sector.title} style={styles.sectorImage} onError={(e) => { e.target.style.display = 'none' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-secondary)',
    overflowX: 'hidden',
  },
  heroBanner: {
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%), url("/hero-architecture.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '8rem 0 6rem 0',
    textAlign: 'center',
    position: 'relative',
  },
  heroContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '3.5rem',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
  },
  heroText: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.85)',
    maxWidth: '800px',
    marginBottom: '3rem',
  },
  heroStats: {
    display: 'flex',
    gap: '3rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    padding: '2rem',
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-display)',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '0.25rem',
  },
  headerSection: {
    background: 'radial-gradient(circle at 50% 0%, rgba(156, 180, 146, 0.05) 0%, transparent 70%)',
    textAlign: 'center',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  headerContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerDesc: {
    fontSize: '1.2rem',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
    marginTop: '1.5rem',
  },
  lifecycleSection: {
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid rgba(255,255,255,0.03)',
    borderBottom: '1px solid rgba(255,255,255,0.03)',
    padding: '6rem 0',
  },
  subHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    position: 'relative',
  },
  timelineNodeContainer: {
    flexShrink: 0,
    position: 'relative',
    zIndex: 2,
  },
  timelineNodeGlow: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--bg-tertiary), #1a1a1a)',
    border: '2px solid var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'var(--accent-primary)',
    boxShadow: '0 0 20px rgba(156, 180, 146, 0.4)',
  },
  timelineBody: {
    flex: 1,
    padding: '2.5rem',
    borderRadius: '16px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1.5rem',
  },
  timelineIconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(156, 180, 146, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(156, 180, 146, 0.2)',
  },
  timelineTitle: {
    fontSize: '1.6rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
  },
  timelineDesc: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
  },
  timelineFeatures: {
    display: 'flex',
    gap: '1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '1.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.7)',
  },
  sectorsSection: {
    background: 'var(--bg-secondary)',
    padding: '6rem 0',
  },
  sectorCard: {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  sectorIconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    border: '1px solid transparent',
  },
  sectorTitle: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: '1rem',
  },
  sectorDesc: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    flexGrow: 1,
  },
  sectorImage: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginTop: '2rem',
    border: '1px solid rgba(255,255,255,0.05)',
  }
}

