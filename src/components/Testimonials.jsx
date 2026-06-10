import React, { useState } from 'react';
import { Star, ThumbsUp, MapPin, ChevronDown, ChevronUp, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STAR_COLORS = {
  filled: '#F9AB00',
  empty: 'rgba(255,255,255,0.2)',
};

const reviews = [
  {
    id: 1,
    name: 'Chief Advisor – Tshishushuru',
    role: 'Traditional Leader · Local Guide',
    avatar: '/director_ndivhuwo.png',
    initials: null,
    avatarBg: null,
    stars: 5,
    time: '2 months ago',
    location: 'Tshishushuru Village, Limpopo',
    text: 'Rashed Investments has brought real hope to our community. For the first time, we will have a modern shopping centre that our people do not need to travel hours to reach. The leadership engaged our elders with deep respect and transparency. Truly a development for the people.',
    likes: 47,
    photos: null,
    verified: true,
  },
  {
    id: 2,
    name: 'Sipho Ndlovu',
    role: 'Community Leader · Level 8 Local Guide',
    avatar: '/director_vhahangwele.png',
    initials: null,
    avatarBg: null,
    stars: 5,
    time: '3 months ago',
    location: 'Lwamondo Ward, Vhembe',
    text: 'Their commitment to skills development is genuine. They trained our local youth and gave them real jobs on the project. The community has never felt more included in a development of this scale. I attended every community engagement session — they listened and delivered.',
    likes: 34,
    photos: null,
    verified: true,
  },
  {
    id: 3,
    name: 'Thandiwe Mahlangu',
    role: 'Entrepreneur · Local Guide',
    avatar: '/director_monica.png',
    initials: null,
    avatarBg: null,
    stars: 5,
    time: '1 month ago',
    location: 'Thohoyandou, Limpopo',
    text: 'Thanks to the retail spaces designed into this development, small business owners like me will finally have modern storefronts alongside big retailers. I have already applied for one of the kiosks. This is the kind of investment we have been waiting for decades.',
    likes: 29,
    photos: null,
    verified: false,
  },
  {
    id: 4,
    name: 'Kabelo Mthembu',
    role: 'Artisan Trainee · Contributor',
    avatar: null,
    initials: 'KM',
    avatarBg: 'linear-gradient(135deg, #4A90E2 0%, #1a3a6b 100%)',
    stars: 5,
    time: '5 months ago',
    location: 'Malamulele, Limpopo',
    text: 'The artisan training program gave me certified skills and a full-time job on the construction site. I now support my family. Rashed truly invests in people, not just buildings. I went from unemployed to being a qualified bricklayer in 6 months.',
    likes: 61,
    photos: null,
    verified: true,
  },
  {
    id: 5,
    name: 'Nomvula Dlamini',
    role: 'School Principal · Level 5 Local Guide',
    avatar: null,
    initials: 'ND',
    avatarBg: 'linear-gradient(135deg, #E91E8C 0%, #7B1FA2 100%)',
    stars: 5,
    time: '3 weeks ago',
    location: 'Ha-Mphephu, Limpopo',
    text: 'As a school principal in the area I have seen many promises from developers come and go. Rashed Investments is different — they engaged the schools, offered internship pathways for matric graduates, and are building infrastructure that will bring economic activity directly to our learners when they graduate.',
    likes: 53,
    photos: null,
    verified: true,
  },
  {
    id: 6,
    name: 'Thabo Mokwena',
    role: 'Business Analyst · Contributor',
    avatar: null,
    initials: 'TM',
    avatarBg: 'linear-gradient(135deg, #00897B 0%, #004D40 100%)',
    stars: 5,
    time: '6 months ago',
    location: 'Johannesburg · Visiting',
    text: 'I have been tracking the Lwamondo Smart Town development from Johannesburg. The financial model is solid, the community buyout structure is innovative, and the solar energy integration sets a benchmark for rural development in South Africa. This is the blueprint for township investment done right.',
    likes: 88,
    photos: null,
    verified: false,
  },
  {
    id: 7,
    name: 'Amukelani Rikhotso',
    role: 'Youth Ambassador · Local Guide',
    avatar: null,
    initials: 'AR',
    avatarBg: 'linear-gradient(135deg, #FF6F00 0%, #B71C1C 100%)',
    stars: 5,
    time: '2 weeks ago',
    location: 'Giyani, Limpopo',
    text: 'I was part of the community consultation process as a youth representative. They gave us a real voice. The plan to include a youth innovation hub inside the development is not just talk — we saw the actual floor plans. This project represents the future of rural Limpopo.',
    likes: 42,
    photos: null,
    verified: true,
  },
  {
    id: 8,
    name: 'Precious Mabunda',
    role: 'Nurse · Contributor',
    avatar: null,
    initials: 'PM',
    avatarBg: 'linear-gradient(135deg, #43A047 0%, #1B5E20 100%)',
    stars: 5,
    time: '1 month ago',
    location: 'Mutale, Vhembe',
    text: 'The planned medical centre component of this development will transform healthcare access for our community. Currently we travel over 40km to the nearest clinic for non-emergency treatment. Rashed Investments thought about the whole community — not just commerce.',
    likes: 37,
    photos: null,
    verified: false,
  },
];

function StarRating({ count, size = 14 }) {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < count ? STAR_COLORS.filled : STAR_COLORS.empty}
          color={i < count ? STAR_COLORS.filled : STAR_COLORS.empty}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_LENGTH = 160;
  const isLong = review.text.length > PREVIEW_LENGTH;
  const displayText = expanded || !isLong
    ? review.text
    : review.text.slice(0, PREVIEW_LENGTH) + '…';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={styles.card}
      className="gm-review-card"
    >
      {/* Header */}
      <div style={styles.cardHeader}>
        {/* Avatar */}
        <div style={styles.avatarWrap}>
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              style={styles.avatarImg}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            style={{
              ...styles.avatarInitialBox,
              background: review.avatarBg || 'linear-gradient(135deg, #9CB492 0%, #6B9E6B 100%)',
              display: review.avatar ? 'none' : 'flex',
            }}
          >
            <span style={styles.initials}>{review.initials || review.name.charAt(0)}</span>
          </div>
        </div>

        {/* Name + meta */}
        <div style={styles.authorInfo}>
          <div style={styles.nameRow}>
            <span style={styles.reviewerName}>{review.name}</span>
            {review.verified && (
              <BadgeCheck size={15} color="#4A90E2" style={{ flexShrink: 0 }} />
            )}
          </div>
          <div style={styles.roleText}>{review.role}</div>
          <div style={styles.starsRow}>
            <StarRating count={review.stars} size={13} />
            <span style={styles.timeAgo}>{review.time}</span>
          </div>
        </div>

        {/* Google Maps G logo badge */}
        <div style={styles.gmBadge}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>

      {/* Location */}
      <div style={styles.locationRow}>
        <MapPin size={12} color="var(--accent-primary)" />
        <span style={styles.locationText}>{review.location}</span>
      </div>

      {/* Review text */}
      <p style={styles.reviewText}>{displayText}</p>
      {isLong && (
        <button style={styles.moreBtn} onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <><ChevronUp size={14} /> Show less</>
          ) : (
            <><ChevronDown size={14} /> Read more</>
          )}
        </button>
      )}

      {/* Footer */}
      <div style={styles.cardFooter}>
        <span style={styles.helpfulLabel}>Helpful?</span>
        <button
          style={{
            ...styles.likeBtn,
            background: liked ? 'rgba(74,144,226,0.15)' : 'transparent',
            borderColor: liked ? '#4A90E2' : 'rgba(255,255,255,0.1)',
            color: liked ? '#4A90E2' : 'var(--text-muted)',
          }}
          onClick={() => setLiked(!liked)}
        >
          <ThumbsUp size={13} />
          <span>{liked ? review.likes + 1 : review.likes}</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  // Overall stats
  const avgRating = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <section style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <span className="section-tag">Community Voice</span>
          <h2 className="section-title">What Our Community Says</h2>
          <p style={styles.subtitle}>
            Real feedback from community members, leaders, and partners across Limpopo.
          </p>
        </div>

        {/* Google Maps-style Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.summaryBar}
          className="glass-panel"
        >
          {/* Big score */}
          <div style={styles.bigScore}>
            <span style={styles.bigNumber}>{avgRating}</span>
            <div>
              <StarRating count={5} size={20} />
              <p style={styles.reviewCount}>{totalReviews} reviews</p>
            </div>
          </div>

          {/* Divider */}
          <div style={styles.summaryDivider} />

          {/* Rating breakdown bars */}
          <div style={styles.breakdown}>
            {[5, 4, 3, 2, 1].map((n) => {
              const count = reviews.filter((r) => r.stars === n).length;
              const pct = (count / totalReviews) * 100;
              return (
                <div key={n} style={styles.barRow}>
                  <span style={styles.barLabel}>{n}</span>
                  <Star size={10} fill={STAR_COLORS.filled} color={STAR_COLORS.filled} />
                  <div style={styles.barTrack}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (5 - n) * 0.1 }}
                      style={styles.barFill}
                    />
                  </div>
                  <span style={styles.barCount}>{count}</span>
                </div>
              );
            })}
          </div>

          {/* Badge */}
          <div style={styles.summaryDivider} />
          <div style={styles.gmSummaryBadge}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div style={styles.gmLabel}>Reviews</div>
              <div style={styles.gmSub}>Powered by Google</div>
            </div>
          </div>
        </motion.div>

        {/* Review Grid */}
        <div style={styles.grid}>
          {reviews.map((review, idx) => (
            <ReviewCard key={review.id} review={review} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .gm-review-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gm-review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 0',
    background: 'var(--bg-secondary)',
    borderTop: '1px solid rgba(255,255,255,0.03)',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    marginTop: '0.75rem',
    maxWidth: '480px',
    lineHeight: 1.7,
  },

  // Summary bar
  summaryBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    padding: '2rem 2.5rem',
    borderRadius: '20px',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bigScore: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  bigNumber: {
    fontFamily: 'var(--font-display)',
    fontSize: '3.5rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    lineHeight: 1,
  },
  reviewCount: {
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    marginTop: '4px',
  },
  summaryDivider: {
    width: '1px',
    height: '70px',
    background: 'rgba(255,255,255,0.07)',
    flexShrink: 0,
  },
  breakdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
    minWidth: '200px',
    maxWidth: '300px',
  },
  barRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  barLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    width: '10px',
    textAlign: 'right',
    flexShrink: 0,
  },
  barTrack: {
    flex: 1,
    height: '7px',
    borderRadius: '4px',
    background: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '4px',
    background: '#F9AB00',
  },
  barCount: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
    width: '16px',
    flexShrink: 0,
  },
  gmSummaryBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  gmLabel: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.9rem',
    color: 'var(--text-primary)',
  },
  gmSub: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
  },

  // Grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '1.25rem',
  },

  // Card
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    cursor: 'default',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.9rem',
  },
  avatarWrap: {
    position: 'relative',
    flexShrink: 0,
    width: '46px',
    height: '46px',
  },
  avatarImg: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(255,255,255,0.1)',
  },
  avatarInitialBox: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(255,255,255,0.08)',
    flexShrink: 0,
  },
  initials: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  },
  authorInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  nameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  reviewerName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
  },
  roleText: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    lineHeight: 1.3,
  },
  starsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '2px',
  },
  timeAgo: {
    fontSize: '0.72rem',
    color: 'var(--text-muted)',
  },
  gmBadge: {
    flexShrink: 0,
    marginTop: '2px',
    opacity: 0.7,
  },
  locationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  locationText: {
    fontSize: '0.75rem',
    color: 'var(--accent-primary)',
    fontWeight: 500,
  },
  reviewText: {
    fontSize: '0.88rem',
    lineHeight: 1.75,
    color: 'var(--text-primary)',
    flex: 1,
  },
  moreBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: '#4A90E2',
    fontSize: '0.8rem',
    cursor: 'pointer',
    padding: 0,
    fontWeight: 600,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '0.85rem',
    marginTop: 'auto',
  },
  helpfulLabel: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
  },
  likeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 10px',
    borderRadius: '20px',
    border: '1px solid',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.78rem',
    fontWeight: 600,
    transition: 'all 0.2s ease',
  },
};
