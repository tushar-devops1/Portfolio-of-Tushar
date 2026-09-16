import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Twitter, MessageSquare, Sparkles, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Project Inquiry',
    budget: '$5k - $15k',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const quickChips = [
    "Hiring for DevOps / Cloud Role",
    "Docker & CI/CD Pipeline Setup",
    "AWS Infrastructure Consulting",
    "General Tech Inquiry"
  ];

  const handleChipClick = (chip) => {
    soundFX.playClick();
    setFormData(prev => ({
      ...prev,
      subject: chip,
      message: `Hi Tushar,\n\nI would like to discuss: ${chip}. Let's connect!`
    }));
  };

  const handleCopy = (text, type) => {
    soundFX.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playSuccess();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#8b5cf6', '#34d399']
      });
    } catch (err) {}

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Full-Stack Project Inquiry',
        budget: '$5k - $15k',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code text-amber-300">
            <Mail size={14} className="text-amber-400" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Get In <span className="gold-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind, a job opportunity, or technical question? Drop me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box 1: Email */}
            <div className="glass-card p-6 rounded-3xl border border-amber-500/20 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-gray-400">EMAIL ADDRESS</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                onMouseEnter={() => soundFX.playHover()}
                className="p-2.5 rounded-xl bg-[#161226] border border-white/10 text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Quick Contact Box 2: Phone */}
            <div className="glass-card p-6 rounded-3xl border border-purple-500/20 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-gray-400">DIRECT PHONE / WHATSAPP</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                onMouseEnter={() => soundFX.playHover()}
                className="p-2.5 rounded-xl bg-[#161226] border border-white/10 text-gray-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location & Timezone info */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono-code text-purple-300">
                <MapPin size={16} className="text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono-code text-gray-400">
                <Clock size={16} className="text-emerald-400" />
                <span>Typical Response Time: Within 4 Hours</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-card p-6 rounded-3xl border border-amber-500/15 space-y-4">
              <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider block">
                Connect Across Platforms
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'GitHub', href: personalInfo.github, icon: <Github size={18} /> },
                  { name: 'LinkedIn', href: personalInfo.linkedin, icon: <Linkedin size={18} /> },
                  { name: 'Twitter', href: personalInfo.twitter, icon: <Twitter size={18} /> },
                  { name: 'Discord', href: '#', icon: <MessageSquare size={18} /> }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFX.playHover()}
                    className="p-3 rounded-2xl bg-[#141022] border border-purple-500/20 text-gray-300 hover:text-amber-300 hover:border-amber-500/50 hover:scale-110 transition-all flex-1 flex justify-center"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-amber-500/20 space-y-6">
              
              {/* Form header chips */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code text-purple-300 uppercase tracking-wider block">
                  Quick Topics / One-Click Fill:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {quickChips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleChipClick(chip)}
                      onMouseEnter={() => soundFX.playHover()}
                      className="text-xs font-mono-code px-3 py-1 rounded-full bg-[#161226] border border-purple-500/20 text-gray-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-center space-y-3 animate-fadeIn">
                  <Sparkles className="mx-auto text-amber-400 animate-bounce" size={36} />
                  <h3 className="text-xl font-bold text-white">Message Transmitted Successfully!</h3>
                  <p className="text-xs font-mono-code text-amber-200">
                    Thank you for reaching out, {formData.name || 'Friend'}! I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-code text-gray-400">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0b18] border border-purple-500/20 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-code text-gray-400">YOUR EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0b18] border border-purple-500/20 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono-code text-gray-400">SUBJECT</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0b18] border border-purple-500/20 text-sm text-white focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono-code text-gray-400">PROJECT BUDGET / TYPE</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e0b18] border border-purple-500/20 text-sm text-white focus:outline-none focus:border-amber-500/60"
                      >
                        <option value="Full-Time Role">Full-Time Role Inquiry</option>
                        <option value="<$5k">&lt; $5,000</option>
                        <option value="$5k - $15k">$5,000 - $15,000</option>
                        <option value="$15k+">$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-code text-gray-400">YOUR MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project goals, timelines, or role details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0b18] border border-purple-500/20 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundFX.playHover()}
                    className="btn-gold w-full justify-center text-sm py-3.5"
                  >
                    <span>Send Message Now</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
