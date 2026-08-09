import React, { useState } from 'react';
import { Award, Cloud, Code2, Database, ExternalLink, CheckCircle2, ShieldCheck, GraduationCap, Container } from 'lucide-react';
import { certificationsData, educationData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="text-amber-400" size={24} />;
      case 'Code2': return <Code2 className="text-purple-400" size={24} />;
      case 'Database': return <Database className="text-amber-400" size={24} />;
      case 'Container': return <Container className="text-amber-400" size={24} />;
      default: return <Award className="text-amber-400" size={24} />;
    }
  };

  return (
    <section id="certs" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono-code text-purple-300">
            <Award size={14} className="text-amber-400" />
            <span>VERIFIED ACCOMPLISHMENTS & DEGREES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Education & <span className="purple-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Academic degrees, technology job simulations, and verified DevOps & Cloud credentials.
          </p>
        </div>

        {/* Education Card */}
        {educationData && educationData.length > 0 && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-purple-950/20 via-[#120f24] to-amber-950/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">Higher Education</span>
                <h3 className="text-xl font-bold text-white">{educationData[0].degree}</h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs font-mono-code text-gray-300">
              <div>
                <span className="text-purple-300 font-semibold">{educationData[0].institution}</span> — {educationData[0].location}
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 w-fit">
                {educationData[0].period}
              </span>
            </div>
          </div>
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                soundFX.playClick();
                setSelectedCert(cert);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="glass-card p-6 rounded-3xl border border-purple-500/15 space-y-4 hover:border-amber-500/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  {getCertIcon(cert.icon)}
                </div>
                <span className="text-xs font-mono-code text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono-code text-purple-300 mt-1">
                  Issuer: {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-gray-400">
                <span className="truncate max-w-[180px]">ID: {cert.credentialId}</span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Verify <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Detail Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-card p-8 rounded-3xl border border-amber-500/40 max-w-md w-full space-y-6 relative">
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono-code text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck size={14} />
                  <span>VERIFIED CREDENTIAL</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-purple-300 font-mono-code">
                  Issued by {selectedCert.issuer} ({selectedCert.date})
                </p>
              </div>

              <div className="bg-[#0a0812] p-4 rounded-2xl border border-white/10 font-mono-code text-xs space-y-1">
                <div className="text-gray-400">Credential ID:</div>
                <div className="text-amber-300 font-bold tracking-wider">{selectedCert.credentialId}</div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold flex-1 justify-center text-xs"
                >
                  <span>Verify Online</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn-outline-purple text-xs"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
