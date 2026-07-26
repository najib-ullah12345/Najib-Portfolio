import SectionTitle from '../Common/SectionTitle';
import { experience, certifications } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="experience" className="section-pad bg-dark-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Career"
          title="Work Experience"
          subtitle="My professional journey and key responsibilities."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <i className="fas fa-briefcase text-gold" />
              </div>
              Professional Experience
            </h3>

            <div className="relative">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className={`timeline-item reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  <div className="card p-6">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h4 className="text-white font-semibold text-lg">{exp.title}</h4>
                        <p className="text-gold text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-calendar text-gold/60" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fas fa-map-marker-alt text-gold/60" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                          <i className="fas fa-check text-gold/70 text-xs mt-1 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <i className="fas fa-certificate text-gold" />
              </div>
              Certifications
            </h3>

            <div className="space-y-5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`card p-6 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <i className="fas fa-award text-gold text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
                      <p className="text-text-muted text-sm">{cert.issuer}</p>
                      <p className="text-text-muted text-sm italic">{cert.description}</p>
                      <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Internship Achievement */}
            <div
              className={`mt-8 card p-6 border-gold/20 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/KPITB.jpg"
                  alt="KPITB Certificate"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">1st Position in Class</h4>
                  <p className="text-text-muted text-sm">KPITB Internship Program</p>
                </div>
              </div>
              <p className="text-text-muted text-sm">
                Awarded 1st position during my web development internship at Khyber Pakhtunkhwa
                Information Technology Board, demonstrating excellence in practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
