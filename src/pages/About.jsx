import React from 'react'
import { Award, Briefcase, GraduationCap, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
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
      email: "info@rashed.co.za", // General or director email
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

      {/* Intro Hero */}
      <section style={styles.introSection}>
        <div className="container" style={styles.introContainer}>
          <div style={styles.introContent} className="animate-fade-in">
            <div className="glow-badge" style={{ marginBottom: '1.5rem' }}>
              <span>Corporate Profile</span>
            </div>
            <h1 className="section-title">
              Advancing Rural Communities Through <span className="text-green-gradient">Socio-Economic Development</span>
            </h1>
            <p style={styles.introDesc}>
              Registered in 2022, Rashed Investments is a 100% Black-owned property development company specializing in rural and traditional leader-owned land. Our core objective is to reverse the demeaning trend of substandard rural development by building modern commercial, retail, and industrial facilities.
            </p>
          </div>
          <div style={styles.introVisual} className="animate-fade-in">
            <div style={styles.panelCard} className="glass-panel">
              <h3 style={styles.panelTitle} className="text-green-gradient">Our Investment Scope</h3>
              <p style={styles.panelText}>
                We partner with traditional councils, government departments, and private financial organizations to construct infrastructure that supports essential basic services, including water preservation, sustainable sanitation, and solar grid installations.
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
            <h2 className="section-title">The Foundation of Our Business</h2>
          </div>
          <div style={styles.philosophyGrid}>
            <div className="glass-panel-green" style={styles.philCard}>
              <h3 style={styles.philTitle} className="text-green-gradient">100% Black-Owned</h3>
              <p style={styles.philText}>Level 1 B-BBEE property and infrastructure consultant. Actively driving black economic empowerment across structural, civil, and architectural fields.</p>
            </div>
            <div className="glass-panel-green" style={styles.philCard}>
              <h3 style={styles.philTitle} className="text-green-gradient">Skills Development</h3>
              <p style={styles.philText}>We believe in leaving an indelible mark. We transfer certified engineering, masonry, and artisan skills to local youth in the communities we develop.</p>
            </div>
            <div className="glass-panel-green" style={styles.philCard}>
              <h3 style={styles.philTitle} className="text-green-gradient">Eco-Friendly Design</h3>
              <p style={styles.philText}>We integrate sustainable solar PV plants, rain harvesting networks, and waste water treatment facilities into every modern commercial space we build.</p>
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
  introSection: {
    background: 'radial-gradient(circle at 10% 20%, rgba(156, 180, 146, 0.04) 0%, transparent 60%)',
    padding: '6rem 0',
  },
  introContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '5rem',
    alignItems: 'center',
  },
  introContent: {},
  introDesc: {
    fontSize: '1.15rem',
    lineHeight: '1.75',
    color: 'var(--text-secondary)',
    marginTop: '1.5rem',
  },
  introVisual: {},
  panelCard: {
    padding: '3rem',
    borderRadius: '20px',
    border: '1px solid var(--border-accent)',
  },
  panelTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  panelText: {
    fontSize: '1.02rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
  philosophySection: {
    background: 'var(--bg-tertiary)',
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
  philosophyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  philCard: {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
  },
  philTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    marginBottom: '1.25rem',
  },
  philText: {
    fontSize: '0.98rem',
    lineHeight: '1.65',
    color: 'var(--text-secondary)',
  },
  teamSection: {
    background: 'var(--bg-secondary)',
  },
  teamList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
  },
  memberCard: {
    padding: '3rem',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  memberHeader: {
    display: 'flex',
    gap: '3.5rem',
    alignItems: 'center',
  },
  imgWrapper: {
    width: '190px',
    height: '190px',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '2px solid var(--accent-primary)',
    boxShadow: '0 15px 35px -10px var(--accent-glow-primary)',
    flexShrink: 0,
  },
  memberImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  memberTitles: {
    display: 'flex',
    flexDirection: 'column',
  },
  memberName: {
    fontSize: '2.2rem',
    fontWeight: 900,
    marginBottom: '0.35rem',
    letterSpacing: '-0.02em',
  },
  memberRole: {
    fontSize: '1.05rem',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '1.25rem',
  },
  memberBio: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    maxWidth: '750px',
    marginBottom: '1.5rem',
  },
  contactRow: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  contactIconLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    transition: 'var(--transition-fast)',
    ':hover': {
      color: 'var(--accent-primary)',
    }
  },
  memberDetails: {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '2.5rem',
  },
  detailsHeading: {
    fontSize: '1.1rem',
    fontWeight: 800,
    marginBottom: '1.5rem',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
}

// Inline CSS overrides for responsiveness simulation in About
const localAboutStyleSheet = document.createElement("style")
localAboutStyleSheet.innerText = `
  @media (max-width: 991px) {
    .intro-container {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
    }
    .philosophy-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    .member-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 2rem !important;
    }
    .member-card {
      padding: 2rem !important;
      gap: 2rem !important;
    }
  }
`
document.head.appendChild(localAboutStyleSheet)
