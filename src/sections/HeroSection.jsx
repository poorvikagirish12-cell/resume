import React from 'react';

const HeroSection = () => {
  return (
    <section className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fade-up-element" style={{ maxWidth: '900px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', 
          lineHeight: 1.1, 
          marginBottom: '1.5rem',
          color: 'var(--text-main)',
          fontWeight: 600,
          letterSpacing: '-0.02em'
        }}>
          Hi, I'm Poorvika G.<br />
          <span className="gradient-text">Full Stack</span> & <span className="gradient-text">Machine Learning</span><br />
          Engineering Student.
        </h1>
        
        <p className="fade-up-element" style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.3rem', 
          marginTop: '1.5rem', 
          maxWidth: '600px',
          fontWeight: 500,
          lineHeight: 1.6
        }}>
          Aspiring Google Student Ambassador bridging the gap between academia and industry with intelligent, scalable solutions.
        </p>

        <div className="fade-up-element" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          <a href="mailto:poorvikagouda15@gmail.com" style={{ 
            padding: '1rem 2rem', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'var(--color-10)',
            color: 'white',
            fontWeight: 600,
            transition: 'transform 0.2s',
            boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.3)'
          }}>
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/poorvika-g-048081377" target="_blank" className="bento-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', fontWeight: 600 }}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/poorvikagirish12-cell" target="_blank" className="bento-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px', fontWeight: 600 }}>
            💻 GitHub
          </a>
        </div>
        
        <div className="fade-up-element" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📞 +91 9606124399</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📍 Hassan, Karnataka, India</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
