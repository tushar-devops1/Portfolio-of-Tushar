import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Award, Layers } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Experience = () => {
  const [expandedId, setExpandedId] = useState('exp-1');

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-300">
            <Briefcase size={14} className="text-amber-400" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Work <span className="purple-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Track record of driving architectural excellence and building enterprise platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500 via-purple-600 to-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative flex flex-col sm:flex-row items-center group">
                  
                  {/* Glowing Milestone Marker Node */}
                  <div 
                    onClick={() => {
                      soundFX.playClick();
                      setExpandedId(isExpanded ? null : exp.id);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-[#0d0a16] border-2 border-amber-400 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-125 transition-transform duration-300"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:mr-auto sm:pr-6' : 'sm:ml-auto sm:pl-6'
                  }`}>
                    <div 
                      onClick={() => {
                        soundFX.playClick();
                        setExpandedId(isExpanded ? null : exp.id);
                      }}
                      onMouseEnter={() => soundFX.playHover()}
                      className={`glass-card p-6 rounded-3xl border transition-all cursor-pointer ${
                        isExpanded ? 'border-amber-500/40 bg-[#161226]/90 shadow-[0_0_30px_rgba(245,158,11,0.15)]' : 'border-purple-500/20'
                      }`}
                    >
                      {/* Period Badge & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-mono-code text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono-code text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-purple-300 font-medium mb-3">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-gray-400 flex items-center gap-1 text-xs">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-4">
                        {exp.description}
                      </p>

                      {/* Expandable Key Achievements */}
                      {isExpanded && (
                        <div className="space-y-3 pt-3 border-t border-white/10 animate-fadeIn">
                          <div className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Award size={14} />
                            <span>Key Impact & Deliverables:</span>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="text-xs text-gray-300 flex items-start gap-2">
                                <ChevronRight size={14} className="text-amber-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech stack pill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4">
                        {exp.tech.map((t) => (
                          <span key={t} className="text-xs font-mono-code px-2 py-0.5 rounded-lg bg-[#0a0812] border border-white/10 text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
