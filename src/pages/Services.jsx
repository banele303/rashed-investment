import React from 'react'
import { Search, Compass, DollarSign, HardHat, ShieldCheck, ShoppingBag, Droplet, Fuel, Home as HomeIcon, Sun, Heart, CheckCircle2 } from 'lucide-react'
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
      desc: "Creating state-of-the-art mixed-use lifestyle centers, drive-through complexes, and grocery hubs that bring urban conveniences directly to traditional land zones."
    },
    {
      title: "Water & Sanitation",
      icon: Droplet,
      isGreen: true,
      desc: "Building specialized water treatment facilities and wastewater purification systems to support communities and secure water resource preservation."
    },
    {
      title: "Petroleum & Gas",
      icon: Fuel,
      desc: "Constructing and managing modern 24-hour filling stations integrated with convenience stores, car washes, and fast-food drive-through assets."
    },
    {
      title: "Residential Accommodation",
      icon: HomeIcon,
      desc: "Designing and building high-quality, secure rental housing complexes and residential estates that elevate housing standards in developing communities."
    },
    {
      title: "Renewable Energy (Solar)",
      icon: Sun,
      isGreen: true,
      desc: "Supplementing grid infrastructure with localized photovoltaic solar panels and battery storage to power businesses and decrease load shedding pressure."
    },
    {
      title: "Community Projects",
      icon: Heart,
      desc: "Developing taxi ranks, public safety streetlights, e-hailing hubs, government office spaces, and local artisan training halls under CSI frameworks."
    }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Our Services | Rashed Investments</title>
        <meta name="description" content="Discover Rashed Investments' property development process and structural sectors including commercial, solar energy, and water treatment." />
      </Helmet>
      
      {/* Vision Banner */}
      <section style={styles.visionBanner}>
        <div className="container" style={styles.visionContainer}>
          <div className="glow-badge-green" style={{ marginBottom: '1.25rem' }}>
            <span>Corporate Vision</span>
          </div>
          <h2 style={styles.visionTitle}>Developing Dignified Spaces</h2>
          <p style={styles.visionText}>
            To lead the architectural and economic transformation of rural communities through high-quality, sustainable property developments, restoring dignity to historically underserved areas.
          </p>
        </div>
      </section>

      {/* Services Header */}
      <section style={styles.headerSection}>
        <div className="container animate-fade-in" style={styles.headerContainer}>
          <span className="section-tag">Our Capabilities</span>
          <h1 className="section-title">
            Tailor-Made <span className="text-green-gradient">Turnkey Solutions</span>
          </h1>
          <p style={styles.headerDesc}>
            From initial geo-technical drilling and traditional leader consultations to final keys handover, Rashed Investments manages the complete life cycle of property and infrastructure development.
          </p>
        </div>
      </section>

      {/* Process Lifecycle Section */}
      <section style={styles.lifecycleSection}>
        <div className="container">
          <div style={styles.subHeader}>
            <span className="section-tag">The Lifecycle</span>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              We provide an integrated, end-to-end framework that guarantees safety, efficiency, quality control, and community enrichment at every stage of the project.
            </p>
          </div>

          <div className="lifecycle-timeline">
            {lifecycle.map((stage, idx) => {
              const Icon = stage.icon
              return (
                <div key={idx} className="timeline-item">
                  <div className="timeline-node">{stage.step}</div>
                  <div className="glass-panel timeline-body">
                    <div style={styles.timelineHeader}>
                      <h3 style={styles.timelineTitle}>{stage.title}</h3>
                      <div style={styles.timelineIconWrapper}>
                        <Icon size={20} color="var(--accent-primary)" />
                      </div>
                    </div>
                    <p style={styles.timelineDesc}>{stage.desc}</p>
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

          <div className="grid-cards">
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
                    <Icon size={24} color={sector.isGreen ? "var(--accent-green)" : "var(--accent-primary)"} />
                  </div>
                  <h3 style={styles.sectorTitle}>{sector.title}</h3>
                  <p style={styles.sectorDesc}>{sector.desc}</p>
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
  visionBanner: {
    background: 'var(--bg-tertiary)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
    padding: '4.5rem 0',
    textAlign: 'center',
  },
  visionContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  visionTitle: {
    fontSize: '2.2rem',
    color: '#FFFFFF',
    marginBottom: '1rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
  },
  visionText: {
    fontSize: '1.2rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    maxWidth: '720px',
  },
  headerSection: {
    background: 'radial-gradient(circle at 90% 10%, rgba(156, 180, 146, 0.04) 0%, transparent 60%)',
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
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  subHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1.25rem',
  },
  timelineIconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: 'rgba(156, 180, 146, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-accent)',
  },
  timelineTitle: {
    fontSize: '1.45rem',
    fontWeight: 800,
    color: '#FFFFFF',
  },
  timelineDesc: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
  sectorsSection: {
    background: 'var(--bg-secondary)',
  },
  sectorCard: {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sectorIconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    border: '1px solid transparent',
  },
  sectorTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#FFFFFF',
    marginBottom: '1rem',
  },
  sectorDesc: {
    fontSize: '0.98rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
  }
}
