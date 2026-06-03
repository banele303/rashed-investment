import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'development',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submit
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'development',
        message: ''
      })
    }, 4000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const partners = [
    { src: "/extracted_images/image_30.png" },
    { src: "/extracted_images/image_31.png" },
    { src: "/extracted_images/image_32.jpeg" },
    { src: "/extracted_images/image_33.png" },
    { src: "/extracted_images/image_38.png" }
  ]

  return (
    <div style={styles.page}>
      {/* Contact Header */}
      <section style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <span className="section-tag">Get in Touch</span>
          <h1 style={styles.headerTitle}>Connect With Our <span className="text-gold-gradient">Property Specialists</span></h1>
          <p style={styles.headerDesc}>
            Partner with Rashed Investments to build sustainable, premium commercial structures. Fill out the contact form below or reach out to our executive directors directly.
          </p>
        </div>
      </section>

      {/* Main Form and Info */}
      <section style={styles.contactDetailsSection}>
        <div className="container" style={styles.contactContainer}>
          {/* Info Side */}
          <div style={styles.infoCol}>
            <h2 style={styles.sectionHeading} className="text-gold-gradient">Direct Contact Channels</h2>
            <p style={styles.infoText}>
              Our executive board is directly accessible for strategic partnerships, land development proposals, and corporate inquiries.
            </p>

            <div style={styles.infoCards}>
              <div className="glass-panel" style={styles.infoCard}>
                <h3 style={styles.directorName}>Ndivhuwo Khangale</h3>
                <p style={styles.directorRole}>Executive Director</p>
                <div style={styles.contactRow}>
                  <Phone size={16} color="var(--accent-gold)" />
                  <a href="tel:0722549448">072 254 9448</a>
                </div>
                <div style={styles.contactRow}>
                  <Mail size={16} color="var(--accent-gold)" />
                  <a href="mailto:ndivhuwo@rashed.co.za">ndivhuwo@rashed.co.za</a>
                </div>
              </div>

              <div className="glass-panel" style={styles.infoCard}>
                <h3 style={styles.directorName}>Vhahangwele Khangale</h3>
                <p style={styles.directorRole}>Technical Director</p>
                <div style={styles.contactRow}>
                  <Phone size={16} color="var(--accent-gold)" />
                  <a href="tel:0672855095">067 285 5095</a>
                </div>
                <div style={styles.contactRow}>
                  <Mail size={16} color="var(--accent-gold)" />
                  <a href="mailto:vhahangwele@rashed.co.za">vhahangwele@rashed.co.za</a>
                </div>
              </div>
            </div>

            <div style={styles.officeDetails} className="glass-panel">
              <h3 style={styles.officeHeading}>Headquarters</h3>
              <div style={styles.officeRow}>
                <MapPin size={18} color="var(--accent-gold)" style={styles.alignTop} />
                <span>
                  538 Furrow Road, Feather Falls Estate<br />
                  Homes Haven, Krugersdorp, 1739<br />
                  South Africa
                </span>
              </div>
              <div style={styles.officeRow}>
                <Mail size={18} color="var(--accent-gold)" />
                <a href="mailto:info@rashed.co.za">info@rashed.co.za</a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={styles.formCol}>
            <div className="glass-panel animate-fade-in" style={styles.formCard}>
              <h2 style={styles.formTitle} className="text-gold-gradient">Inquiry Form</h2>
              <p style={styles.formSubtitle}>Send us a message and we will respond within 24 hours.</p>

              {isSubmitted ? (
                <div style={styles.successWrapper}>
                  <CheckCircle2 size={64} color="var(--accent-gold)" style={styles.successIcon} />
                  <h3 style={styles.successTitle}>Inquiry Sent</h3>
                  <p style={styles.successText}>Thank you for contacting Rashed Investments. Our directors will review your inquiry and get in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div className="premium-form-group">
                    <label htmlFor="name" className="premium-label">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                      className="premium-input" 
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="premium-form-group">
                    <label htmlFor="email" className="premium-label">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange}
                      className="premium-input" 
                      placeholder="e.g. john@example.com"
                    />
                  </div>

                  <div className="premium-form-group">
                    <label htmlFor="phone" className="premium-label">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="premium-input" 
                      placeholder="e.g. +27 72 123 4567"
                    />
                  </div>

                  <div className="premium-form-group">
                    <label htmlFor="interest" className="premium-label">Area of Interest</label>
                    <select 
                      id="interest" 
                      name="interest" 
                      value={formData.interest} 
                      onChange={handleChange}
                      className="premium-input"
                      style={styles.selectInput}
                    >
                      <option value="development">Property Development</option>
                      <option value="partnership">Joint-Venture Partnership</option>
                      <option value="energy">Renewable Energy Solutions</option>
                      <option value="csr">Community CSI Projects</option>
                      <option value="other">General Inquiries</option>
                    </select>
                  </div>

                  <div className="premium-form-group">
                    <label htmlFor="message" className="premium-label">Inquiry Details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      value={formData.message} 
                      onChange={handleChange}
                      rows={5} 
                      className="premium-input" 
                      placeholder="Describe your development proposal or questions..."
                    />
                  </div>

                  <button type="submit" className="btn-premium btn-primary" style={styles.submitBtn}>
                    <span>Send Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={styles.partnersSection}>
        <div className="container">
          <div style={styles.partnersHeader}>
            <span className="section-tag">Partnerships</span>
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              We collaborate with municipalities, construction specialists, and financial providers to execute large-scale land developments.
            </p>
          </div>

          <div style={styles.partnersGrid}>
            {partners.map((partner, idx) => (
              <div key={idx} className="partner-logo-container">
                <img 
                  src={partner.src} 
                  alt={`Partner ${idx + 1}`} 
                  className="partner-logo-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
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
  page: {
    backgroundColor: 'var(--bg-primary)',
  },
  headerSection: {
    background: 'radial-gradient(circle at 10% 90%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
    textAlign: 'center',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  headerContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerTitle: {
    fontSize: '3rem',
    fontWeight: 800,
  },
  headerDesc: {
    fontSize: '1.2rem',
    marginTop: '1.5rem',
  },
  contactDetailsSection: {},
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '5rem',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  sectionHeading: {
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  infoText: {
    fontSize: '1.1rem',
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoCard: {
    padding: '2rem',
    borderRadius: '12px',
  },
  directorName: {
    fontSize: '1.35rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '0.25rem',
  },
  directorRole: {
    fontSize: '0.9rem',
    color: 'var(--accent-gold)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1.25rem',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.75rem',
  },
  officeDetails: {
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  officeHeading: {
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#FFFFFF',
  },
  officeRow: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.25rem',
  },
  alignTop: {
    marginTop: '4px',
  },
  formCol: {},
  formCard: {
    padding: '3rem',
    borderRadius: '20px',
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: 800,
    marginBottom: '0.5rem',
  },
  formSubtitle: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectInput: {
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1.25rem center',
    backgroundSize: '1.25rem',
    paddingRight: '3rem',
  },
  submitBtn: {
    marginTop: '1.5rem',
    width: '100%',
    padding: '1.1rem',
  },
  successWrapper: {
    textAlign: 'center',
    padding: '4rem 0',
  },
  successIcon: {
    marginBottom: '1.5rem',
    animation: 'fadeInUp 0.6s ease',
  },
  successTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '1rem',
  },
  successText: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  partnersSection: {
    background: 'var(--bg-secondary)',
  },
  partnersHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  partnersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1.5rem',
  },
  /* Responsive simulation */
  '@media (max-width: 900px)': {
    contactContainer: {
      gridTemplateColumns: '1fr',
      gap: '3rem',
    },
    partnersGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  }
}
