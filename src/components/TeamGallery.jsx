import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Ndivhuwo Khangale',
    role: 'Executive Director',
    image: '/dad.png',
    bio: 'Ndivhuwo leads the strategic vision of Rashed Investments, driving sustainable development and strategic partnerships across rural and urban sectors.',
    email: 'ndivhuwo@rashed.co.za'
  },
  {
    id: 2,
    name: 'Vhahangwele Khangale',
    role: 'Technical Director',
    image: '/small daddy.png',
    bio: 'Overseeing all engineering and construction phases, Vhahangwele ensures every project meets premium quality and strict safety standards.',
    email: 'vhahangwele@rashed.co.za'
  },
  {
    id: 3,
    name: 'Monica Khangale',
    role: 'Marketing and Communications Executive',
    image: '/lady.jpeg',
    bio: 'Monica manages daily operations, community stakeholder engagement, and the integration of CSI programs into core business activities.',
    email: 'monica@rashed.co.za'
  }
];

export default function TeamGallery() {
  return (
    <section className="team-gallery-section" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span className="section-tag-green">Our Leadership Team</span>
          <h2 className="section-title">Driving Vision & Values</h2>
          <p className="section-subtitle">
            Meet the executive board leading Rashed Investments in transforming communities through sustainable property development.
          </p>
        </div>

        <div className="responsive-grid team-card-grid" style={styles.grid}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="glass-panel"
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div style={styles.imageWrapper}>
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}, ${member.role}`} 
                  style={styles.image}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div style={styles.overlay}>
                  <a href={`mailto:${member.email}`} style={styles.iconLink} aria-label={`Email ${member.name}`}>
                    <Mail size={18} />
                  </a>
                  <a href="#" style={styles.iconLink} aria-label={`${member.name} on LinkedIn`}>
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div style={styles.info}>
                <h3 style={styles.name}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
                <div style={styles.divider}></div>
                <p style={styles.bio}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    background: 'var(--bg-tertiary)',
    borderTop: '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    padding: 0,
    overflow: 'hidden',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    height: '340px',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem',
    background: 'linear-gradient(to top, rgba(15,18,23,0.80) 0%, transparent 100%)',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  iconLink: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'var(--transition-fast)',
  },
  info: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  name: {
    fontSize: '1.4rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '0.25rem',
  },
  role: {
    fontSize: '0.9rem',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  divider: {
    width: '40px',
    height: '2px',
    background: 'var(--accent-primary)',
    margin: '1.25rem 0',
  },
  bio: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: 'var(--text-secondary)',
  }
};

// Global styles for interactions
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .team-gallery-section .glass-panel .image-wrapper:hover .overlay {
      opacity: 1 !important;
    }
    .team-gallery-section .glass-panel:hover img {
      transform: scale(1.05);
    }
    .team-gallery-section .icon-link:hover {
      background: var(--accent-primary) !important;
      color: #000 !important;
      border-color: var(--accent-primary) !important;
    }
  `;
  document.head.appendChild(styleEl);
}
