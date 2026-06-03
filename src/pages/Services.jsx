import React from 'react'
import { CheckCircle, Search, Compass, DollarSign, HardHat, ShieldCheck, ShoppingBag, Droplet, Fuel, Home as HomeIcon, Sun, Heart } from 'lucide-react'

export default function Services() {
  const lifecycle = [
    {
      step: "01",
      title: "Pre-Feasibility & Feasibility",
      icon: Search,
      desc: "Comprehensive analysis including geotechnical surveys, environmental impact assessments (EIA), town planning, and traditional/municipal consultations to ensure project viability."
    },
    {
      step: "02",
      title: "Bespoke Property Development",
      icon: Compass,
      desc: "Translating conceptual layouts into structural reality. Coordinating architectural technologists, structural engineers, and spatial planners to design eco-friendly developments."
    },
    {
      step: "03",
      title: "Joint-Venture & Investment",
      icon: DollarSign,
      desc: "Structuring capital investments and partnering with major banking systems, retail anchors, and public finance entities to fund multi-million-rand developments."
    },
    {
      step: "04",
      title: "Turnkey Construction",
      icon: HardHat,
      desc: "Complete civil and architectural construction. Employing local labor forces, organizing artisan training, and maintaining high engineering and safety standards on site."
    },
    {
      step: "05",
      title: "Operations & Maintenance",
      icon: ShieldCheck,
      desc: "Long-term facility management, security coordination, water/waste system maintenance, and managing retail tenant operations to secure investment returns."
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
      color: "#38BDF8",
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
      {/* Services Header */}
      <section style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <span className="section-tag">Our Capabilities</span>
          <h1 className="section-title">
            Tailor-Made <span className="text-gold-gradient">Turnkey Solutions</span>
          </h1>
          <p style={styles.headerDesc}>
            From initial geotechnical drilling and community leader consultations to the final tenant keys, Rashed Investments manages the complete life cycle of property and infrastructure development.
          </p>
        </div>
      </section>

      {/* Development Lifecycle Process */}
      <section style={styles.lifecycleSection}>
        <div className="container">
          <div style={styles.subHeader}>
            <span className="section-tag">The Lifecycle</span>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              We provide an integrated, end-to-end framework that guarantees safety, efficiency, quality control, and community enrichment at every stage of the project.
            </p>
          </div>

          <div style={styles.lifecycleTimeline}>
            {lifecycle.map((stage, idx) => {
              const Icon = stage.icon
              return (
                <div key={idx} className="glass-panel animate-fade-in" style={styles.timelineItem}>
                  <div style={styles.timelineHeader}>
                    <span style={styles.timelineStep} className="text-gold-gradient">{stage.step}</span>
                    <div style={styles.timelineIconWrapper}>
                      <Icon size={22} color="var(--accent-gold)" />
                    </div>
                  </div>
                  <h3 style={styles.timelineTitle}>{stage.title}</h3>
                  <p style={styles.timelineDesc}>{stage.desc}</p>
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
            <span className="section-tag">Sectors We Serve</span>
            <h2 className="section-title">Infrastructure Development</h2>
            <p className="section-subtitle">
              We leverage our extensive builder network and regulatory knowledge to deliver custom infrastructure solutions across diverse sectors.
            </p>
          </div>

          <div className="grid-cards">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon
              return (
                <div key={idx} className="glass-panel" style={styles.sectorCard}>
                  <div style={styles.sectorIconWrapper}>
                    <Icon size={24} color="var(--accent-gold)" />
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
    backgroundColor: 'var(--bg-primary)',
  },
  headerSection: {
    background: 'radial-gradient(circle at 90% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
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
    marginTop: '1.5rem',
  },
  lifecycleSection: {
    background: 'var(--bg-secondary)',
  },
  subHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  lifecycleTimeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
  },
  timelineItem: {
    padding: '2.5rem',
    borderRadius: '16px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1.25rem',
  },
  timelineStep: {
    fontSize: '2rem',
    fontWeight: 800,
    fontFamily: 'var(--font-display)',
  },
  timelineIconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: 'rgba(212, 175, 55, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(212, 175, 55, 0.15)',
  },
  timelineTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },
  timelineDesc: {
    fontSize: '1.05rem',
  },
  sectorsSection: {},
  sectorCard: {
    padding: '2.5rem',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sectorIconWrapper: {
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
  sectorTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  sectorDesc: {
    fontSize: '0.95rem',
  }
}
