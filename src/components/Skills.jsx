import React, { useState } from 'react';
import { Cpu, Search, Sparkles, Code2, FileCode2, Layers, Palette, Box, Server, Terminal, Network, Boxes, Zap, Database, Table, HardDrive, Cloud, Container, GitBranch, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsCategories, skillsData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const renderIcon = (iconName) => {
    const props = { size: 20, className: "text-amber-400" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Table': return <Table {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Container': return <Container {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  const filteredSkills = skillsData.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono-code text-purple-300">
            <Cpu size={14} className="text-amber-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Skills & <span className="gold-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Battle-tested frameworks, languages, cloud platforms, and developer tooling.
          </p>
        </div>

        {/* Controls: Category Filter & Search Input */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#120f1e] border border-purple-500/15 w-full md:w-auto">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)] font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top.1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#120f1e] border border-purple-500/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFX.playHover()}
              className="glass-card p-5 rounded-2xl border border-purple-500/15 space-y-4 hover:border-amber-500/40 transition-all group h-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    {renderIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono-code text-gray-400">Exp: {skill.exp}</span>
                  </div>
                </div>

                {/* Level Percentage Arc */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-white/10"
                      fill="transparent"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={113}
                      strokeDashoffset={113 - (113 * skill.level) / 100}
                      strokeLinecap="round"
                      className="text-amber-400 transition-all duration-1000 ease-out"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-mono-code font-bold text-amber-300">
                    {skill.level}%
                  </span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm font-mono-code">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
