import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="section container fade-up-element">
      <h2 className="accent-text" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', textAlign: 'center' }}>Experience & Skills</h2>
      
      <div className="split-layout reversed">
        
        {/* Left Side: Skills Bento */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div className="bento-card fade-up-element" style={{ background: 'var(--color-10)', color: 'white' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'white' }}>⚙️ Core Engineering</h4>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '0.5rem', fontWeight: 500 }}>Python (Django, FastAPI), TypeScript, RESTful APIs, System Architecture</p>
          </div>

          <div className="bento-card fade-up-element">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-main)' }}>🧠 AI & ML</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem', fontWeight: 500 }}>Computer Vision (OpenCV, YOLOv8), Data Analytics, Model Optimization</p>
          </div>

          <div className="bento-card fade-up-element">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--text-main)' }}>🛠 Tools & Infra</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem', fontWeight: 500 }}>AWS Cloud Foundations, Git/GitHub, Tailwind CSS, Redis, Celery, RPA, Docker</p>
          </div>
        </div>

        {/* Right Side: Experience */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          <div className="bento-card fade-up-element" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Full Stack Development Intern</h3>
                <div style={{ color: 'var(--color-10)', fontWeight: 600, marginTop: '0.2rem' }}>Tessa Cloud</div>
              </div>
              <span style={{ background: 'var(--bg-60)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>March 2026 – June 2026</span>
            </div>
            <ul style={{ color: 'var(--text-muted)', marginLeft: '1rem', marginTop: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              <li><strong>Engineered</strong> end-to-end web applications using Python and the Django framework, focusing on clean architecture and scalable backend services.</li>
              <li><strong>Developed</strong> responsive, user-centric front-end components by leveraging Tailwind CSS and TypeScript, improving UI consistency and load times.</li>
              <li><strong>Optimized</strong> database interactions and API endpoints to ensure smooth data flow, reducing latency in core application modules.</li>
              <li><strong>Collaborated</strong> within an Agile team environment, actively participating in code reviews and sprint planning to deliver features aligned with business requirements.</li>
            </ul>
          </div>

          <div className="bento-card fade-up-element">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>Independent Content Creator</h3>
                <div style={{ color: 'var(--color-10)', fontWeight: 600, marginTop: '0.2rem' }}>Freelance</div>
              </div>
            </div>
            <ul style={{ color: 'var(--text-muted)', marginLeft: '1rem', marginTop: '1rem', lineHeight: '1.8', fontWeight: 500 }}>
              <li>Write compelling narrative scripts for audio series on platforms like Pocket FM.</li>
              <li>Direct and produce informative video content, including a comprehensive 10-minute historical documentary.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
