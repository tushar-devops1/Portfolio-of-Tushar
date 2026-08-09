import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Footer = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/15 bg-[#050408]/90 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#0d0b14] rounded-[11px] flex items-center justify-center">
                <span className="font-display font-bold text-sm gold-gradient">T</span>
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-white tracking-wider">
                TUSHAR<span className="text-amber-500">.</span>
              </div>
              <div className="text-[10px] font-mono-code text-gray-400">
                Crafting modern full-stack web applications
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-gray-400">
            <a href="#about" onClick={() => soundFX.playClick()} className="hover:text-amber-300 transition-colors">About</a>
            <a href="#experience" onClick={() => soundFX.playClick()} className="hover:text-amber-300 transition-colors">Experience</a>
            <a href="#skills" onClick={() => soundFX.playClick()} className="hover:text-amber-300 transition-colors">Skills</a>
            <a href="#projects" onClick={() => soundFX.playClick()} className="hover:text-amber-300 transition-colors">Projects</a>
            <a href="#contact" onClick={() => soundFX.playClick()} className="hover:text-amber-300 transition-colors">Contact</a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFX.playHover()}
            className="p-3 rounded-full bg-[#141022] border border-amber-500/30 text-amber-400 hover:scale-110 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-code text-gray-500 gap-3">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Designed & Built with <Heart size={12} className="text-amber-500 fill-amber-500 mx-0.5" /> using React, Vite & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
};
