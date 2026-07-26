import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { skills } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const icons = {
  Monitor: 'fas fa-desktop',
  Palette: 'fas fa-palette',
  Wrench: 'fas fa-wrench',
};

export default function Skills() {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="skills" className="section-pad bg-dark relative">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          eyebrow="Technical Skills"
          title="My Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`card p-8 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${gi * 0.12}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <i className={`${icons[group.icon] || 'fas fa-code'} text-gold text-lg`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/90">{skill.name}</span>
                      <span className="text-xs text-gold font-semibold">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          transitionDelay: `${gi * 0.12 + 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skill Badges */}
        <div ref={ref} className={`mt-16 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <p className="text-center text-text-muted mb-6 text-sm font-medium tracking-wider uppercase">
            Also Familiar With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['WordPress', 'Laravel', 'Vue.js', 'REST APIs', 'Responsive Design', 'Figma', 'npm', 'Vite'].map((s) => (
              <span key={s} className="skill-badge">
                <i className="fas fa-check text-xs text-gold/70" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
