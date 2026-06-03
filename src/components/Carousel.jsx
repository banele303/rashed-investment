import React, { useState, useEffect } from 'react';

const images = [
  '/carousel1.png',
  '/carousel2.png',
  // Add more images here if needed
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-wrapper" style={styles.wrapper}>
      <div className="carousel-slide" style={styles.slide}>
        <img src={images[current]} alt={`Slide ${current + 1}`} style={styles.image} />
      </div>
      <div className="carousel-dots" style={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            style={idx === current ? styles.activeDot : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    maxHeight: '500px',
    overflow: 'hidden',
    margin: '2rem 0',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
  },
  slide: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.8s ease-in-out',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  dots: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
  },
  activeDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'var(--accent-gold)',
    cursor: 'pointer',
  },
};
