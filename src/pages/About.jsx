import React from 'react'
import { Award, Briefcase, GraduationCap, Linkedin, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function About() {
  const team = [
    {
      name: "Ndivhuwo Khangale",
      role: "Executive Director",
      image: "/dad.png",
      bio: "Seasoned serial entrepreneur, Business Development champion, and Marketing Communications Specialist with over 26 years of corporate leadership experience.",
      details: [
        "Former spokesperson for the South African Minister of Energy.",
        "Responsible for content development at Eskom for the Chairman and CEO.",
        "Former Content Manager for the SABC and founding journalist for the government magazine Vuk'unzele.",
        "Managing Director of RPGenX (Water, Sanitation, and Renewable Energy).",
        "Honours degree in Journalism and Media Studies from Wits University."
      ]
    },
    {
      name: "Vhahangwele Khangale",
      role: "Technical Director",
      image: "/lady.jpeg",
      bio: "Registered professional Architectural Technologist with 11 years post-registration experience and over 15 years in built environment consulting and construction management.",
      details: [
        "MD of UBK Projects and UBKRothoma Projects (architecture, engineering, and construction).",
        "Spent 8 years in Transnet SOC's Capital Projects division as Engineering Manager and Project Lead.",
        "Executed strategic capital investment projects for Transnet Operating Divisions.",
        "Graduate of Wits Business School (WBS) Junior Managers Program.",
        "Diploma in Architecture from Tshwane University of Technology (TUT)."
      ]
    },
    {
      name: "Ompha Monica Khangale",
      role: "Marketing Communications Executive",
      image: "/small%20daddy.png", // Updated team image
      bio: "Dynamic and creatively-driven Marketing and Communications professional with 8+ years of experience across corporate, public, and entertainment industries.",
      details: [
        "Collaborated with large-scale SA productions (Idols SA, Big Brother Mzansi, SAMA, Metro FM).",
        "Performer alongside Oscar-winning composer Hans Zimmer and Disney's Lebo M (Lion King).",
        "Led communications for the Murumba Cultural Parade with the Dept. of Sport, Arts & Culture.",
        "Owner and founder of Ralo Studio (multimedia entertainment business entity).",
        "Honours graduate in Theatre & Performance from Wits University."
      ]
    }
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>About Us | Rashed Investments</title>
        <meta name="description" content="Learn about Rashed Investments, a 100% Black-owned property development company advancing rural communities." />
      </Helmet>
      {/* Intro Hero */}
      <section style={styles.introSection}>
        <div className="container" style={styles.introContainer}>
          <div style={styles.introContent}>
            <span className="section-tag">Corporate Profile</span>
            <h1 className="section-title">
              Advancing Rural Communities Through <span className="text-gold-gradient">Socio-Economic Development</span>
            </h1>
            <p style={styles.introDesc}>
              Registered in 2022, Rashed Investments is a 100% Black-owned property development company specializing in rural and traditional leader-owned land. Our core mission is to reverse the trend of substandard rural developments and actively contribute towards restoring dignity in previously marginalized communities.
            </p>
          </div>
          <div style={styles.introVisual}>
            <div style={styles.panelCard} className="glass-panel">
              <h3 style={styles.panelTitle} className="text-gold-gradient">Our Core Focus</h3>
              <p style={styles.panelText}>
                We partner with traditional councils, government departments, and private financial organizations to construct infrastructure that supports essential basic services, including water preservation, sustainable sanitation, and solar grid installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section style={styles.philosophySection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">The Foundation of Our Business</h2>
          </div>
          <div style={styles.philosophyGrid}>
            <div className="glass-panel" style={styles.philCard}>
              <h3 style={styles.philTitle}>100% Black-Owned</h3>
              <p>Specialized in property and infrastructure consulting. Actively driving black economic empowerment across architectural and civil engineering projects.</p>
            </div>
            <div className="glass-panel" style={styles.philCard}>
              <h3 style={styles.philTitle}>Skills Development</h3>
              <p>We transfer engineering and artisan skills to local communities where we construct developments, ensuring local youth gain employment.</p>
            </div>
            <div className="glass-panel" style={styles.philCard}>
              <h3 style={styles.philTitle}>Eco-Friendly Designs</h3>
              <p>Every commercial facility we build integrates water treatment facilities, rain harvesting, and solar power plants to support conservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={styles.teamSection}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag">Executive Board</span>
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle">
              With a combined wealth of over 50 years of experience, our directors have planned, coordinated, and constructed multi-million-rand commercial and residential developments.
            </p>
          </div>

          <div style={styles.teamList}>
            {team.map((member, idx) => (
              <div key={idx} className="glass-panel" style={styles.memberCard}>
                <div style={styles.memberHeader}>
                  <div style={styles.imgWrapper}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      style={styles.memberImg}
                      onError={(e) => {
                        e.target.src = idx === 2 
                          ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                          : "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  </div>
                  <div style={styles.memberTitles}>
                    <h3 style={styles.memberName}>{member.name}</h3>
                    <p style={styles.memberRole}>{member.role}</p>
                    <p style={styles.memberBio}>{member.bio}</p>
                  </div>
                </div>
                
                <div style={styles.memberDetails}>
                  <h4 style={styles.detailsHeading}>Key Professional Highlights</h4>
                  <ul style={styles.detailsList}>
                    {member.details.map((detail, dIdx) => (
                      <li key={dIdx} style={styles.detailItem}>
                        <div style={styles.bullet}></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
  introSection: {
    background: 'radial-gradient(circle at 10% 20%, rgba(197, 168, 128, 0.05) 0%, transparent 50%)',
  },
  introContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  introContent: {},
  introDesc: {
    fontSize: '1.15rem',
    marginTop: '1.5rem',
  },
  introVisual: {},
  panelCard: {
    padding: '3rem',
    borderRadius: '16px',
    border: '1px solid var(--border-gold)',
  },
  panelTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  panelText: {
    fontSize: '1rem',
  },
  philosophySection: {
    background: 'var(--bg-secondary)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  philosophyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  philCard: {
    padding: '2.5rem',
    borderRadius: '16px',
  },
  philTitle: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: 'var(--accent-gold)',
  },
  teamSection: {},
  teamList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  },
  memberCard: {
    padding: '3rem',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  memberHeader: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
  },
  imgWrapper: {
    width: '180px',
    height: '180px',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '2px solid var(--accent-gold)',
    boxShadow: '0 10px 25px -10px var(--accent-glow)',
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
    fontSize: '2rem',
    fontWeight: 800,
    marginBottom: '0.25rem',
  },
  memberRole: {
    fontSize: '1.1rem',
    color: 'var(--accent-gold)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
  },
  memberBio: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '750px',
  },
  memberDetails: {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '2rem',
  },
  detailsHeading: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '1.25rem',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  detailsList: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  detailItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
  },
  bullet: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent-gold)',
    marginTop: '9px',
    flexShrink: 0,
  },
  /* Media queries simulated inline */
  '@media (max-width: 991px)': {
    introContainer: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    philosophyGrid: {
      gridTemplateColumns: '1fr',
    },
    memberHeader: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.5rem',
    }
  }
}
window.addEventListener('resize', () => {
  // Mobile responsive overrides handled in global layout styles
})
