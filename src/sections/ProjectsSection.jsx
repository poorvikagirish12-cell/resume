import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="section container fade-up-element">
      <h2 className="accent-text" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', textAlign: 'center' }}>Featured Projects</h2>
      
      {/* Light Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        
        {/* Massive 2-Column equivalent for EcoBreaker (Spans 12 cols on mobile, 8 on desktop) */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--color-10)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '16px' }}>🌿</div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: 0, color: 'white' }}>EcoBreaker</h3>
              <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Full-Stack Blogging Platform</span>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 500 }}>
            A dynamic, full-stack blogging application featuring a personalized content feed that adapts to user reading habits.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Django</span>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Python</span>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Tailwind</span>
          </div>
        </div>

        {/* AI Emergency Response */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 4' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🚑</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>AI Emergency Response</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            Real-time accident detection engine to improve emergency response times using OpenCV and YOLOv8/SSD.
          </p>
        </div>

        {/* Fake News Detection */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 6' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🛑</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Fake News Detection</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            Machine learning model designed to classify and identify fake news articles to mitigate digital misinformation.
          </p>
        </div>

        {/* Hackathon */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 6' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🏆</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Django Hackathon</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            3rd Prize Winner (Feb 2026). Collaborated in a fast-paced environment to brainstorm, design, and deploy a functional Django app.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
