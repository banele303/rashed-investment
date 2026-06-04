import React, { useState } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/extracted_images/image_2.png',  title: 'Main Center Architectural Layout' },
  { src: '/extracted_images/image_3.png',  title: 'Shopping Center Front Elevation' },
  { src: '/extracted_images/image_14.png', title: 'Site Layout Master Plan' },
  { src: '/extracted_images/image_17.png', title: 'Lifestyle Complex 3D Render' },
  { src: '/extracted_images/image_25.png', title: 'Geotechnical Survey Map' },
  { src: '/extracted_images/image_37.png', title: 'Zoning & Section Drawing' },
  { src: '/extracted_images/image_7.png',  title: 'Infrastructure Layout Overview' },
  { src: '/extracted_images/image_21.png', title: 'Site Development Sketch' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); };
  const nextImage = (e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % galleryImages.length); };

  return (
    <>
      <section style={styles.section}>
        <div className="container">
          <div style={styles.sectionHeader}>
            <span className="section-tag-green">Blueprint Gallery</span>
            <h2 className="section-title">Project Renders &amp; Layouts</h2>
            <p className="section-subtitle">
              Architectural blueprints, site surveys, and engineering renders extracted directly from
              the official Rashed Investments corporate planning portfolio.
            </p>
          </div>

          <div style={styles.grid}>
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                style={styles.card}
                className="glass-panel"
                onClick={() => openLightbox(idx)}
              >
                <div style={styles.imgWrapper}>
                  <img
                    src={img.src}
                    alt={img.title}
                    style={styles.img}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div style={styles.overlay}>
                    <div style={styles.overlayContent}>
                      <span style={styles.imgTitle}>{img.title}</span>
                      <div style={styles.zoomBtn}>
                        <Maximize2 size={14} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          {/* Close */}
          <button style={styles.closeBtn} onClick={closeLightbox}>
            <X size={24} />
          </button>

          {/* Prev */}
          <button style={{ ...styles.navBtn, left: '2rem' }} onClick={prevImage}>
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].title}
              style={styles.lightboxImg}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div style={styles.caption}>
              <h3 style={styles.captionTitle}>{galleryImages[lightboxIndex].title}</h3>
              <p style={styles.captionSub}>
                {lightboxIndex + 1} / {galleryImages.length} — Rashed Investments Technical Planning File
              </p>
            </div>
          </div>

          {/* Next */}
          <button style={{ ...styles.navBtn, right: '2rem' }} onClick={nextImage}>
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    background: 'var(--bg-secondary)',
    borderTop:    '1px solid rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.02)',
  },
  sectionHeader: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '240px',
    padding: 0,
  },
  imgWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem',
    background: 'linear-gradient(to top, rgba(7,9,14,0.95) 0%, transparent 100%)',
    opacity: 1,
    transition: 'opacity 0.3s ease',
  },
  overlayContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '1rem',
  },
  imgTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.98rem',
    color: '#fff',
    lineHeight: 1.3,
  },
  zoomBtn: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  /* Lightbox */
  lightbox: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(3, 4, 6, 0.97)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3000,
  },
  closeBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition-fast)',
    zIndex: 3001,
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'var(--transition-fast)',
    zIndex: 3001,
  },
  lightboxContent: {
    maxWidth: '90vw',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  lightboxImg: {
    maxWidth: '100%',
    maxHeight: '70vh',
    objectFit: 'contain',
    borderRadius: '12px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.1)',
    border: '1px solid rgba(255,255,255,0.07)',
  },
  caption: {
    textAlign: 'center',
  },
  captionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '0.4rem',
  },
  captionSub: {
    fontSize: '0.88rem',
    color: 'var(--text-muted)',
  },
};
