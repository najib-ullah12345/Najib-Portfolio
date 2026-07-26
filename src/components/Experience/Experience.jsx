import { useScrollReveal } from '../../hooks/useScrollReveal';
import { experience, certifications } from '../../data/experience';

export default function Experience() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="section bg-[#0b0b0f] relative">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Experience</h2>
          <div className="divider divider-center" />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ── LEFT: Work ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gold/[0.08] flex items-center justify-center">
                <i className="fas fa-briefcase text-gold" />
              </div>
              <h3 className="text-white font-bold text-xl">Work Experience</h3>
            </div>

            <div className="relative pl-6">
              <div className="timeline-line" />
              {experience.map((exp) => (
                <div key={exp.id} className="relative mb-10">
                  <div className="timeline-dot" />
                  <div className={`glass-card p-6 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="text-white font-bold text-base">{exp.title}</h4>
                        <p className="text-gold text-xs font-medium mt-0.5">{exp.company}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/[0.08] text-gold border border-gold/[0.15]">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-[#7a7a8c]">
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-calendar text-gold/50 text-[10px]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-map-marker-alt text-gold/50 text-[10px]" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-[#7a7a8c] text-xs leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#7a7a8c] text-xs">
                          <i className="fas fa-check text-gold/60 text-[10px] mt-0.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Certifications ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gold/[0.08] flex items-center justify-center">
                <i className="fas fa-certificate text-gold" />
              </div>
              <h3 className="text-white font-bold text-xl">Certifications</h3>
            </div>

            <div className="space-y-5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`glass-card p-6 flex gap-5 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gold/[0.08] flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5">{cert.title}</h4>
                    <p className="text-[#7a7a8c] text-xs">{cert.issuer}</p>
                    <p className="text-[#4a4a5c] text-xs italic mt-1">{cert.description}</p>
                    <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full bg-gold/[0.08] text-gold border border-gold/[0.15]">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}

              {/* Achievement */}
              <div
                className={`glass-card p-6 reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/images/KPITB.jpg"
                    alt="KPITB Certificate"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">1st Position in Class</h4>
                    <p className="text-[#7a7a8c] text-xs">KPITB Internship Program</p>
                  </div>
                </div>
                <p className="text-[#7a7a8c] text-xs leading-relaxed">
                  Awarded 1st position during my web development internship, demonstrating excellence in
                  practical web development skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
