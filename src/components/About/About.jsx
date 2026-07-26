import { useScrollReveal } from '../../hooks/useScrollReveal';
import { personalInfo } from '../../data/personalInfo';

export default function About() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="section bg-[#0b0b0f] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-20 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Me</h2>
          <div className="divider divider-center" />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ── LEFT: Avatar ── */}
          <div className={`relative reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gold/[0.08] rounded-2xl blur-2xl" />
              <img
                src="/images/pic.jpeg"
                alt={personalInfo.name}
                className="relative rounded-2xl w-full object-cover shadow-2xl"
                style={{ maxHeight: '480px' }}
              />
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 glass-card px-5 py-4 text-center">
                <p className="text-3xl font-extrabold text-gradient">3+</p>
                <p className="text-[#7a7a8c] text-xs mt-0.5">Years Learning</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              I'm <span className="text-gradient">{personalInfo.name}</span>
            </h3>
            <p className="text-gold text-sm font-medium mb-6">{personalInfo.title}</p>

            {/* Divider */}
            <div className="divider mb-6" />

            {personalInfo.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-[#7a7a8c] leading-relaxed mb-4 text-sm md:text-base">
                {para}
              </p>
            ))}

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: 'fa-envelope', label: 'Email', value: personalInfo.email },
                { icon: 'fa-phone', label: 'Phone', value: personalInfo.phone },
                { icon: 'fa-map-marker-alt', label: 'Location', value: personalInfo.location },
                { icon: 'fa-briefcase', label: 'Role', value: personalInfo.title },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`fas ${icon} text-gold text-xs`} />
                  </div>
                  <div>
                    <p className="text-[#4a4a5c] text-xs">{label}</p>
                    <p className="text-white text-sm font-medium leading-tight">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a href="#contact" className="btn-gold text-sm px-6 py-3">
                <i className="fas fa-paper-plane" />
                Let's Talk
              </a>
              <a href="/Engr-Najib-CV.pdf" download className="btn-outline text-sm px-6 py-3">
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
