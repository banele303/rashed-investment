import React from 'react'
import { ArrowRight, Zap, Droplet, Shield, Award, BookOpen, HeartHandshake, MapPin, ChevronRight, Calendar } from 'lucide-react'
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

      {/* Landing Page Overview Hero */}
      <section className="home-hero-section" style={styles.overviewHeroSection}>
        <div style={styles.overviewHeroOverlay}></div>
        <div className="container" style={styles.overviewHeroContainer}>
          <div style={styles.overviewHeroContent}>
            <h1 className="page-hero-title" style={styles.overviewHeroTitle}>OVERVIEW</h1>
            <div style={styles.overviewHeroCopy}>
              <p style={styles.overviewHeroText}>
                Our company is aligned to the National Development Plan 2030 which seeks to create economic activities in communities in order to reduce poverty, grow the economy and create jobs in a sustainable and environmentally friendly manner. As such, our projects supplement power by using renewable energy (solar) to reduce pressure from the national grid. We also develop our own water treatment plants to support water preservation, recognising that water is a scarce resource in our country.
              </p>
              <p style={styles.overviewHeroText}>
                Our key objective is to reverse the demeaning trend of substandard rural development and actively contribute towards restoring the dignity of previously marginalised communities through the development of modern commercial, retail, and industrial facilities that were historically exclusive to urban areas.
              </p>
              <p style={styles.overviewHeroText}>
                Our biggest investment is in people. We believe in transferring skills to the communities in which we operate. Our fundamental principle is to empower individuals by nurturing their talent across various sectors, including education, entertainment, small businesses development, artisan training, leadership and economic development. This is achieved through our Corporate Social Investment wing which addresses social ills affecting communities, such as poverty, crime, diseases, child-headed families, support for the elderly, Early Childhood Development (ECD) and other community development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <AnimatedSection direction="up" delay={0.2}>
        <section style={styles.statsSection}>
          <div className="container">
            <div className="responsive-grid home-stats-grid" style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-panel" style={styles.statCard}>
                <h3 style={styles.statVal}>{stat.value}</h3>
                <h4 style={styles.statLabel}>{stat.label}</h4>
                <p style={styles.statSub}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* About Us */}
      <section style={styles.aboutHomeSection}>
        <div className="container responsive-two-col" style={styles.aboutHomeContainer}>
          <div style={styles.aboutHomeContent}>
            <span className="section-tag-green">About Us</span>
            <h2 className="section-title">Property Development for Rural and Township Growth</h2>
          </div>
          <div className="mobile-copy-panel" style={styles.aboutHomeCopy}>
            <p style={styles.aboutHomeText}>
              Rashed Investments is a 100% Black-owned property development company registered in 2022. The company specialises in the development of properties, especially in rural and traditional leaders-owned land.
            </p>
            <p style={styles.aboutHomeText}>
              Our focus is to advance economic activities in rural and township areas through infrastructure development, basic services such as water and sanitation, renewable energy, job creation, health, and education.
            </p>
            <div className="responsive-button-row" style={styles.aboutHomeActions}>
              <Link to="/about" className="btn-premium btn-secondary" style={styles.aboutHomeBtn}>
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-premium btn-primary" style={styles.aboutHomeBtn}>
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FEATURED INFRASTRUCTURE SECTION */}
      <section style={styles.gallerySection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag-green">Our Capabilities</span>
            <h2 className="section-title">Featured Infrastructure</h2>
            <p className="section-subtitle">
              We seamlessly integrate cutting-edge green technologies into our commercial developments, creating self-sustaining micro-cities.
            </p>
          </div>
          <div className="responsive-grid home-photo-grid" style={styles.photoGrid}>
            <div className="glass-panel" style={styles.photoCard}>
              <img src="/solar_infrastructure.png" alt="Commercial Solar Grid" style={styles.photoImg} />
              <div style={styles.photoInfo}>
                <h3 style={styles.photoTitle}>Solar PV Integration</h3>
                <p style={styles.photoDesc}>Independent commercial energy grids</p>
              </div>
            </div>
            <div className="glass-panel" style={styles.photoCard}>
              <img src="/water_treatment.png" alt="Water Purification Plant" style={styles.photoImg} />
              <div style={styles.photoInfo}>
                <h3 style={styles.photoTitle}>Water Security</h3>
                <p style={styles.photoDesc}>Eco-friendly purification plants</p>
              </div>
            </div>
            <div className="glass-panel" style={styles.photoCard}>
              <img src="/community_dev.png" alt="Modern Community Plaza" style={styles.photoImg} />
              <div style={styles.photoInfo}>
                <h3 style={styles.photoTitle}>Community Plazas</h3>
                <p style={styles.photoDesc}>Vibrant retail and lifestyle hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW RECENT INSIGHTS / BLOG SECTION */}
      <section style={styles.blogSection}>
        <div className="container">
          <div className="responsive-header-row" style={styles.blogHeaderRow}>
            <div>
              <span className="section-tag">Latest Updates</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>News & Insights</h2>
            </div>
            <Link to="/blog" className="btn-premium btn-secondary" style={styles.viewAllBtn}>
              <span>View All Posts</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="responsive-grid home-blog-grid" style={styles.blogGrid}>
            <Link to="/blog/2" className="glass-panel" style={styles.blogCard}>
              <div style={styles.blogImgWrapper}>
                <img src="/news_insights_1.png" alt="Construction Progress" style={styles.blogImg} />
              </div>
              <div style={styles.blogCardBody}>
                <div style={styles.blogMeta}>
                  <Calendar size={14} />
                  <span>October 12, 2023</span>
                </div>
                <h3 style={styles.blogCardTitle}>Lwamondo Urban Village: Earthworks Phase Completed Ahead of Schedule</h3>
                <p style={styles.blogCardDesc}>We are excited to announce that phase one of our flagship development has successfully concluded its geotechnical earthworks.</p>
                <span style={styles.blogReadMore}>Read Article &rarr;</span>
              </div>
            </Link>
            
            <Link to="/blog/1" className="glass-panel" style={styles.blogCard}>
              <div style={styles.blogImgWrapper}>
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" alt="Solar Panels" style={styles.blogImg} />
              </div>
              <div style={styles.blogCardBody}>
                <div style={styles.blogMeta}>
                  <Calendar size={14} />
                  <span>August 05, 2023</span>
                </div>
                <h3 style={styles.blogCardTitle}>Integrating Independent Solar Grids in Rural Commercial Centres</h3>
                <p style={styles.blogCardDesc}>A deep dive into how Rashed Investments is future-proofing retail developments against national grid failures using PV technology.</p>
                <span style={styles.blogReadMore}>Read Article &rarr;</span>
              </div>
            </Link>
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
              Our strategic pillars translate national goals into practical development: local economic hubs, renewable energy, water security, dignified facilities, and skills transfer.
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
        <div className="container responsive-two-col" style={styles.legacyContainer}>
          <div style={styles.legacyContent} className="animate-fade-in">
            <span className="section-tag">Our Totem & Heritage</span>
            <h2 className="section-title">
              Rashed: What's in the Name?
            </h2>
            <p style={styles.legacyText}>
              Rashed is short for <strong>Rashede</strong>, our family or clan totem. The Khangales are part of the Vhafamadi clan, whose praise chant, or <strong>Tshirendo</strong>, carries the name Rashede.
            </p>
            <p style={styles.legacyText}>
              We are the Vhafamadi people who originate from Ha-Mashau, and when the praise hits us, it says:
            </p>
            <blockquote style={styles.blockquote}>
              "Mufamadi. Rashede. Ratshivhomba. Randodza. Mukonde wa mubvumela ndodzi dzi ala, wa Ha-Ramutsindela wa thumbu ya ngwedi ya nkunda ndi a shulula nda vhuya na mpato haya!"
            </blockquote>
            <p style={styles.legacyText}>
              The name Rashed is a way of preserving our legacy and reminding ourselves of the values of serving and nurturing communities, values which our forefathers held in high esteem.
            </p>
            <p style={styles.legacyText}>
              When our late great-grandfather, Khangale, returned from <strong>Paul Kruger's Second Anglo-Boer War (1899-1902)</strong>, locals were unable to pronounce the name "Paul" and named him <strong>Boulo</strong>. As a result, the Kruger name is referred to as <strong>Vhugala Phuka ha Boulo</strong> in Tshivenda.
            </p>
            <p style={styles.legacyText}>
              Our family homestead is still called <strong>Ha-Boulo</strong> to this day, carrying that history forward as part of the Rashed Investments identity.
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

      {/* Strategic Partners */}
      <section style={styles.partnersSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag-green">Our Partners</span>
            <h2 className="section-title">Strategic Delivery Partners</h2>
            <p className="section-subtitle">
              We collaborate with specialist partners across energy, petroleum, and project delivery to support sustainable rural infrastructure.
            </p>
          </div>
          <div className="responsive-grid home-partners-grid" style={styles.partnersGrid}>
            {[
              { src: '/partner-petrogrand.jpeg', name: 'Petrogrand' },
              { src: '/partner-rpgenx.jpeg', name: 'RPGenX Renewable Power Generation' },
              { src: '/partner-ubk-projects.jpeg', name: 'UBK Projects' },
            ].map((partner) => (
              <div key={partner.name} className="glass-panel" style={styles.partnerCard}>
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  style={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <TeamGallery />

      {/* CSI Section */}
      <section style={styles.csiSection}>
        <div className="container responsive-two-col" style={styles.csiContainer}>
          <div style={styles.csiContent}>
            <span className="section-tag-green">Social Responsibility</span>
            <h2 className="section-title">Corporate Social Investment (CSI)</h2>
            <p style={styles.csiSubText}>
              We invest in people by creating pathways for education, artisan training, leadership, small business development, and community resilience in the areas where we operate.
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
              <h3 style={styles.csiCardTitle}>Community Support Foundations</h3>
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
    background: 'url("/urban_village_shopping_centre.png") no-repeat center center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '8rem 0',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.82) 60%, var(--bg-secondary) 100%)',
    zIndex: 1,
  },
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '900px',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    lineHeight: '1.75',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '3rem',
    maxWidth: '700px',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
  },
  heroBtns: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.1rem',
  },
  flagshipLabel: {
    fontSize: '2.4rem',
    fontWeight: 800,
    lineHeight: 1.15,
    fontFamily: 'var(--font-display)',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
  },
  flagshipLabelAccent: {
    color: 'var(--accent-primary)',
    textShadow: '0 0 20px rgba(156, 180, 146, 0.6)',
  },
  statsSection: {
    padding: '3.5rem 0',
    position: 'relative',
    zIndex: 10,
    marginTop: 0,
  },
  overviewHeroSection: {
    position: 'relative',
    background: 'url("/about-img.jpeg") no-repeat center center',
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 80px)',
    padding: '9rem 0',
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
    display: 'flex',
    alignItems: 'center',
  },
  overviewHeroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(7,9,8,0.94) 0%, rgba(7,9,8,0.76) 48%, rgba(7,9,8,0.46) 100%), linear-gradient(to bottom, rgba(7,9,8,0.18), var(--bg-secondary))',
    zIndex: 1,
  },
  overviewHeroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  overviewHeroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '980px',
    padding: '0 2.5rem',
  },
  overviewHeroTitle: {
    fontSize: '4.5rem',
    fontWeight: 900,
    lineHeight: 1,
    color: '#FFFFFF',
    marginBottom: '2rem',
    textShadow: '0 10px 35px rgba(0,0,0,0.55)',
  },
  overviewHeroCopy: {
    paddingRight: '2rem',
    maxWidth: '900px',
  },
  overviewHeroText: {
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: 'rgba(255,255,255,0.88)',
    marginBottom: '1.25rem',
    textShadow: '0 3px 18px rgba(0,0,0,0.72)',
  },
  aboutHomeSection: {
    background: 'var(--bg-tertiary)',
    padding: '7rem 0',
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  aboutHomeContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
    gap: '5rem',
    alignItems: 'start',
  },
  aboutHomeContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  aboutHomeCopy: {
    paddingLeft: '2.5rem',
    paddingRight: '1rem',
    borderLeft: '1px solid var(--border-accent)',
  },
  aboutHomeText: {
    fontSize: '1.08rem',
    lineHeight: '1.8',
    color: 'var(--text-secondary)',
    marginBottom: '1.35rem',
  },
  aboutHomeBtn: {
    padding: '0.9rem 1.25rem',
  },
  aboutHomeActions: {
    marginTop: '1rem',
    justifyContent: 'flex-start',
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
    background: 'var(--bg-secondary)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
  statVal: {
    fontSize: '2.8rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
  },
  statLabel: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  statSub: {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
  },
  gallerySection: {
    padding: '6rem 0',
    background: 'var(--bg-secondary)',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  photoCard: {
    overflow: 'hidden',
    padding: '0',
    borderRadius: '20px',
    border: 'none',
  },
  photoImg: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
  },
  photoInfo: {
    padding: '1.5rem',
  },
  photoTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    marginBottom: '0.25rem',
  },
  photoDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
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
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)',
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
    color: 'var(--text-primary)',
    lineHeight: '1.6',
    fontWeight: 600,
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
  partnersSection: {
    background: 'var(--bg-secondary)',
    padding: '7rem 0',
  },
  partnersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '2rem',
  },
  partnerCard: {
    minHeight: '170px',
    padding: '2rem',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFFFFF',
    border: '1px solid rgba(156, 180, 146, 0.18)',
  },
  partnerLogo: {
    width: '100%',
    maxWidth: '280px',
    maxHeight: '105px',
    objectFit: 'contain',
    display: 'block',
  },
  blogSection: {
    background: 'var(--bg-secondary)',
    paddingTop: '4rem',
  },
  blogHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  viewAllBtn: {
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
  },
  blogCard: {
    padding: 0,
    overflow: 'hidden',
    borderRadius: '20px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  blogImgWrapper: {
    width: '100%',
    height: '240px',
    overflow: 'hidden',
  },
  blogImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  blogCardBody: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  blogMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--accent-primary)',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  blogCardTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  blogCardDesc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  blogReadMore: {
    marginTop: 'auto',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    fontSize: '0.95rem',
  },
  teamSection: {
    background: 'var(--bg-secondary)',
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
    color: 'var(--text-primary)',
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
if (typeof document !== 'undefined') {
  const localStyleSheet = document.createElement("style")
  localStyleSheet.innerText = `
    @media (max-width: 991px) {
      .hero-title { font-size: 3.5rem !important; }
      .legacy-container {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      .csi-container {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      .photo-grid {
        grid-template-columns: 1fr !important;
      }
      .stats-grid {
        grid-template-columns: 1fr 1fr !important;
      }
    }
    @media (max-width: 600px) {
      .hero-title { font-size: 2.8rem !important; }
      .stats-grid {
        grid-template-columns: 1fr !important;
      }
      .blog-grid {
        grid-template-columns: 1fr !important;
      }
    }
    .blog-card:hover .blog-img { transform: scale(1.05); }
    .blog-card:hover .blog-read-more { padding-left: 5px; transition: padding 0.3s ease; }
    .photo-card:hover img { transform: scale(1.05); transition: transform 0.5s ease; }
  `
  document.head.appendChild(localStyleSheet)
}
