import React, { useState } from 'react';
import { User, ShieldCheck, Cpu, Code2, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutTabs, testimonialsData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentTabObj = aboutTabs.find(t => t.id === activeTab) || aboutTabs[0];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-300">
            <User size={14} className="text-amber-400" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            About <span className="gold-gradient">Me & Craft</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Architecting modern applications with pixel perfection, robust security, and cloud scalability.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Bio Tabs */}
          <div className="lg:col-span-7 w-full space-y-3">
            
            {/* Tab selection buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#120e20] border border-purple-500/15 backdrop-blur-md w-full">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Active Tab Card Content */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/20 space-y-6 min-h-[360px]">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Sparkles className="text-amber-400" size={22} />
                <span>{currentTabObj.title}</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light pl-8">
                {currentTabObj.content}
              </p>

              {/* Core Commitments Checklist */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
                <div className="flex items-center gap-2 text-xs font-mono-code text-purple-200">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Sub-Second Web Vitals</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-purple-200">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Type-Safe Codebases</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-purple-200">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Cloud Native Scaling</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-code text-purple-200">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>WCAG AAA Accessible UI</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Tech Radar / Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-purple-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-mono-code text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu size={16} />
                  <span>Engineering Pillars</span>
                </h4>
                <span className="text-[10px] font-mono-code text-gray-400">BENCHMARK 2026</span>
              </div>

              {/* Skill distribution bars */}
              <div className="space-y-4 pt-2">
                {[
                  { name: "Docker Containerization & Multi-Stage Builds", val: 92, color: "from-amber-500 to-amber-300" },
                  { name: "Linux System Admin & Scripting (Bash/Python)", val: 90, color: "from-purple-500 to-purple-300" },
                  { name: "AWS Infrastructure (EC2, VPC, ELB, Auto Scaling)", val: 88, color: "from-amber-400 to-purple-400" },
                  { name: "Jenkins CI/CD & Automation Pipelines", val: 88, color: "from-emerald-400 to-amber-400" }
                ].map((pillar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-gray-300">{pillar.name}</span>
                      <span className="text-amber-400 font-bold">{pillar.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#0a0812] rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${pillar.color} transition-all duration-1000`}
                        style={{ width: `${pillar.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Carousel preview */}
            <div className="glass-card p-6 rounded-3xl border border-amber-500/15 relative overflow-hidden">
              <Quote className="absolute top-4 right-4 text-amber-500/10" size={64} />
              
              <div className="space-y-3 relative z-10">
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  "{testimonialsData[activeTestimonial].quote}"
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonialsData[activeTestimonial].avatar} 
                      alt={testimonialsData[activeTestimonial].author}
                      className="w-8 h-8 rounded-full border border-amber-500/40 object-cover" 
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{testimonialsData[activeTestimonial].author}</div>
                      <div className="text-[10px] text-purple-300">{testimonialsData[activeTestimonial].role}</div>
                    </div>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-1.5">
                    {testimonialsData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          soundFX.playClick();
                          setActiveTestimonial(i);
                        }}
                        aria-label={`View testimonial ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeTestimonial === i ? 'w-5 bg-amber-400' : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
