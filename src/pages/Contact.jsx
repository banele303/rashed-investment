import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, Building2, Linkedin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', interest: 'development', message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', interest: 'development', message: '' })
    }, 5000)
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const partners = [
    { src: '/extracted_images/image_30.png',  label: 'Partner 1' },
    { src: '/extracted_images/image_31.png',  label: 'Partner 2' },
    { src: '/extracted_images/image_32.jpeg', label: 'Partner 3' },
    { src: '/extracted_images/image_33.png',  label: 'Partner 4' },
    { src: '/extracted_images/image_38.png',  label: 'Partner 5' },
  ]

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Contact Us | Rashed Investments</title>
        <meta name="description" content="Get in touch with Rashed Investments for property development partnerships, joint ventures, and sustainable infrastructure consultations." />
      </Helmet>

      {/* Header */}
      <section style={styles.headerSection}>
        <div className="container animate-fade-in" style={styles.headerContainer}>
          <div className="glow-badge" style={{ marginBottom: '1.5rem' }}>
            <span>Get in Touch</span>
          </div>
          <h1 style={styles.headerTitle}>
            Connect With Our <span className="text-green-gradient">Property Specialists</span>
          </h1>
          <p style={styles.headerDesc}>
            Partner with Rashed Investments to build sustainable, premium commercial structures. Fill out the form below or reach out directly to our executive directors.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section style={styles.contactSection}>
        <div className="container" style={styles.contactGrid}>

          {/* Info column */}
          <div style={styles.infoCol}>
            <h2 style={styles.infoHeading} className="text-green-gradient">Direct Contact Channels</h2>
            <p style={styles.infoText}>
              Our executive board is directly accessible for strategic partnerships, land development proposals, joint-venture structures, and community investment programs.
            </p>

            {/* Director cards */}
            {[
              { name: 'Ndivhuwo Khangale', role: 'Executive Director & CEO', phone: '072 254 9448', email: 'ndivhuwo@rashed.co.za', img: '/director_ndivhuwo.png' },
              { name: 'Vhahangwele Khangale', role: 'Technical Director', phone: '067 285 5095', email: 'vhahangwele@rashed.co.za', img: '/director_vhahangwele.png' },
            ].map((d, idx) => (
              <div key={idx} className="glass-panel" style={styles.directorCard}>
                <img src={d.img} alt={d.name} style={styles.directorAvatar}
                  onError={(e) => { e.target.style.display = 'none'; }} />
                <div style={styles.directorInfo}>
                  <h3 style={styles.directorName}>{d.name}</h3>
                  <p style={styles.directorRole}>{d.role}</p>
                  <a href={`tel:${d.phone.replace(/\\s/g,'')}`} style={styles.contactLink}>
                    <Phone size={14} color="var(--accent-primary)" />
                    <span>{d.phone}</span>
                  </a>
                  <a href={`mailto:${d.email}`} style={styles.contactLink}>
                    <Mail size={14} color="var(--accent-primary)" />
                    <span>{d.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Office */}
            <div className="glass-panel" style={styles.officeCard}>
              <div style={styles.officeRow}>
                <Building2 size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                <div>
                  <h4 style={styles.officeHeading}>Corporate Headquarters</h4>
                  <p style={styles.officeText}>
                    538 Furrow Road, Feather Falls Estate<br />
                    Homes Haven, Krugersdorp, 1739<br />
                    South Africa
                  </p>
                </div>
              </div>
              <div style={styles.officeRow}>
                <Mail size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: 3 }} />
                <div>
                  <h4 style={styles.officeHeading}>General Inquiries</h4>
                  <a href="mailto:info@rashed.co.za" style={styles.mailLink}>info@rashed.co.za</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div style={styles.formCol}>
            <div className="glass-panel" style={styles.formCard}>
              {isSubmitted ? (
                <div style={styles.successBox}>
                  <CheckCircle2 size={64} color="var(--accent-primary)" />
                  <h3 style={styles.successTitle}>Inquiry Sent!</h3>
                  <p style={styles.successText}>
                    Thank you for contacting Rashed Investments. Our directors will review your inquiry and be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={styles.formTitle} className="text-green-gradient">Send an Inquiry</h2>
                  <p style={styles.formSub}>We respond within 24 business hours.</p>

                  <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formRow}>
                      <div className="premium-form-group" style={{ flex: 1 }}>
                        <label htmlFor="name" className="premium-label">Full Name</label>
                        <input id="name" type="text" name="name" required value={formData.name}
                          onChange={handleChange} className="premium-input" placeholder="e.g. John Dlamini" />
                      </div>
                      <div className="premium-form-group" style={{ flex: 1 }}>
                        <label htmlFor="email" className="premium-label">Email Address</label>
                        <input id="email" type="email" name="email" required value={formData.email}
                          onChange={handleChange} className="premium-input" placeholder="e.g. john@example.com" />
                      </div>
                    </div>

                    <div style={styles.formRow}>
                      <div className="premium-form-group" style={{ flex: 1 }}>
                        <label htmlFor="phone" className="premium-label">Phone Number</label>
                        <input id="phone" type="tel" name="phone" value={formData.phone}
                          onChange={handleChange} className="premium-input" placeholder="+27 72 123 4567" />
                      </div>
                      <div className="premium-form-group" style={{ flex: 1 }}>
                        <label htmlFor="interest" className="premium-label">Area of Interest</label>
                        <select id="interest" name="interest" value={formData.interest}
                          onChange={handleChange} className="premium-input" style={styles.selectInput}>
                          <option value="development">Property Development</option>
                          <option value="partnership">Joint-Venture Partnership</option>
                          <option value="energy">Renewable Energy Solutions</option>
                          <option value="water">Water & Sanitation</option>
                          <option value="csr">Community CSI Projects</option>
                          <option value="other">General Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <div className="premium-form-group">
                      <label htmlFor="message" className="premium-label">Inquiry Details</label>
                      <textarea id="message" name="message" required value={formData.message}
                        onChange={handleChange} rows={5} className="premium-input"
                        placeholder="Describe your development proposal, partnership interest, or project scope…" />
                    </div>

                    <button type="submit" className="btn-premium btn-primary" style={styles.submitBtn}>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={styles.partnersSection}>
        <div className="container">
          <div style={styles.partnersHeader}>
            <span className="section-tag">Strategic Alliances</span>
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              We collaborate with municipalities, construction specialists, financial institutions, and private investors to execute large-scale rural land development projects.
            </p>
          </div>
          <div style={styles.partnersGrid}>
            {partners.map((p, idx) => (
              <div key={idx} style={styles.partnerLogoBox}>
                <img
                  src={p.src}
                  alt={p.label}
                  style={styles.partnerLogo}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: { backgroundColor: 'var(--bg-secondary)', overflowX: 'hidden' },

  /* Header */
  headerSection: {
    background: 'radial-gradient(circle at 10% 90%, rgba(156,180,146,0.04) 0%, transparent 60%)',
    textAlign: 'center',
    paddingTop: '7rem',
    paddingBottom: '5rem',
  },
  headerContainer: { maxWidth: '800px', margin: '0 auto' },
  headerTitle: { fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' },
  headerDesc: { fontSize: '1.2rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginTop: '1rem' },

  /* Contact grid */
  contactSection: { padding: '0 0 8rem 0' },
  contactGrid: { display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '5rem', alignItems: 'flex-start' },

  /* Info column */
  infoCol: { display: 'flex', flexDirection: 'column', gap: '2rem' },
  infoHeading: { fontSize: '1.8rem', fontWeight: 800 },
  infoText: { fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)' },

  directorCard: {
    padding: '1.75rem',
    borderRadius: '16px',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  directorAvatar: {
    width: '70px', height: '70px', borderRadius: '12px',
    objectFit: 'cover',
    border: '2px solid var(--border-accent)',
    flexShrink: 0,
  },
  directorInfo: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  directorName: { fontSize: '1.2rem', fontWeight: 800, color: '#FFF' },
  directorRole: {
    fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem',
  },
  contactLink: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    fontSize: '0.92rem', color: 'var(--text-secondary)', transition: 'var(--transition-fast)',
  },

  officeCard: { padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  officeRow: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  officeHeading: { fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem', fontWeight: 600 },
  officeText: { fontSize: '0.98rem', lineHeight: '1.65', color: 'var(--text-secondary)' },
  mailLink: { color: 'var(--accent-primary)', fontSize: '0.98rem', fontWeight: 600, textDecoration: 'underline' },

  /* Form */
  formCol: {},
  formCard: { padding: '3.5rem', borderRadius: '24px' },
  formTitle: { fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-display)' },
  formSub: { fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' },
  form: { display: 'flex', flexDirection: 'column' },
  formRow: { display: 'flex', gap: '1.25rem', flexWrap: 'wrap' },
  selectInput: {
    cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CB492' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.1rem',
    paddingRight: '3rem',
  },
  submitBtn: { marginTop: '1.5rem', width: '100%', padding: '1.2rem', fontSize: '1.05rem' },

  /* Success */
  successBox: { textAlign: 'center', padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' },
  successTitle: { fontSize: '1.9rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-display)' },
  successText: { fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '400px' },

  /* Partners */
  partnersSection: { background: 'var(--bg-tertiary)', borderTop: '1px solid rgba(255,255,255,0.02)', padding: '7rem 0' },
  partnersHeader: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' },
  partnersGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' },
  partnerLogoBox: {
    height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '1.25rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    transition: 'var(--transition-fast)',
  },
  partnerLogo: {
    maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
    filter: 'grayscale(1) brightness(1.1)', opacity: 0.55, transition: 'var(--transition-fast)',
  },
}

// Responsive overrides for Contact
const contactSheet = document.createElement('style')
contactSheet.innerText = `
  @media (max-width: 991px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
    .partners-grid { grid-template-columns: repeat(3, 1fr) !important; }
    .form-row { flex-direction: column !important; gap: 0 !important; }
  }
  @media (max-width: 600px) {
    .partners-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .testimonials-mini { grid-template-columns: 1fr 1fr !important; }
  }
  .partner-logo-box:hover .partner-logo { filter: grayscale(0) brightness(1) !important; opacity: 1 !important; }
`
document.head.appendChild(contactSheet)
