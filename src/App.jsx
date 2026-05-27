import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useGSAP } from '@gsap/react';

// Components
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import CreditsSection from './sections/CreditsSection';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useGSAP(() => {
    // Scroll-Triggered Fade-Ups for any element with .fade-up-element
    const fadeElements = gsap.utils.toArray('.fade-up-element');
    
    fadeElements.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Triggers when the top of the element hits 85% of viewport height
          toggleActions: "play none none reverse"
        }
      });
    });

  }, { scope: mainRef });

  return (
    <>
      <div className="bg-layer bg-glows"></div>
      
      <Navbar />

      <main ref={mainRef}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CreditsSection />
      </main>
    </>
  );
}

export default App;
