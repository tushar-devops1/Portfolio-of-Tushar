import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, MousePointer, Sparkles, Menu, X, FileText } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export const Navbar = ({ soundEnabled, setSoundEnabled, cursorEnabled, setCursorEnabled, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certs', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    soundFX.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#070709]/80 backdrop-blur-xl border-b border-amber-500/10 py-3 shadow-lg shadow-black/40' : 'bg-[#070709]/40 backdrop-blur-sm py-5'
    }`}>
      {/* Scroll progress bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 via-purple-500 to-amber-300 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          onMouseEnter={() => soundFX.playHover()}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d0b14] rounded-[11px] flex items-center justify-center">
              <span className="font-display font-bold text-lg gold-gradient">T</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors">
              TUSHAR<span className="text-amber-500">.</span>
            </span>
            <span className="text-[10px] font-mono-code text-purple-300/70 tracking-widest uppercase">Cloud & DevOps</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#120f1c]/60 p-1.5 rounded-full border border-purple-500/15 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-amber-300 font-semibold bg-amber-500/15 border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Controls & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setSoundEnabled(soundFX.toggleSound());
            }}
            onMouseEnter={() => soundFX.playHover()}
            aria-label="Toggle sound"
            title={soundEnabled ? "Mute Sound FX" : "Enable Sound FX"}
            className="p-2 rounded-full bg-[#161224] border border-purple-500/20 text-purple-300 hover:text-amber-400 hover:border-amber-500/40 transition-all hover:scale-105"
          >
            {soundEnabled ? <Volume2 size={16} className="text-amber-400" /> : <VolumeX size={16} className="text-gray-500" />}
          </button>

          {/* Custom Cursor Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setCursorEnabled(!cursorEnabled);
            }}
            onMouseEnter={() => soundFX.playHover()}
            aria-label="Toggle custom cursor"
            title={cursorEnabled ? "Disable Glowing Ring Cursor" : "Enable Glowing Ring Cursor"}
            className={`p-2 rounded-full border transition-all hover:scale-105 ${
              cursorEnabled 
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-400' 
                : 'bg-[#161224] border border-purple-500/20 text-gray-400'
            }`}
          >
            <MousePointer size={16} />
          </button>

          {/* CV Download CTA */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="btn-outline-purple !py-2 !px-4 !text-xs"
          >
            <FileText size={14} className="text-amber-400" />
            Resume / CV
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#161224] border border-purple-500/20 text-gray-200"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0b16]/95 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-4 rounded-xl text-sm font-medium ${
                  activeSection === item.id ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
              <span className="text-xs text-gray-400">Audio FX</span>
              <button
                onClick={() => setSoundEnabled(soundFX.toggleSound())}
                className="p-2 rounded-lg bg-[#161224] border border-purple-500/20 text-amber-400"
              >
                {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-gold justify-center mt-3 text-sm"
            >
              <FileText size={16} />
              View / Download CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
