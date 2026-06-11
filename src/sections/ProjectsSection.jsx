import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="section container fade-up-element">
      <h2 className="accent-text" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem', textAlign: 'center' }}>Featured Projects</h2>
      
      {/* Light Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        
        {/* AI Shoplifting Detection (Spans 12 cols on mobile, 8 on desktop) */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--color-10)', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '16px' }}>🛒</div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: 0, color: 'white' }}>AI Shoplifting Detection</h3>
              <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Computer Vision Pipeline</span>
            </div>
          </div>
          <ul style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 500, marginLeft: '1.2rem', lineHeight: '1.6' }}>
            <li><strong>Developed</strong> an AI-powered detection system using YOLOv8 and OpenCV for real-time anomaly detection in retail settings.</li>
            <li><strong>Engineered</strong> a custom skeletal movement analysis pipeline to identify suspicious concealment patterns, minimizing false positives.</li>
            <li><strong>Optimized</strong> model inference for real-time video streams, ensuring a responsive security alert system on standard hardware.</li>
          </ul>
        </div>

        {/* EchoBreaker */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 4' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🌿</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>EchoBreaker</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>
            A three-tier web application using Next.js, FastAPI, and PostgreSQL. Implemented a custom "contrarian" recommendation algorithm to break filter bubbles.
          </p>
        </div>

        {/* TaskFlow Companion */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 4' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>✅</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>TaskFlow Companion</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            Full-stack distributed task manager built with Django REST Framework and React, integrating Celery and Redis to handle asynchronous background tasks.
          </p>
        </div>

        {/* AI Emergency Response */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 4' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🚑</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>AI Emergency Response</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            Architected a real-time accident detection engine using YOLOv8/SSD to minimize latency in incident reporting for high-traffic environments.
          </p>
        </div>

        {/* Django Hackathon */}
        <div className="bento-card fade-up-element" style={{ gridColumn: 'span 12 / span 4' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--bg-60)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px' }}>🏆</div>
          <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Django Hackathon</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
            <strong>3rd Prize Winner (Feb 2026).</strong> Architected a multi-module Django application within 24 hours, focusing on secure authentication and database schema design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
