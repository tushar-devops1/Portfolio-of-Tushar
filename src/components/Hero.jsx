import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Terminal, Award, FolderCheck, GitCommit, Smile, Code, Layers, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Hero = ({ onOpenResume }) => {
  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Card Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const roles = personalInfo.roles;
    const fullRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullRole) {
      typingSpeed = 2200; // Pause at full string
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullRole) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
      } else if (currentText === fullRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Card 3D Tilt calculation
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -20,
      y: (x / rect.width) * 20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="text-amber-400" size={20} />;
      case 'FolderCheck': return <FolderCheck className="text-purple-400" size={20} />;
      case 'GitCommit': return <GitCommit className="text-amber-400" size={20} />;
      case 'Smile': return <Smile className="text-purple-400" size={20} />;
      default: return <Sparkles className="text-amber-400" size={20} />;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Glowing luxury ambient aura orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-purple-600/15 to-amber-300/5 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161224]/80 border border-amber-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono-code tracking-wide text-amber-200">
                Available for Entry Level Cloud & DevOps Role.
              </span>
            </div>

            {/* Main Title Header */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-mono-code text-purple-300 tracking-wider">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="gold-purple-gradient">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-12 flex items-center gap-2 text-2xl sm:text-3xl font-display font-semibold text-gray-300">
                <span className="text-amber-400">&gt;</span>
                <span className="text-amber-100">{currentText}</span>
                <span className="w-0.5 h-7 bg-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light">
              {personalInfo.bio}
            </p>

            {/* Tech tag highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-gray-400 font-mono-code uppercase mr-2">Core Stack:</span>
              {['Docker', 'AWS', 'Jenkins', 'Terraform', 'Linux', 'Python'].map((tag) => (
                <span 
                  key={tag}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-3 py-1 rounded-lg text-xs font-mono-code bg-[#181428] border border-purple-500/20 text-purple-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="btn-gold group"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="btn-outline-purple"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-4 py-3 rounded-full text-xs font-mono-code text-gray-300 hover:text-amber-300 flex items-center gap-2 border border-white/10 hover:border-amber-500/30 transition-all"
              >
                <Download size={14} className="text-amber-400" />
                Resume PDF
              </button>
            </div>

          </div>

          {/* Right Column: 3D Interactive Avatar & Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative group w-full max-w-md cursor-pointer"
            >
              {/* Outer Glowing Hologram Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-purple-600 to-amber-400 opacity-40 group-hover:opacity-80 blur-xl transition-all duration-500" />

              <div className="relative glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-amber-500/20">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-amber-400" />
                    <span className="text-xs font-mono-code text-purple-300">devops.config.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                </div>

                {/* Avatar / Tech Emblem */}
                <div className="relative flex justify-center py-4">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-amber-500/20 via-purple-600/30 to-amber-300/20 p-1.5 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                    <div className="w-full h-full rounded-full bg-[#0d0a16] flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent" />
                      <span className="font-display text-5xl font-black gold-gradient">T</span>
                      <span className="text-[11px] font-mono-code text-purple-300 mt-1">DEVOPS & CLOUD</span>
                    </div>
                  </div>

                  {/* Floating badge 1 */}
                  <div className="absolute top-2 left-2 animate-float bg-[#161226]/90 border border-amber-500/30 px-3 py-1.5 rounded-xl text-xs font-mono-code text-amber-300 flex items-center gap-1.5 shadow-lg">
                    <Zap size={14} className="text-amber-400" />
                    <span>Automated CI/CD</span>
                  </div>

                  {/* Floating badge 2 */}
                  <div className="absolute bottom-2 right-2 animate-float [animation-delay:2s] bg-[#161226]/90 border border-purple-500/30 px-3 py-1.5 rounded-xl text-xs font-mono-code text-purple-300 flex items-center gap-1.5 shadow-lg">
                    <Layers size={14} className="text-purple-400" />
                    <span>Docker & IaC</span>
                  </div>
                </div>

                {/* Code Terminal Snippet */}
                <div className="bg-[#090710] p-4 rounded-xl border border-white/5 font-mono-code text-xs space-y-1">
                  <div className="text-purple-400"><span className="text-amber-400">const</span> devopsEngineer = &#123;</div>
                  <div className="pl-4 text-gray-300">name: <span className="text-emerald-400">"{personalInfo.name}"</span>,</div>
                  <div className="pl-4 text-gray-300">status: <span className="text-amber-300">"Automating Deployments"</span>,</div>
                  <div className="pl-4 text-gray-300">uptime: <span className="text-purple-300 font-bold">"99.9%"</span></div>
                  <div className="text-purple-400">&#125;;</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stat Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => soundFX.playHover()}
              className="glass-card p-5 rounded-2xl border border-purple-500/15 flex items-center gap-4 hover:border-amber-500/40 transition-all"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display gold-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
