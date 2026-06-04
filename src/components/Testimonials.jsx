import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chief Advisor – Tshishushuru Village',
    role: 'Traditional Leader Representative',
    quote: 'Rashed Investments has brought real hope to our community. For the first time, we will have a modern shopping centre that our people do not need to travel hours to reach.',
    stars: 5,
  },
  {
    name: 'Sipho Ndlovu',
    role: 'Community Leader, Lwamondo Ward',
    quote: 'Their commitment to skills development is genuine. They trained our local youth and gave them real jobs. The community has never felt more included in a development of this scale.',
    stars: 5,
  },
  {
    name: 'Thandiwe Mahlangu',
    role: 'Local Entrepreneur',
    quote: 'Thanks to the retail spaces being designed into this development, small business owners like me will finally have modern storefronts alongside the big retailers.',
    stars: 5,
  },
  {
    name: 'Kabelo Mthembu',
    role: 'Youth Artisan Trainee',
    quote: 'The artisan training program gave me certified skills and a job on the construction site. I now support my family. Rashed truly invests in people, not just buildings.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <span className="section-tag">Community Voice</span>
          <h2 className="section-title">What Our Communities Say</h2>
        </div>

        {/* Active card */}
        <div style={styles.cardWrapper}>
          <div className="glass-panel" style={styles.mainCard} key={active}>
            {/* Quote icon */}
            <div style={styles.quoteIcon}>
              <Quote size={32} color="var(--accent-gold)" />
            </div>

            {/* Stars */}
            <div style={styles.stars}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
              ))}
            </div>

            <p style={styles.quote}>"{t.quote}"</p>

            <div style={styles.author}>
              <div style={styles.authorAvatar}>
                <span style={styles.avatarInitial}>{t.name.charAt(0)}</span>
              </div>
              <div>
                <p style={styles.authorName}>{t.name}</p>
                <p style={styles.authorRole}>{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini cards / selectors */}
        <div style={styles.miniCards}>
          {testimonials.map((item, idx) => (
            <button
              key={idx}
              style={{
                ...styles.miniCard,
                borderColor: idx === active ? 'var(--accent-gold)' : 'var(--border-color)',
                background: idx === active ? 'rgba(212,175,55,0.06)' : 'rgba(13,16,23,0.4)',
              }}
              onClick={() => setActive(idx)}
            >
              <p style={styles.miniName}>{item.name}</p>
              <p style={styles.miniRole}>{item.role}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 0',
    background: 'var(--bg-primary)',
    borderTop: '1px solid rgba(255,255,255,0.02)',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  cardWrapper: {
    maxWidth: '820px',
    margin: '0 auto 3rem auto',
  },
  mainCard: {
    padding: '3.5rem',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    animation: 'fadeInUp 0.6s ease forwards',
  },
  quoteIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'rgba(212,175,55,0.08)',
    border: '1px solid var(--border-gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stars: {
    display: 'flex',
    gap: '4px',
  },
  quote: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 300,
    fontFamily: 'var(--font-display)',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '1.5rem',
    marginTop: '0.5rem',
  },
  authorAvatar: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B8860B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarInitial: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.4rem',
    color: '#000',
  },
  authorName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.05rem',
    color: '#FFFFFF',
    marginBottom: '0.15rem',
  },
  authorRole: {
    fontSize: '0.88rem',
    color: 'var(--accent-gold)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
  },
  miniCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    maxWidth: '820px',
    margin: '0 auto',
  },
  miniCard: {
    padding: '1.1rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'var(--transition-fast)',
  },
  miniName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '0.82rem',
    color: '#FFFFFF',
    marginBottom: '0.25rem',
    lineHeight: 1.3,
  },
  miniRole: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    lineHeight: 1.3,
  },
};
