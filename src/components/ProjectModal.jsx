import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/soundEffects';

export const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    soundFX.playModalOpen();

    // Trigger subtle festive confetti burst for project feature view
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#8b5cf6', '#fbbf24']
      });
    } catch (e) {}

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const galleryImages = project.details?.gallery || [project.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-auto p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#161226] border border-white/10 text-gray-400 hover:text-white hover:border-amber-500/40 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Gallery Image Display */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 group">
          <img
            src={galleryImages[activeImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090710] via-transparent to-transparent" />

          {/* Subtitle tag */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono-code backdrop-blur-md">
              {project.subtitle}
            </span>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {galleryImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  soundFX.playClick();
                  setActiveImage(i);
                }}
                className={`w-20 h-14 rounded-xl overflow-hidden border transition-all shrink-0 ${
                  activeImage === i ? 'border-amber-400 scale-105 shadow-[0_0_10px_rgba(245,158,11,0.4)]' : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Project Header & Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-xs font-mono-code text-purple-300 mt-1">
              Category: <span className="text-amber-400 uppercase">{project.category}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="btn-outline-purple !py-2 !px-4 !text-xs"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="btn-gold !py-2 !px-4 !text-xs"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-8 space-y-4">
            <div>
              <h3 className="text-sm font-mono-code text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles size={16} />
                <span>Project Description</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {project.details?.challenge && (
              <div className="bg-[#120e20] p-4 rounded-2xl border border-purple-500/20 space-y-1">
                <h4 className="text-xs font-mono-code text-purple-300 font-semibold">
                  Engineering Challenge & Solution:
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.details.challenge} {project.details.solution}
                </p>
              </div>
            )}

            {project.details?.architecture && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers size={14} />
                  <span>Architecture Highlights:</span>
                </h4>
                <ul className="space-y-1.5">
                  {project.details.architecture.map((arch, aIdx) => (
                    <li key={aIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:col-span-4 space-y-4">
            {/* Metrics */}
            {project.metrics && (
              <div className="bg-[#120e20] p-4 rounded-2xl border border-amber-500/20 space-y-3">
                <h4 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award size={14} />
                  <span>Impact Metrics</span>
                </h4>
                <div className="space-y-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">{m.label}</span>
                      <span className="font-mono-code font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack List */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu size={14} />
                <span>Technologies</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono-code px-2.5 py-1 rounded-lg bg-[#181428] border border-purple-500/20 text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
