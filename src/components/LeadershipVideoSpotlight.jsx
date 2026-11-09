import React, { useRef, useState, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Landmark, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LeadershipVideoSpotlight() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const toggleFullscreen = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 0
    setCurrentTime(cur)
    setProgress(dur > 0 ? (cur / dur) * 100 : 0)
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration || 0)
  }

  const handleSeek = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percent = Math.max(0, Math.min(1, clickX / rect.width))
    const newTime = percent * (videoRef.current.duration || 0)
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
    setProgress(percent * 100)
  }

  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00'
    const mins = Math.floor(secs / 60)
    const rem = Math.floor(secs % 60)
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`
  }

  return (
    <section className="leadership-video-section" style={styles.section}>
      <div className="container" style={styles.container}>
        <div className="responsive-two-col video-spotlight-layout" style={styles.grid}>
          
          {/* Left Column: Context & Strategic Story */}
          <div style={styles.contentCol}>
            <div className="glow-badge" style={styles.badge}>
              <Landmark size={15} style={{ marginRight: '8px' }} color="var(--accent-primary)" />
              <span>Leadership in Action</span>
            </div>

            <h2 className="section-title" style={styles.title}>
              Limpopo Provincial Government <span className="text-green-gradient">Investment Summit</span>
            </h2>

            <p style={styles.leadText}>
              Watch Rashed Investment Group’s executive board—<strong>Executive Director Ndivhuwo Khangale</strong> and <strong>Technical Director Vhahangwele Khangale</strong>—actively participating in high-level provincial deliberations alongside the Limpopo Provincial Government.
            </p>

            <p style={styles.descriptionText}>
              As a 100% Black-owned developer aligned with South Africa’s National Development Plan (NDP 2030), we engage directly with provincial government leaders, municipal stakeholders, and traditional councils to accelerate turnkey infrastructure, renewable energy, and sustainable retail developments on communal land.
            </p>

            {/* Highlights List */}
            <div style={styles.highlightsContainer}>
              <div style={styles.highlightItem}>
                <div style={styles.highlightIconBox}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" />
                </div>
                <div>
                  <h4 style={styles.highlightHeading}>Provincial Government Alignment</h4>
                  <p style={styles.highlightDesc}>Collaborating with the Limpopo administration to attract and deploy capital directly into rural growth nodes.</p>
                </div>
              </div>

              <div style={styles.highlightItem}>
                <div style={styles.highlightIconBox}>
                  <ShieldCheck size={18} color="var(--accent-green)" />
                </div>
                <div>
                  <h4 style={styles.highlightHeading}>Executive Leadership on the Ground</h4>
                  <p style={styles.highlightDesc}>Direct hands-on governance ensuring our developments meet strict environmental, engineering, and socio-economic targets.</p>
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="responsive-button-row" style={styles.ctaRow}>
              <Link to="/about" className="btn-premium btn-primary" style={styles.ctaBtn}>
                <span>Meet the Leadership Team</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-premium btn-secondary" style={styles.ctaBtn}>
                <span>View Flagship Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Custom Vertical Video Player */}
          <div style={styles.mediaCol}>
            <div 
              style={styles.playerWrapper}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Outer Decorative Glow */}
              <div style={styles.playerGlow}></div>

              {/* Video Device/Card Frame */}
              <div 
                style={styles.cardFrame}
                className="glass-panel"
                onClick={togglePlay}
                role="button"
                tabIndex={0}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    togglePlay()
                  }
                }}
              >
                {/* Official Tag Overlay */}
                <div style={styles.videoHeaderTag}>
                  <span style={styles.livePulse}></span>
                  <span style={styles.videoTagText}>Limpopo Summit • Official Coverage</span>
                </div>

                {/* The Video Element */}
                <video
                  ref={videoRef}
                  src="/rashed-leadership-limpopo-summit.mp4"
                  poster="/video-limpopo-summit-poster.jpg"
                  style={styles.video}
                  playsInline
                  muted={isMuted}
                  loop
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Big Center Play Button Overlay (when paused or initially loaded) */}
                {(!isPlaying || isHovering) && (
                  <div style={{
                    ...styles.centerPlayOverlay,
                    opacity: !isPlaying ? 1 : (isHovering ? 0.9 : 0),
                  }}>
                    <button 
                      type="button"
                      style={styles.centerPlayButton}
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                      }}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? (
                        <Pause size={28} color="#070908" />
                      ) : (
                        <Play size={28} color="#070908" style={{ marginLeft: '4px' }} />
                      )}
                    </button>
                    {!isPlaying && (
                      <span style={styles.centerPlayLabel}>
                        Click to watch coverage (1:19)
                      </span>
                    )}
                  </div>
                )}

                {/* Bottom Custom Controls Bar */}
                <div 
                  style={{
                    ...styles.controlsBar,
                    opacity: isHovering || !isPlaying ? 1 : 0,
                    pointerEvents: isHovering || !isPlaying ? 'auto' : 'none',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Progress Scrubber */}
                  <div 
                    style={styles.scrubberContainer}
                    onClick={handleSeek}
                  >
                    <div style={styles.scrubberBg}>
                      <div 
                        style={{
                          ...styles.scrubberFill,
                          width: `${progress}%`
                        }}
                      />
                    </div>
                  </div>

                  {/* Controls Row */}
                  <div style={styles.controlsRow}>
                    <div style={styles.controlsLeft}>
                      <button 
                        type="button"
                        style={styles.controlIconBtn}
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      </button>

                      <span style={styles.timeDisplay}>
                        {formatTime(currentTime)} / {formatTime(duration || 79)}
                      </span>
                    </div>

                    <div style={styles.controlsRight}>
                      <button 
                        type="button"
                        style={styles.controlIconBtn}
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                        title={isMuted ? 'Unmute sound' : 'Mute sound'}
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>

                      <button 
                        type="button"
                        style={styles.controlIconBtn}
                        onClick={toggleFullscreen}
                        aria-label="Toggle Fullscreen"
                        title="Fullscreen"
                      >
                        <Maximize size={18} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Caption Bar */}
              <div style={styles.captionBar}>
                <p style={styles.captionText}>
                  <strong>Executive Board:</strong> Ndivhuwo Khangale &amp; Vhahangwele Khangale representing Rashed Investment Group.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '7rem 0',
    position: 'relative',
    background: 'radial-gradient(circle at 85% 30%, rgba(156, 180, 146, 0.08) 0%, transparent 55%), var(--bg-secondary)',
    borderTop: '1px solid rgba(156, 180, 146, 0.12)',
    borderBottom: '1px solid rgba(156, 180, 146, 0.12)',
    overflow: 'hidden',
  },
  container: {
    position: 'relative',
    zIndex: 2,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: '3.5rem',
    alignItems: 'center',
  },
  contentCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1.25rem',
    width: 'fit-content',
  },
  title: {
    fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    color: '#FFFFFF',
  },
  leadText: {
    fontSize: '1.12rem',
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.92)',
    marginBottom: '1rem',
  },
  descriptionText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
  },
  highlightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '2.5rem',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem 1.25rem',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(156, 180, 146, 0.15)',
  },
  highlightIconBox: {
    marginTop: '2px',
    flexShrink: 0,
  },
  highlightHeading: {
    fontSize: '1.02rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '0.25rem',
  },
  highlightDesc: {
    fontSize: '0.92rem',
    lineHeight: 1.5,
    color: 'rgba(255, 255, 255, 0.72)',
    margin: 0,
  },
  ctaRow: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
  },
  mediaCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '360px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playerGlow: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    right: '5%',
    bottom: '10%',
    background: 'radial-gradient(circle, rgba(156, 180, 146, 0.25) 0%, transparent 70%)',
    filter: 'blur(40px)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  cardFrame: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    aspectRatio: '9 / 16',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid rgba(156, 180, 146, 0.35)',
    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 35px rgba(156, 180, 146, 0.15)',
    backgroundColor: '#070908',
    cursor: 'pointer',
    userSelect: 'none',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  videoHeaderTag: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    right: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    background: 'rgba(7, 9, 8, 0.85)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(156, 180, 146, 0.3)',
    zIndex: 3,
    pointerEvents: 'none',
  },
  livePulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    boxShadow: '0 0 10px var(--accent-primary)',
  },
  videoTagText: {
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: '0.02em',
  },
  centerPlayOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle, rgba(7, 9, 8, 0.35) 0%, rgba(7, 9, 8, 0.7) 100%)',
    zIndex: 2,
    transition: 'all 0.3s ease',
  },
  centerPlayButton: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(156, 180, 146, 0.6)',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  },
  centerPlayLabel: {
    marginTop: '1rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#FFFFFF',
    padding: '6px 14px',
    borderRadius: '16px',
    background: 'rgba(7, 9, 8, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
  },
  controlsBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    background: 'linear-gradient(to top, rgba(7, 9, 8, 0.95) 0%, rgba(7, 9, 8, 0.7) 60%, transparent 100%)',
    zIndex: 3,
    transition: 'opacity 0.25s ease',
  },
  scrubberContainer: {
    width: '100%',
    padding: '6px 0',
    cursor: 'pointer',
  },
  scrubberBg: {
    height: '4px',
    borderRadius: '2px',
    background: 'rgba(255, 255, 255, 0.25)',
    overflow: 'hidden',
    position: 'relative',
  },
  scrubberFill: {
    height: '100%',
    background: 'var(--accent-primary)',
    borderRadius: '2px',
    transition: 'width 0.1s linear',
  },
  controlsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '6px',
  },
  controlsLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  controlsRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  controlIconBtn: {
    background: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    color: '#FFFFFF',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.2s ease, transform 0.15s ease',
  },
  timeDisplay: {
    fontSize: '0.78rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
  },
  captionBar: {
    marginTop: '1rem',
    textAlign: 'center',
    width: '100%',
    padding: '0 0.5rem',
  },
  captionText: {
    fontSize: '0.82rem',
    lineHeight: 1.45,
    color: 'rgba(255, 255, 255, 0.65)',
    margin: 0,
  },
}
