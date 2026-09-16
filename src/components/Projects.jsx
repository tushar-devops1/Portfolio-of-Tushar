import React, { useState } from 'react';
import { FolderCheck, ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { projectCategories, projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/soundEffects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(proj => {
    return activeCategory === 'all' || proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-300">
            <FolderCheck size={14} className="text-amber-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Featured <span className="gold-purple-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Hand-crafted full-stack web platforms, AI integrations, and real-time interactive software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#120f1e] border border-purple-500/15 max-w-2xl mx-auto">
          {projectCategories.map((cat) => (
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                soundFX.playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="glass-card rounded-3xl border border-purple-500/20 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a16] via-transparent to-transparent opacity-90" />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0d0a16]/80 backdrop-blur-md border border-amber-500/30 text-xs font-mono-code text-amber-300">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Quick Arrow Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0d0a16]/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-200 font-mono-code line-clamp-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-code px-2 py-0.5 rounded-lg bg-[#0a0812] border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs font-mono-code px-2 py-0.5 rounded-lg bg-[#0a0812] border border-white/10 text-amber-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-3 bg-[#0a0812]/70 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-amber-300 group-hover:bg-amber-500/10 transition-colors">
                <span>Explore Architecture & Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
