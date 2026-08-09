import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Briefcase, Award, GraduationCap } from 'lucide-react';
import { personalInfo, experienceData, skillsData, certificationsData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const ResumeModal = ({ onClose }) => {
  useEffect(() => {
    soundFX.playModalOpen();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownload = () => {
    soundFX.playClick();
    alert("Resume download triggered! In production, this links to your PDF file (e.g. /tushar_resume.pdf).");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Container */}
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-auto p-6 sm:p-8">
        
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

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-amber-400 mb-1">
              <FileText size={14} />
              <span>CURRICULUM VITAE PREVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-purple-300 font-mono-code">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          <button
            onClick={handleDownload}
            onMouseEnter={() => soundFX.playHover()}
            className="btn-gold !py-2.5 !px-5 text-xs"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Resume Content Sections */}
        <div className="space-y-6 text-sm text-gray-300">
          
          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">
              Executive Summary
            </h3>
            <p className="leading-relaxed font-light bg-[#0a0812] p-4 rounded-2xl border border-white/5">
              {personalInfo.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase size={14} />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="bg-[#0e0b18] p-4 rounded-2xl border border-purple-500/15 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white text-base">{exp.role}</h4>
                      <span className="text-xs font-mono-code text-purple-300">{exp.company}</span>
                    </div>
                    <span className="text-xs font-mono-code text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap size={14} />
              <span>Core Skills & Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2 bg-[#0a0812] p-4 rounded-2xl border border-white/5">
              {skillsData.map((s, i) => (
                <span key={i} className="text-xs font-mono-code px-2.5 py-1 rounded-lg bg-[#161226] border border-purple-500/20 text-purple-200">
                  {s.name} ({s.exp})
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award size={14} />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certificationsData.map((c) => (
                <div key={c.id} className="text-xs bg-[#0e0b18] p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-white font-medium">{c.title}</span>
                  <span className="text-amber-300 font-mono-code">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
