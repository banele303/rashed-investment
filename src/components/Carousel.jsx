import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: '/extracted_images/image_2.png',
    title: 'Retail Shopping Centre Layout',
    sub: 'Main architectural floor plan — Lwamondo, Limpopo',
  },
  {
    src: '/extracted_images/image_3.png',
    title: 'Centre Front Elevation',
    sub: 'Engineering render of the street-facing facade',
  },
  {
    src: '/extracted_images/image_17.png',
    title: 'Lifestyle Complex 3D Render',
    sub: 'Visualisation of the stand-alone lounge and retail wings',
  },
  {
    src: '/extracted_images/image_14.png',
    title: 'Site Master Plan',
    sub: 'Full-site zoning and infrastructure layout overview',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCurrent((idx + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div style={styles.wrapper}>
      {/* Slide image */}
      <div style={styles.slideBox}>
        <img
          key={current}
          src={slides[current].src}
          alt={slides[current].title}
          style={{
            ...styles.image,
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.6s ease',
          }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
          }}
        />

        {/* Gradient overlay */}
        <div style={styles.gradientOverlay}></div>

        {/* Caption */}
        <div style={styles.caption}>
          <h3 style={styles.captionTitle}>{slides[current].title}</h3>
          <p style={styles.captionSub}>{slides[current].sub}</p>
        </div>

        {/* Prev / Next */}
        <button style={{ ...styles.navBtn, left: '1.5rem' }} onClick={() => goTo(current - 1)}>
          <ChevronLeft size={24} />
        </button>
        <button style={{ ...styles.navBtn, right: '1.5rem' }} onClick={() => goTo(current + 1)}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div style={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            style={{
              ...styles.dot,
              background: idx === current ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)',
              width:  idx === current ? '28px' : '10px',
              boxShadow: idx === current ? '0 0 8px var(--accent-gold)' : 'none',
            }}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.06)',
    boxShadow: '0 25px 50px -15px rgba(0,0,0,0.7)',
    background: 'var(--bg-tertiary)',
  },
  slideBox: {
    position: 'relative',
    width: '100%',
    height: '480px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(7,9,14,0.92) 0%, rgba(7,9,14,0.1) 60%)',
  },
  caption: {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    right: '8rem',
    zIndex: 2,
  },
  captionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '0.35rem',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
  },
  captionSub: {
    fontSize: '0.92rem',
    color: 'var(--text-secondary)',
  },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'background 0.2s ease',
    zIndex: 3,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1.25rem',
  },
  dot: {
    height: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.35s ease',
  },
};
