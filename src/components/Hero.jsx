import React, { useRef, useEffect } from 'react';
import heroVideoMp4 from '../assets/hero-video.mp4';   // example import if bundling video
import heroVideoWebm from '../assets/hero-video.webm';
import heroPoster from '../assets/hero-poster.jpg';

const slides = [
  { type: 'video', sources: [{src: heroVideoWebm, type: 'video/webm'}, {src: heroVideoMp4, type: 'video/mp4'}], poster: heroPoster, alt: 'Wheat fields swaying (video)' },
  { type: 'image', src: 'assets/slide2.jpg', alt: 'Farmers inspecting wheat' },
  // ... additional slides
];

const Hero = () => {
  const videoRef = useRef(null);
  // Auto-play the video when it comes into view (for performance, we could use IntersectionObserver)
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const playVideo = () => {
      // Try to play when allowed
      videoEl.play().catch(err => {
        // Autoplay failed (perhaps due to not being in view or not muted)
        console.warn('Video autoplay failed, maybe not in view or browser policy.', err);
      });
    };
    // Use IntersectionObserver to play only when video is visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          playVideo();
          observer.unobserve(entry.target); // play once when visible
        }
      });
    }, { threshold: 0.5 });
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="hero">
      {/* Slide 1: Video */}
      <video 
        ref={videoRef}
        className="hero-video" 
        poster={heroPoster} 
        muted 
        loop 
        playsInline 
        preload="metadata"
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
        {/* Text fallback if video cannot play at all */}
        {`Your browser does not support the hero video.`}
      </video>
      {/* Overlay heading/tagline could go here */}
      <h2 className="hero-tagline">Empowering Wheat Farmers Worldwide</h2>

      {/* Carousel controls if multiple slides */}
      <div className="hero-controls">
        <button aria-label="Previous slide">‹</button>
        <button aria-label="Next slide">›</button>
      </div>
      <div className="hero-thumbnails">
        {slides.map((s, idx) => (
          <img 
            key={idx} 
            src={s.type === 'image' ? s.src : s.poster} 
            alt={s.alt} 
            className="hero-thumb" 
            /* onClick would set that slide active */
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
