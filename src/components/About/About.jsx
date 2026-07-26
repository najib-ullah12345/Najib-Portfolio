import SectionTitle from '../Common/SectionTitle';
import { personalInfo } from '../../data/personalInfo';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '7+', label: 'Projects Built' },
  { value: '3+', label: 'Certifications' },
  { value: '1', label: 'Internship' },
];

export default function About() {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section-pad bg-dark-2 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          subtitle="Passionate front-end developer focused on building clean, responsive, and user-centric web applications."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-xl" />
              <img
                src="/images/pic.jpeg"
                alt={personalInfo.name}
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-xl px-5 py-4 shadow-xl">
                <p className="text-gold text-3xl font-bold">3+</p>
                <p className="text-text-muted text-sm">Years Learning</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
            {personalInfo.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-text-muted leading-relaxed mb-5 text-base">
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl bg-dark/50 border border-white/5"
                >
                  <p className="text-3xl font-bold text-gradient mb-1">{value}</p>
                  <p className="text-text-muted text-xs">{label}</p>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: 'fas fa-envelope', label: 'Email', value: personalInfo.email },
                { icon: 'fas fa-phone', label: 'Phone', value: personalInfo.phone },
                { icon: 'fas fa-map-marker-alt', label: 'Location', value: personalInfo.location },
                { icon: 'fas fa-briefcase', label: 'Role', value: personalInfo.title },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${icon} text-gold text-sm`} />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">{label}</p>
                    <p className="text-white text-sm font-medium truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-8">
              <a href={`#contact`} className="btn-primary text-sm">
                <i className="fas fa-paper-plane" />
                Let's Talk
              </a>
              <a href="/Engr-Najib-CV.pdf" download className="btn-outline text-sm">
                <i className="fas fa-download" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
