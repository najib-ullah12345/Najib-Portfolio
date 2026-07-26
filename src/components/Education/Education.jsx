import { useScrollReveal } from '../../hooks/useScrollReveal';
import { education } from '../../data/education';

export default function Education() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" className="section bg-[var(--bg-2)] relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] mb-4">Education</h2>
          <div className="divider divider-center" />
        </div>

        {/* Education Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className={`glass-card p-8 text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gold/[0.08] flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-graduation-cap text-gold text-2xl" />
              </div>

              <h3 className="text-[var(--text)] font-bold text-base leading-tight mb-1">{edu.degree}</h3>
              <p className="text-gold text-xs font-medium mb-1">{edu.institution}</p>
              <p className="text-[var(--text-muted)] text-xs mb-4">{edu.location}</p>

              <span className="inline-block text-xs font-bold px-4 py-1 rounded-full bg-gold/[0.08] text-gold border border-gold/[0.15] mb-4">
                {edu.period}
              </span>

              {/* Grade */}
              <div className="bg-[var(--bg-4)] rounded-xl p-4 mb-4">
                <p className="text-[var(--text-dim)] text-[10px] mb-1 uppercase tracking-wider">Grade / Marks</p>
                <p className="text-[var(--text)] font-extrabold text-xl">{edu.grade}</p>
              </div>

              <p className="text-[var(--text-muted)] text-xs leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Academic highlight */}
        <div
          ref={ref}
          className={`glass-card p-8 flex flex-col md:flex-row items-center gap-6 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gold/[0.08] flex items-center justify-center flex-shrink-0">
            <i className="fas fa-award text-gold text-2xl" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-[var(--text)] font-bold text-xl mb-2">Academic Excellence</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Strong academic background with 805/1100 in FSC and 799/1100 in Matriculation,
              demonstrating consistent performance and dedication to technical education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
