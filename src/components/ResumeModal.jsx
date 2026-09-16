import React, { useEffect, useRef } from 'react';
import { X, Download, FileText, CheckCircle2, Briefcase, Award, GraduationCap } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { personalInfo, resumeData } from '../data/portfolioData';
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

  const resumeContentRef = useRef(null);

  const handleDownload = () => {
    soundFX.playClick();
    if (resumeContentRef.current) {
      html2pdf().set({
        margin: 0.5,
        filename: `${personalInfo.name}_Resume.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }).from(resumeContentRef.current).save();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">

      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto my-auto p-6 sm:p-8" ref={resumeContentRef}>

        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#161226] border border-white/10 text-gray-400 hover:text-white hover:border-amber-500/40 transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-amber-400 mb-1">
              <FileText size={14} />
              <span>CURRICULUM VITAE PREVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {resumeData.name}
            </h2>
            <p className="text-xs text-purple-300 font-mono-code">
              {resumeData.contact.location} • {resumeData.contact.email}
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

        <div className="space-y-6 text-sm text-gray-300">

          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Professional Summary</span>
            </h3>
            <p className="leading-relaxed font-light bg-[#0a0812] p-4 rounded-2xl border border-white/5">
              {resumeData.summary}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Technical Skills</span>
            </h3>
            {resumeData.skills.map((skill, sIdx) => (
              <div key={sIdx} className="bg-[#0a0812] p-3 rounded-xl border border-white/5">
                <span className="text-xs font-mono-code text-amber-300 font-semibold">{skill.category}:</span>
                <span className="text-xs text-gray-400 ml-2">{skill.items}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Technical Projects</span>
            </h3>
            {resumeData.projects.map((project, pIdx) => (
              <div key={pIdx} className="bg-[#0e0b18] p-4 rounded-2xl border border-purple-500/15 space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-sm">{project.title}</h4>
                  <span className="text-[10px] font-mono-code text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.split(',').map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#161224] border border-white/10 text-gray-400">{tag.trim()}</span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.description.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-gray-400 flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase size={14} />
              <span>Professional Experience</span>
            </h3>
            {resumeData.experience.map((exp, eIdx) => (
              <div key={eIdx} className="bg-[#0e0b18] p-4 rounded-2xl border border-purple-500/15 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">{exp.title}</h4>
                    <span className="text-xs font-mono-code text-purple-300">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono-code text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {exp.year}
                  </span>
                </div>
                <ul className="space-y-1">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-gray-400 flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap size={14} />
              <span>Education</span>
            </h3>
            {resumeData.education.map((edu, edIdx) => (
              <div key={edIdx} className="bg-[#0e0b18] p-4 rounded-2xl border border-purple-500/15 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
                  <span className="text-xs font-mono-code text-amber-300">{edu.period}</span>
                </div>
                <p className="text-xs font-mono-code text-purple-300">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award size={14} />
              <span>Certifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {resumeData.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="text-xs bg-[#0e0b18] p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">Target Roles</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.targetRoles.map((role, rIdx) => (
                <span key={rIdx} className="text-xs font-mono-code px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  {role}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
