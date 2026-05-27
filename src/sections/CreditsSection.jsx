import React from 'react';

const CreditsSection = () => {
  return (
    <section className="section container fade-up-element">
      <div className="split-layout">
        
        {/* Volunteering */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="accent-text fade-up-element" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            🤝 Community & Volunteering
          </h2>
          
          <div className="bento-card fade-up-element" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Volunteer - Hearing Screening Health Camp</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
              Dedicated time to support a campus-wide hearing screening program at Navkis College of Engineering, assisting with logistics and accessibility.
            </p>
          </div>

          <div className="bento-card fade-up-element">
            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Peer Coordinator - Events & Visits</h4>
            <ul style={{ color: 'var(--text-muted)', fontSize: '1rem', marginLeft: '1.5rem', lineHeight: '1.6', fontWeight: 500 }}>
              <li>Organized logistics and transport for an engineering peer group for an industry visit to Adobe in July 2024.</li>
              <li>Actively involved in college cultural and networking events, including NavUtsav-2k25.</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="accent-text fade-up-element" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            🎓 Certifications
          </h2>
          
          <div className="bento-card fade-up-element" style={{ marginBottom: '1.5rem', padding: '1.5rem 2rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>AWS Academy Graduate - Cloud Foundations</h4>
            <p style={{ color: 'var(--color-10)', fontSize: '0.9rem', marginTop: '0.2rem', fontWeight: 600 }}>Amazon Web Services (AWS) | May 2026</p>
          </div>

          <div className="bento-card fade-up-element" style={{ marginBottom: '1.5rem', padding: '1.5rem 2rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Machine Learning With AI</h4>
            <p style={{ color: 'var(--color-10)', fontSize: '0.9rem', marginTop: '0.2rem', fontWeight: 600 }}>Internshala Trainings | Score: 94%</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 500 }}>8-week training covering Data Analytics, Visualization, and Supervised/Unsupervised Learning.</p>
          </div>

          <div className="bento-card fade-up-element" style={{ padding: '1.5rem 2rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>Robotic Process Automation Certification</h4>
            <p style={{ color: 'var(--color-10)', fontSize: '0.9rem', marginTop: '0.2rem', fontWeight: 600 }}>Navkis College Of Engineering | Aug 2025</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreditsSection;
