import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Headphones, LifeBuoy, BookOpen, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Support() {
  const supportChannels = [
    {
      icon: Headphones,
      title: 'Direct Assistance',
      desc: 'Call our dedicated support line for immediate assistance regarding active project tenders or lease agreements.',
      action: 'Call +27 72 254 9448',
      link: 'tel:0722549448'
    },
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      desc: 'For non-urgent matters, partnerships, or media requests, please reach out via our general email channel.',
      action: 'Email Support',
      link: 'mailto:info@rashed.co.za'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      desc: 'Browse our frequently asked questions to learn more about our development processes and CSI programs.',
      action: 'View FAQ',
      link: '/faq'
    },
    {
      icon: LifeBuoy,
      title: 'Investor Relations',
      desc: 'For financial stakeholders and joint-venture partners, please contact our executive director directly.',
      action: 'Contact Executive',
      link: 'mailto:ndivhuwo@rashed.co.za'
    }
  ];

  return (
    <div style={styles.page}>
      <Helmet>
        <title>Support | Rashed Investments</title>
        <meta name="description" content="Get support and assistance from the Rashed Investments team." />
      </Helmet>

      <section style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-tag">Client Services</span>
            <h1 className="section-title">How Can We Help?</h1>
            <p style={styles.headerDesc}>
              Whether you're a prospective tenant, a community member, or an investor, our team is ready to provide the assistance you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div className="container">
          <div style={styles.grid}>
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="glass-panel" 
                  style={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div style={styles.iconWrapper}>
                    <Icon size={24} color="var(--accent-gold)" />
                  </div>
                  <h3 style={styles.title}>{channel.title}</h3>
                  <p style={styles.desc}>{channel.desc}</p>
                  
                  {channel.link.startsWith('/') ? (
                    <Link to={channel.link} style={styles.actionLink}>
                      {channel.action}
                    </Link>
                  ) : (
                    <a href={channel.link} style={styles.actionLink}>
                      {channel.action}
                    </a>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh',
  },
  headerSection: {
    background: 'radial-gradient(circle at 10% 10%, rgba(212,175,55,0.06) 0%, transparent 60%)',
    padding: '7rem 0 5rem 0',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  headerContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  headerDesc: {
    fontSize: '1.15rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    marginTop: '1.5rem',
  },
  contentSection: {
    padding: '5rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '3rem 2rem',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid var(--border-gold)',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(212, 175, 55, 0.08)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '1rem',
    fontFamily: 'var(--font-display)',
  },
  desc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  actionLink: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.05)',
    color: 'var(--accent-gold)',
    fontWeight: 600,
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.2s ease',
  }
};
