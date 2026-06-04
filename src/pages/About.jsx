import React from 'react'
import { Award, Briefcase, GraduationCap, Linkedin, Mail, Phone, ExternalLink, ArrowRight, Building, Leaf, Shield, Globe } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import TeamGallery from '../components/TeamGallery'

export default function About() {
  const team = [
    {
      name: "Ndivhuwo Khangale",
      role: "Executive Director & CEO",
      image: "/director_ndivhuwo.png",
      email: "ndivhuwo@rashed.co.za",
      phone: "072 254 9448",
      bio: "Seasoned serial entrepreneur, Business Development champion, and Marketing Communications Specialist with over 26 years of corporate leadership experience.",
      details: [
        "Former spokesperson for the South African Minister of Energy and Director of Communications.",
        "Created executive communications and speech writing for Eskom Board Chairpersons and CEOs.",
        "Former Content Manager for the SABC and founding journalist for the national magazine Vuk'unzele.",
        "Managing Director of RPGenX, a firm specializing in water, sanitation, and renewable energy grids.",
        "Honours graduate in Journalism and Media Studies from Wits University, with business credentials from leading institutions."
      ]
    },
    {
      name: "Vhahangwele Khangale",
      role: "Technical Director",
      image: "/director_vhahangwele.png",
      email: "vhahangwele@rashed.co.za",
      phone: "067 285 5095",
      bio: "Registered professional Architectural Technologist with 15+ years experience spanning public sector capital works and private built environment consulting.",
      details: [
        "Managing Director of UBK Projects and UBKRothoma Projects (design, project, and construction management).",
        "Spent 8 years executing key strategic investments as Engineering Manager & Project Lead inside Transnet SOC Capital Projects.",
        "Experienced built environment consultant across residential and commercial developments from feasibility study to keys handover.",
        "Architectural graduate of Tshwane University of Technology (TUT) and Wits Business School (WBS) Junior Managers Program."
      ]
    },
    {
      name: "Ompha Monica Khangale",
      role: "Marketing Communications Executive",
      image: "/director_monica.png",
      email: "info@rashed.co.za",
      phone: "072 254 9448",
      bio: "Dynamic and creatively-driven Marketing & Communications professional with over 8 years experience across public relations, event management, and entertainment.",
      details: [
        "Social media marketer and brand manager for national cultural projects, including the Murumba Cultural Parade (in partnership with DSAC).",
        "Performer and artist manager collaborating alongside Academy Award-winning Hans Zimmer and Disney's Lebo M (Lion King).",
        "TV and media appearances on Netflix's dance film series JIVA! and SABC Phalaphala FM broadcasts.",
        "Owner of Ralo Studio (multimedia entertainment) and Wits University Theatre & Performance Honours graduate (2022)."
      ]
    }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>About Us | Rashed Investments</title>
        <meta name="description" content="Meet the leadership of Rashed Investments, a 100% Black-owned firm focused on sustainable rural infrastructure." />
      </Helmet>

      {/* Hero Banner */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div className="container" style={styles.heroContent}>
          <div className="animate-fade-in">
            <div className="glow-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Building size={16} style={{ marginRight: '8px' }} />
              <span>Corporate Profile</span>
            </div>
            <h1 style={styles.heroTitle}>
              Shaping the Future of <br />
              <span className="text-green-gradient">Sustainable Infrastructure</span>
            </h1>
            <p style={styles.heroDesc}>
              Rashed Investments is a premier, 100% Black-owned property development and investment firm. We are dedicated to redefining rural and commercial landscapes through innovative, world-class infrastructure development and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={styles.introSection}>
        <div className="container" style={styles.introContainer}>
          <div style={styles.introContent} className="animate-fade-in">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Advancing Communities Through <span className="text-green-gradient">Socio-Economic Excellence</span>
            </h2>
            <p style={styles.paragraph}>
              Established with a profound vision in 2022, Rashed Investments has quickly emerged as a formidable force in property development. Specializing in rural, traditional leader-owned land, as well as commercial urban spaces, our primary objective is to reverse substandard development trends. We achieve this by conceptualizing and constructing state-of-the-art commercial, retail, and industrial facilities that rival global standards.
            </p>
            <p style={styles.paragraph}>
              Our multidisciplinary approach brings together elite architectural design, robust civil engineering, and sustainable practices. By integrating renewable energy sources, water conservation systems, and advanced structural solutions, we not only build for today but engineer resilient ecosystems for future generations.
            </p>
            <div style={styles.statsRow}>
              <div style={styles.statBox}>
                <h4 style={styles.statNumber}>100%</h4>
                <p style={styles.statLabel}>Black-Owned</p>
              </div>
              <div style={styles.statBox}>
                <h4 style={styles.statNumber}>Level 1</h4>
                <p style={styles.statLabel}>B-BBEE Contributor</p>
              </div>
              <div style={styles.statBox}>
                <h4 style={styles.statNumber}>25+</h4>
                <p style={styles.statLabel}>Years Combined Experience</p>
              </div>
            </div>
          </div>
          <div style={styles.introVisual} className="animate-fade-in">
            <div style={styles.imageWrapper}>
              <img src="https://images.unsplash.com/photo-1541888081622-6b940e4ab786?q=80&w=2070&auto=format&fit=crop" alt="Our Investment Scope" style={styles.scopeImage} />
              <div style={styles.imageOverlay} />
            </div>
            <div style={styles.panelCard} className="glass-panel">
              <h3 style={styles.panelTitle} className="text-green-gradient">Our Investment Scope</h3>
              <p style={styles.panelText}>
                We partner with traditional councils, government departments, and private financial institutions to construct infrastructure that supports essential services, spanning water preservation, sustainable sanitation, and extensive solar grid installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy / Values */}
      <section style={styles.philosophySection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag-green">Corporate Values</span>
            <h2 className="section-title">The Foundation of Our Excellence</h2>
            <p style={styles.philosophySubText}>
              We are driven by a commitment to integrity, innovation, and impact. These core pillars guide every project we undertake, ensuring we deliver value that transcends the built environment.
            </p>
          </div>
          <div style={styles.philosophyGrid}>
            <div className="glass-panel-green" style={styles.philCard}>
              <Shield style={styles.philIcon} />
              <h3 style={styles.philTitle} className="text-green-gradient">Empowerment & Inclusion</h3>
              <p style={styles.philText}>As a Level 1 B-BBEE contributor, we actively drive black economic empowerment across structural, civil, and architectural sectors, creating tangible opportunities for historically disadvantaged individuals.</p>
            </div>
            <div className="glass-panel-green" style={styles.philCard}>
              <GraduationCap style={styles.philIcon} />
              <h3 style={styles.philTitle} className="text-green-gradient">Skills Development</h3>
              <p style={styles.philText}>We believe in leaving an indelible mark. We transfer certified engineering, masonry, and artisan skills to local youth in the communities we develop, ensuring long-term socio-economic upliftment.</p>
            </div>
            <div className="glass-panel-green" style={styles.philCard}>
              <Leaf style={styles.philIcon} />
              <h3 style={styles.philTitle} className="text-green-gradient">Eco-Friendly Design</h3>
              <p style={styles.philText}>Sustainability is not an afterthought; it's our blueprint. We integrate solar PV plants, rain harvesting networks, and waste water treatment facilities into every modern commercial space we build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamGallery />
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
    height: '70vh',
    minHeight: '600px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 800,
    lineHeight: '1.1',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    letterSpacing: '-0.03em',
  },
  heroDesc: {
    fontSize: '1.25rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    maxWidth: '700px',
  },
  introSection: {
    padding: '8rem 0',
    background: 'radial-gradient(circle at 10% 20%, rgba(156, 180, 146, 0.04) 0%, transparent 60%)',
  },
  introContainer: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '6rem',
    alignItems: 'center',
  },
  introContent: {},
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
  },
  statsRow: {
    display: 'flex',
    gap: '3rem',
    marginTop: '3rem',
    paddingTop: '3rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'var(--accent-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 600,
  },
  introVisual: {
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    marginBottom: '-4rem',
    marginLeft: '2rem',
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.05)',
    zIndex: 1,
  },
  scopeImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
  },
  panelCard: {
    padding: '3rem',
    borderRadius: '20px',
    border: '1px solid var(--border-accent)',
    position: 'relative',
    zIndex: 2,
    marginRight: '2rem',
    backgroundColor: 'rgba(20, 20, 20, 0.85)',
    backdropFilter: 'blur(16px)',
  },
  panelTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: 700,
  },
  panelText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
  philosophySection: {
    background: 'var(--bg-tertiary)',
    padding: '8rem 0',
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  philosophySubText: {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
    maxWidth: '700px',
    marginTop: '1.5rem',
  },
  philosophyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  philCard: {
    padding: '3.5rem 2.5rem',
    borderRadius: '24px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  philIcon: {
    color: 'var(--accent-primary)',
    width: '32px',
    height: '32px',
    marginBottom: '0.5rem',
  },
  philTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
  },
  philText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
}

// Inline CSS overrides for responsiveness
const localAboutStyleSheet = document.createElement("style")
localAboutStyleSheet.innerText = `
  @media (max-width: 991px) {
    .intro-container {
      grid-template-columns: 1fr !important;
      gap: 4rem !important;
    }
    .philosophy-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    div[style*="heroTitle"] {
      fontSize: 2.8rem !important;
    }
    div[style*="statsRow"] {
      flex-direction: column !important;
      gap: 1.5rem !important;
    }
    div[style*="imageWrapper"] {
      marginLeft: 0 !important;
      marginBottom: 2rem !important;
    }
    div[style*="panelCard"] {
      marginRight: 0 !important;
    }
  }
`
document.head.appendChild(localAboutStyleSheet)
