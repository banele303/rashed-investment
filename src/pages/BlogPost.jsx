import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

// Stub data - normally fetched from an API or CMS
const getPostData = (id) => {
  const posts = {
    '1': {
      title: 'Groundbreaking at Tshishushuru Village: A New Era for Lwamondo',
      date: 'May 12, 2026',
      author: 'Corporate Comms',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
      content: `
        <p class="lead">The dawn of a new era has arrived in Lwamondo. Yesterday marked the official groundbreaking ceremony for the Tshishushuru Village Lifestyle Shopping Centre, an ambitious mixed-use project spearheaded by Rashed Investments.</p>
        
        <p>In attendance were prominent traditional leaders, municipal authorities, and community members who celebrated the commencement of earthworks. This development represents more than just commercial retail; it is a profound investment into rural infrastructure, bringing world-class amenities to historically underserved regions.</p>
        
        <div class="content-image-wrapper">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop" alt="Architectural rendering of the new development" class="content-image" />
          <span class="image-caption">Fig 1. Preliminary architectural rendering of the central atrium.</span>
        </div>

        <h2>Local Job Creation & Economic Impact</h2>
        <p>As part of our commitment to community upliftment, the preliminary construction phase has already employed over 200 local residents. These workers are receiving on-site training in various disciplines, including masonry, site safety, and heavy machinery operation. This initiative is expected to inject over R50 million into the local economy during the first year alone.</p>
        
        <blockquote class="editorial-quote">
          "We are not just building a mall; we are building human capacity. True wealth is generated when we empower our communities with the skills and resources to sustain themselves long after the scaffolding comes down."
          <cite>— Ndivhuwo Khangale, CEO</cite>
        </blockquote>

        <p>Our socioeconomic framework mandates that at least 40% of all procurement must be sourced from local SMMEs (Small, Medium, and Micro Enterprises). We have partnered with regional suppliers for structural steel, cement, and logistical services, ensuring the economic multiplier effect is felt deeply within Lwamondo and surrounding municipalities.</p>

        <div class="stats-grid">
          <div class="stat-box">
            <span class="stat-number">200+</span>
            <span class="stat-label">Local Jobs Created</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">R50m</span>
            <span class="stat-label">Economic Injection</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">40%</span>
            <span class="stat-label">SMME Procurement</span>
          </div>
        </div>

        <h2>Sustainable Design Principles</h2>
        <p>The Tshishushuru Village development integrates state-of-the-art sustainability measures. From passive cooling architectures that minimize HVAC reliance to integrated rainwater harvesting systems capable of storing 100,000 liters, the project sets a new benchmark for eco-conscious commercial development in rural areas.</p>
      `
    },
    '2': {
      title: 'Integrating Solar Grids in Rural Developments',
      date: 'April 28, 2026',
      author: 'Vhahangwele Khangale',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
      content: `
        <p class="lead">As South Africa continues to navigate energy challenges, property developers must innovate to ensure their commercial structures remain viable and functional regardless of national grid stability.</p>
        <p>At Rashed Investments, our Technical Directorate has engineered a comprehensive 1.5MW photovoltaic (PV) solar system integrated directly into the architectural blueprints of our flagship projects. This is not an afterthought, but a core tenet of our design philosophy.</p>
        
        <div class="content-image-wrapper">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop" alt="Solar grid integration rendering" class="content-image" />
          <span class="image-caption">Fig 1. Rooftop solar array integrated into the building's aesthetic.</span>
        </div>

        <h2>Sustainability First</h2>
        <p>This localized grid not only powers essential services—such as grocery refrigeration and emergency clinic lighting—but also significantly reduces the carbon footprint of our commercial footprint.</p>
        <p>Furthermore, excess energy generated during peak sunlight hours is stored in industrial-grade battery banks, ensuring 24-hour operational uptime for our anchor tenants and the 24-hour filling station on site.</p>
      `
    },
    '3': {
      title: 'Community First: Launching the Artisan Training Program',
      date: 'April 10, 2026',
      author: 'Monica Khangale',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
      content: `
        <p class="lead">True broad-based empowerment occurs when communities are equipped with tangible, marketable skills. In partnership with local TVET colleges, Rashed Investments has officially launched the Community Artisan Training Program.</p>
        <p>Our first cohort of 50 youths has begun an intensive 12-month program covering essential construction skills: electrical wiring, plumbing, and bricklaying.</p>
        <h2>Building the Future</h2>
        <p>What sets this program apart is the immediate practical application. Trainees are deployed to our active construction sites, earning a stipend while accumulating crucial practical hours required for their trade certifications.</p>
        <p>Through our CSI foundation, we aim to double this intake by next year, ensuring that the legacy of our developments is carried forward by the skilled hands of the community itself.</p>
      `
    }
  };
  return posts[id] || posts['1'];
};

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostData(id);

  if (!post) {
    return (
      <div style={styles.page} className="container">
        <h1 style={{color: 'var(--text-primary)', marginTop: '120px'}}>Post not found</h1>
        <Link to="/blog" style={styles.backLink}><ArrowLeft size={16}/> Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Helmet>
        <title>{post.title} | Rashed Investments</title>
        <meta name="description" content={post.title} />
      </Helmet>

      {/* Massive Immersive Hero Banner */}
      <div style={{...styles.heroImage, backgroundImage: `url(${post.image})`}}>
        <div style={styles.heroOverlay}></div>
        <div className="container" style={styles.heroContent}>
          <Link to="/blog" style={styles.backLinkHero}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div style={styles.heroMeta}>
            <span style={styles.heroMetaTag}>Insight</span>
            <span style={styles.heroMetaDivider}>•</span>
            <span style={styles.heroMetaText}>{post.date}</span>
          </div>
          <h1 style={styles.heroTitle}>{post.title}</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={styles.contentContainer}>
        <div style={styles.articleLayout}>
          
          {/* Left Sidebar Actions */}
          <div style={styles.sidebarActions}>
            <div style={styles.authorBox}>
              <div style={styles.authorAvatar}>
                <User size={20} color="var(--bg-tertiary)" />
              </div>
              <div>
                <div style={styles.authorLabel}>Written by</div>
                <div style={styles.authorName}>{post.author}</div>
              </div>
            </div>
            
            <div style={styles.readTimeBox}>
              <Clock size={16} color="var(--accent-primary)" />
              <span>{post.readTime}</span>
            </div>

            <div style={styles.actionButtons}>
              <button style={styles.iconBtn} aria-label="Share article">
                <Share2 size={18} />
              </button>
              <button style={styles.iconBtn} aria-label="Bookmark article">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

          {/* Right Article Body */}
          <div style={styles.articleBody}>
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-tertiary)',
    minHeight: '100vh',
    paddingBottom: '8rem',
  },
  heroImage: {
    width: '100%',
    height: '75vh',
    minHeight: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '4rem',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    width: '100%',
  },
  backLinkHero: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: 500,
    marginBottom: '3rem',
    transition: 'color 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.85rem',
  },
  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  heroMetaTag: {
    backgroundColor: 'var(--accent-primary)',
    color: 'var(--bg-tertiary)',
    padding: '0.3rem 1rem',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  heroMetaDivider: {
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
  },
  heroMetaText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    fontWeight: 500,
    fontFamily: 'monospace',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 900,
    fontFamily: 'var(--font-display)',
    color: 'var(--text-primary)',
    lineHeight: 1.1,
    maxWidth: '900px',
    letterSpacing: '-1px',
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '4rem',
  },
  articleLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '4rem',
  },
  sidebarActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '2rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: '3rem',
  },
  authorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  authorAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.2rem',
  },
  authorName: {
    color: 'var(--text-primary)',
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  readTimeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    fontWeight: 500,
  },
  actionButtons: {
    display: 'flex',
    gap: '1rem',
  },
  iconBtn: {
    background: 'var(--bg-secondary)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-primary)',
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  articleBody: {
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
  }
};

// Global styles for premium editorial formatting
if (typeof document !== 'undefined') {
  const styleId = 'blog-editorial-styles';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.innerHTML = \`
      .blog-content {
        color: var(--text-secondary);
        line-height: 1.9;
        font-size: 1.25rem;
        font-family: 'Georgia', serif;
      }
      .blog-content p {
        margin-bottom: 2rem;
      }
      .blog-content .lead {
        font-size: 1.5rem;
        line-height: 1.6;
        color: var(--text-primary);
        font-weight: 400;
        margin-bottom: 3rem;
      }
      .blog-content .lead::first-letter {
        font-size: 4rem;
        line-height: 0.8;
        float: left;
        margin-right: 0.75rem;
        margin-top: 0.5rem;
        font-weight: 900;
        color: var(--accent-primary);
        font-family: var(--font-display), sans-serif;
      }
      .blog-content h2 {
        color: var(--text-primary);
        font-family: var(--font-display), sans-serif;
        font-size: 2.2rem;
        font-weight: 800;
        margin: 4rem 0 1.5rem 0;
        letter-spacing: -0.5px;
      }
      .content-image-wrapper {
        margin: 4rem 0;
        width: 100%;
      }
      .content-image {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
      .image-caption {
        display: block;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: rgba(255,255,255,0.5);
        font-family: sans-serif;
        text-align: center;
        font-style: italic;
      }
      .editorial-quote {
        margin: 4rem 0;
        padding: 3rem;
        background: var(--bg-secondary);
        border-left: 4px solid var(--accent-primary);
        border-radius: 0 16px 16px 0;
      }
      .editorial-quote {
        font-size: 1.4rem;
        line-height: 1.6;
        color: var(--text-primary);
        font-style: italic;
        font-weight: 500;
      }
      .editorial-quote cite {
        display: block;
        margin-top: 1.5rem;
        font-size: 1rem;
        color: var(--accent-primary);
        font-weight: 700;
        font-style: normal;
        font-family: sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 4rem 0;
        padding: 3rem 0;
        border-top: 1px solid rgba(255,255,255,0.1);
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      .stat-box {
        text-align: center;
      }
      .stat-number {
        display: block;
        font-size: 3.5rem;
        font-weight: 900;
        color: var(--accent-primary);
        font-family: var(--font-display), sans-serif;
        margin-bottom: 0.5rem;
        line-height: 1;
      }
      .stat-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: sans-serif;
        font-weight: 600;
      }
      
      @media (min-width: 1024px) {
        .articleLayout {
          grid-template-columns: 250px 1fr;
          gap: 6rem;
        }
        .sidebarActions {
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 2.5rem;
          padding-bottom: 0;
          border-bottom: none;
          position: sticky;
          top: 120px;
          height: max-content;
        }
        .authorBox {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      @media (max-width: 768px) {
        .blog-content {
          font-size: 1.1rem;
        }
        .blog-content .lead {
          font-size: 1.25rem;
        }
        .blog-content h2 {
          font-size: 1.8rem;
        }
        .heroTitle {
          font-size: 2.5rem;
        }
      }
    \`;
    document.head.appendChild(styleEl);
  }
}
;
}

