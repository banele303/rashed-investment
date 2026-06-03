import React, { useState } from 'react';

const images = [
  '/carousel1.png',
  '/carousel2.png',
  '/dad.png',
  '/lady.jpeg',
  '/small daddy.png'
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="gallery" style={styles.section}>
      <h2 style={styles.title}>Project Gallery</h2>
      <div style={styles.grid}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            style={styles.img}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <img src={images[lightboxIndex]} alt="Enlarged" style={styles.lightboxImg} />
        </div>
      )}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    ':hover': { transform: 'scale(1.05)' }
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  lightboxImg: {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '12px'
  }
};
