import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Groundbreaking at Tshishushuru Village: A New Era for Lwamondo',
      excerpt: 'Rashed Investments has officially commenced preliminary earthworks for the highly anticipated Lifestyle Shopping Centre, bringing over 200 immediate local jobs.',
      date: 'May 12, 2026',
      author: 'Corporate Comms',
      image: '/blog_construction.png'
    },
    {
      id: 2,
      title: 'Integrating Solar Grids in Rural Developments',
      excerpt: 'How our engineering team is addressing load shedding by incorporating 1.5MW photovoltaic systems into the core infrastructure of our commercial builds.',
      date: 'April 28, 2026',
      author: 'Vhahangwele Khangale',
      image: '/blog_solar.png'
    },
    {
      id: 3,
      title: 'Community First: Launching the Artisan Training Program',
      excerpt: 'We are proud to announce the first cohort of 50 local youths entering our certified masonry and electrical artisan skills program.',
      date: 'April 10, 2026',
      author: 'Monica Khangale',
      image: '/blog_artisan.png'
    }
  ];

  return (
    <div style={styles.page}>
      <Helmet>
        <title>News & Insights | Rashed Investments</title>
        <meta name="description" content="Latest news, project updates, and insights from Rashed Investments." />
      </Helmet>

      <section style={styles.headerSection}>
        <div className="container" style={styles.headerContainer}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-tag-green">Company Updates</span>
            <h1 className="section-title">News & Insights</h1>
            <p style={styles.headerDesc}>
              Stay informed with our latest project milestones, community initiatives, and thought leadership in sustainable property development.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={styles.blogSection}>
        <div className="container">
          <div style={styles.grid}>
            {posts.map((post, idx) => (
              <motion.article 
                key={post.id} 
                className="glass-panel"
                style={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${post.id}`} style={styles.imageLink}>
                  <div style={styles.imageWrapper}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={styles.image}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </div>
                </Link>
                <div style={styles.content}>
                  <div style={styles.meta}>
                    <div style={styles.metaItem}>
                      <Calendar size={14} color="var(--accent-primary)" />
                      <span>{post.date}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <User size={14} color="var(--accent-primary)" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} style={styles.titleLink}>
                    <h3 style={styles.title}>{post.title}</h3>
                  </Link>
                  <p style={styles.excerpt}>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} style={styles.readMore}>
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
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
    background: 'radial-gradient(circle at 50% 0%, rgba(82, 183, 136, 0.08) 0%, transparent 60%)',
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
  blogSection: {
    padding: '5rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
  },
  imageLink: {
    display: 'block',
  },
  imageWrapper: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  content: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  meta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },
  titleLink: {
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#fff',
    fontFamily: 'var(--font-display)',
    marginBottom: '1rem',
    lineHeight: 1.4,
    transition: 'color 0.2s ease',
  },
  excerpt: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  readMore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--accent-primary)',
    fontWeight: 700,
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'gap 0.2s ease',
  }
};

// Global hover styles for Blog
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .glass-panel:hover .image-wrapper img {
      transform: scale(1.05);
    }
    .title-link:hover h3 {
      color: var(--accent-primary) !important;
    }
    .read-more:hover {
      gap: 0.8rem !important;
    }
  `;
  document.head.appendChild(styleEl);
}
