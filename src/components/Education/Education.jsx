import SectionTitle from '../Common/SectionTitle';
import { education } from '../../data/education';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Education() {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="education" className="section-pad bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Background"
          title="Education"
          subtitle="My academic foundation in software engineering and technical education."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className={`card p-8 text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 border border-gold/20">
                <i className="fas fa-graduation-cap text-gold text-2xl" />
              </div>

              {/* Degree */}
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className="text-gold text-sm font-medium mb-1">{edu.institution}</p>
              <p className="text-text-muted text-xs mb-3">{edu.location}</p>

              {/* Period */}
              <span className="inline-block text-xs font-medium px-4 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
                {edu.period}
              </span>

              {/* Grade */}
              <div className="bg-dark/50 rounded-xl p-4 mb-4">
                <p className="text-text-muted text-xs mb-1">Grade / Marks</p>
                <p className="text-white font-bold text-lg">{edu.grade}</p>
              </div>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Academic highlight */}
        <div
          ref={ref}
          className={`mt-12 glass rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
            <i className="fas fa-award text-gold text-3xl" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">
              Academic Excellence
            </h3>
            <p className="text-text-muted leading-relaxed">
              Strong academic background with 805/1100 in FSC and 799/1100 in Matriculation,
              demonstrating consistent performance and dedication to technical education from an early stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
