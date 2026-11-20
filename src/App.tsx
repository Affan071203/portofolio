import React, { useState, useEffect } from 'react';
import { TopographyBackground } from './components/TopographyBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 150;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050B18] text-[#A7B1C2] selection:bg-blue-600 selection:text-white relative">
      {/* Dynamic Background Topography & Gradient Orbs */}
      <TopographyBackground />

      {/* Floating Pill Header */}
      <Navbar activeSection={activeSection} />

      {/* Dark Futuristic Content Container */}
      <main className="relative z-10 bg-topo-dark">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      {/* Light Transition Contact Section & Footer */}
      <div className="relative z-10">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
