import React, { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070709] text-gray-100 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Interactive Custom Glowing Ring Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Floating Glass Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        cursorEnabled={cursorEnabled}
        setCursorEnabled={setCursorEnabled}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume / CV Modal */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}

    </div>
  );
}

export default App;
