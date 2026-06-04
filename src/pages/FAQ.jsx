import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      q: 'What makes Rashed Investments different from other developers?',
      a: 'We are a 100% Black-owned company focused specifically on developing rural and traditional leader-owned land into modern, sustainable commercial centers, bringing essential services directly to underserved communities.'
    },
    {
      q: 'Do you only develop retail shopping centers?',
      a: 'While lifestyle shopping centers are our flagship projects, we also develop integrated transport hubs, residential accommodation blocks, water sanitation plants, and renewable energy grids.'
    },
    {
      q: 'How does your CSI integration work?',
      a: 'A percentage of retail lease proceeds from our developments is funneled into our CSI Foundation, funding academic scholarships, support for destitute families, and local artisan training.'
    },
    {
      q: 'Are your buildings eco-friendly?',
      a: 'Yes, our smart developments incorporate photovoltaic solar grids and private water purification systems to minimize reliance on strained national infrastructure.'
    }
  ];

  return (
    <div style={styles.page}>
      <Helmet>
        <title>FAQ | Rashed Investments</title>
        <meta name="description" content="Frequently Asked Questions about Rashed Investments property development and corporate philosophy." />
      </Helmet>

      <section style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-tag">Help Center</span>
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p style={styles.headerDesc}>
              Find answers to the most common questions about our development processes, community impact, and investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={styles.faqSection}>
        <div className="container" style={styles.faqContainer}>
          <div style={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="glass-panel" 
                style={styles.faqCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 style={styles.question}>{faq.q}</h3>
                <p style={styles.answer}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-secondary)',
    minHeight: '100vh',
  },
  headerSection: {
    background: 'radial-gradient(circle at 50% 100%, rgba(156,180,146,0.05) 0%, transparent 70%)',
    padding: '6rem 0',
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
  faqSection: {
    padding: '5rem 0',
  },
  faqContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  faqGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  faqCard: {
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid var(--border-accent)',
  },
  question: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '1rem',
    fontFamily: 'var(--font-display)',
  },
  answer: {
    fontSize: '1.05rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
  }
};
