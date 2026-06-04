import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';

// Stub data - normally fetched from an API or CMS
const getPostData = (id) => {
  const posts = {
    '1': {
      title: 'Groundbreaking at Tshishushuru Village: A New Era for Lwamondo',
      date: 'May 12, 2026',
      author: 'Corporate Comms',
      image: '/blog_construction.png',
      content: `
        <p>The dawn of a new era has arrived in Lwamondo. Yesterday marked the official groundbreaking ceremony for the Tshishushuru Village Lifestyle Shopping Centre, an ambitious mixed-use project spearheaded by Rashed Investments.</p>
        <p>In attendance were prominent traditional leaders, municipal authorities, and community members who celebrated the commencement of earthworks. This development represents more than just commercial retail; it is a profound investment into rural infrastructure.</p>
        <h2>Local Job Creation</h2>
        <p>As part of our commitment to community upliftment, the preliminary construction phase has already employed over 200 local residents. These workers are receiving on-site training in various disciplines, including masonry, site safety, and heavy machinery operation.</p>
        <p>"We are not just building a mall; we are building human capacity," remarked CEO Ndivhuwo Khangale during his keynote address.</p>
      `
    },
    '2': {
      title: 'Integrating Solar Grids in Rural Developments',
      date: 'April 28, 2026',
      author: 'Vhahangwele Khangale',
      image: '/blog_solar.png',
      content: `
        <p>As South Africa continues to navigate energy challenges, property developers must innovate to ensure their commercial structures remain viable and functional regardless of national grid stability.</p>
        <p>At Rashed Investments, our Technical Directorate has engineered a comprehensive 1.5MW photovoltaic (PV) solar system integrated directly into the architectural blueprints of our flagship projects.</p>
        <h2>Sustainability First</h2>
        <p>This localized grid not only powers essential services—such as grocery refrigeration and emergency clinic lighting—but also significantly reduces the carbon footprint of our commercial footprint.</p>
        <p>Furthermore, excess energy generated during peak sunlight hours is stored in industrial-grade battery banks, ensuring 24-hour operational uptime for our anchor tenants and the 24-hour filling station on site.</p>
      `
    },
    '3': {
      title: 'Community First: Launching the Artisan Training Program',
      date: 'April 10, 2026',
      author: 'Monica Khangale',
      image: '/blog_artisan.png',
      content: `
        <p>True broad-based empowerment occurs when communities are equipped with tangible, marketable skills. In partnership with local TVET colleges, Rashed Investments has officially launched the Community Artisan Training Program.</p>
        <p>Our first cohort of 50 youths has begun an intensive 12-month program covering essential construction skills: electrical wiring, plumbing, and bricklaying.</p>
        <h2>Building the Future</h2>
        <p>What sets this program apart is the immediate practical application. Trainees are deployed to our active construction sites, earning a stipend while accumulating crucial practical hours required for their trade certifications.</p>
        <p>Through our CSI foundation, we aim to double this intake by next year, ensuring that the legacy of our developments is carried forward by the skilled hands of the community itself.</p>
      `
    }
  };
  return posts[id];
};

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostData(id);

  if (!post) {
    return (
      <div style={styles.page} className="container">
        <h1 style={{color: 'white', marginTop: '120px'}}>Post not found</h1>
        <Link to="/blog" style={styles.backLink}><ArrowLeft size={16}/> Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Helmet>
        <title>{post.title} | Rashed Investments Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      {/* Hero Image */}
      <div style={{...styles.heroImage, backgroundImage: `url(${post.image})`}}>
        <div style={styles.heroOverlay}></div>
      </div>

      <div className="container" style={styles.contentContainer}>
        <div className="glass-panel" style={styles.articleCard}>
          <Link to="/blog" style={styles.backLink}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <h1 style={styles.title}>{post.title}</h1>
          
          <div style={styles.meta}>
            <div style={styles.metaItem}>
              <Calendar size={16} color="var(--accent-gold)" />
              <span>{post.date}</span>
            </div>
            <div style={styles.metaItem}>
              <User size={16} color="var(--accent-gold)" />
              <span>{post.author}</span>
            </div>
          </div>

          <div 
            style={styles.bodyContent} 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh',
    paddingBottom: '6rem',
  },
  heroImage: {
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    marginTop: '-80px', // Pull up behind transparent nav
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(15,18,23,0.35) 0%, rgba(15,18,23,1) 100%)',
  },
  contentContainer: {
    maxWidth: '850px',
    margin: '0 auto',
    marginTop: '-100px', // Pull content up over the hero gradient
    position: 'relative',
    zIndex: 10,
  },
  articleCard: {
    padding: '4rem',
    borderRadius: '24px',
    border: '1px solid var(--border-gold)',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontWeight: 600,
    marginBottom: '2rem',
    transition: 'color 0.2s ease',
    ':hover': {
      color: 'var(--accent-gold)'
    }
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 900,
    fontFamily: 'var(--font-display)',
    color: '#fff',
    lineHeight: 1.2,
    marginBottom: '1.5rem',
  },
  meta: {
    display: 'flex',
    gap: '2rem',
    paddingBottom: '2rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  bodyContent: {
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
    fontSize: '1.1rem',
  }
};

// Global styles for blog content formatting
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .blog-content p {
      margin-bottom: 1.5rem;
    }
    .blog-content h2 {
      color: #fff;
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 800;
      margin: 2.5rem 0 1rem 0;
    }
    @media (max-width: 768px) {
      .blog-content {
        font-size: 1rem;
      }
      .articleCard {
        padding: 2rem !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}

