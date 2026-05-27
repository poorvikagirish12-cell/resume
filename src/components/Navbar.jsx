import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 3rem' : '2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.02)' : 'none'
    }}>
      <div style={{
        fontFamily: 'var(--font-title)',
        fontWeight: 700,
        fontSize: '1.5rem',
        color: 'var(--text-main)',
        letterSpacing: '-0.02em'
      }}>
        Poorvika G
      </div>
      <div style={{
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 600,
        color: 'var(--color-10)',
        display: scrolled ? 'block' : 'none'
      }}>
        Explore ↓
      </div>
    </nav>
  );
};

export default Navbar;
