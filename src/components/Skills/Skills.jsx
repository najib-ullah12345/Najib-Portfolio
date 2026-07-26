import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skills } from '../../data/skills';

const categoryIcons = {
  Frontend: 'fa-desktop',
  'Styling & UI': 'fa-palette',
  'Tools & Version Control': 'fa-wrench',
};

export default function Skills() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="section bg-[#111117] relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">What I know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Technical Skills</h2>
          <div className="divider divider-center" />
        </div>

        {/* Skill Groups */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`glass-card p-8 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${gi * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gold/[0.08] flex items-center justify-center mb-8">
                <i className={`fas ${categoryIcons[group.category] || 'fa-code'} text-gold text-xl`} />
              </div>

              <h3 className="text-white font-bold text-lg mb-8">{group.category}</h3>

              {/* Skills with progress */}
              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#c0c0d0]">{skill.name}</span>
                      <span className="text-xs text-gold font-bold">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          transitionDelay: `${gi * 0.15 + 0.3}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div ref={ref} className={`text-center reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-[#4a4a5c] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            Also Familiar With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['WordPress', 'Laravel', 'Vue.js', 'REST APIs', 'Responsive Design', 'Figma', 'npm', 'Vite', 'Git'].map((s) => (
              <span key={s} className="skill-badge">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
