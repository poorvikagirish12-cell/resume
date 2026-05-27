import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Text Reveal Animation for Bio
    const words = textRef.current.querySelectorAll('.reveal-word');
    gsap.fromTo(words, 
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section className="section container fade-up-element">
      <div className="split-layout">
        
        {/* Left Side: Photo */}
        <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
          <div className="bento-card" style={{ padding: 0, height: '100%', width: '100%', position: 'absolute', overflow: 'hidden' }}>
            <img 
              src="/profile.jpg" 
              alt="Poorvika G" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' }}
            />
          </div>
        </div>

        {/* Right Side: Bio & Education */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="accent-text fade-up-element" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>About Me</h2>
          
          <div ref={textRef} style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '2.5rem', fontWeight: 500, lineHeight: 1.4 }}>
            {"Motivated 6th-semester AI and ML engineering student with a strong foundation in full-stack web development. I build intelligent solutions that bridge the gap between academia and industry.".split(' ').map((word, i) => (
              <span key={i} className="reveal-word" style={{ display: 'inline-block', marginRight: '0.4rem' }}>{word}</span>
            ))}
          </div>

          <div className="fade-up-element bento-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Education Timeline</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--color-10)', fontSize: '0.85rem', fontWeight: 700 }}>2023 - 2027 (6th Sem)</span>
              <h4 style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>B.E. Computer Science (AI & ML)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>NAVKIS College Of Engineering, Hassan</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--color-10)', fontSize: '0.85rem', fontWeight: 700 }}>2023 | 91.10%</span>
              <h4 style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>Senior Secondary (XII), Science</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Student PU College, Hassan</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
