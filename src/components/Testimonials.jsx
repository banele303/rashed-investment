import React from 'react';

const testimonials = [
  {
    name: 'Sipho Ndlovu',
    role: 'Community Leader',
    quote: 'Rashed’s projects have transformed our village, providing reliable electricity and clean water.'
  },
  {
    name: 'Thandiwe Mahlangu',
    role: 'Local Entrepreneur',
    quote: 'Thanks to the new commercial spaces, my small business finally has a modern storefront.'
  },
  {
    name: 'Kabelo Mthembu',
    role: 'Youth Trainer',
    quote: 'The skills training program gave me the confidence to work as a mason and support my family.'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" style={styles.section}>
      <h2 style={styles.title}>What Our Community Says</h2>
      <div style={styles.cards}>
        {testimonials.map((t, idx) => (
          <div key={idx} style={styles.card} className="glass-panel">
            <p style={styles.quote}>“{t.quote}”</p>
            <p style={styles.author}>— {t.name}, <span style={styles.role}>{t.role}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 0',
    background: 'var(--bg-secondary)',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: 'var(--accent-gold)'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    justifyItems: 'center'
  },
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    maxWidth: '300px',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(5px)'
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: '0.75rem',
    color: '#fff'
  },
  author: {
    fontWeight: 600,
    color: '#fff'
  },
  role: {
    fontWeight: 400,
    color: 'var(--text-secondary)'
  }
};
