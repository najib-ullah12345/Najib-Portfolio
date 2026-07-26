import { personalInfo } from '../../data/personalInfo';
import Logo from '../Common/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
              Front-End Developer crafting clean, responsive web experiences.
              Let's build something exceptional together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-github', href: personalInfo.github },
                { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin },
                { icon: 'fab fa-facebook-f', href: personalInfo.facebook },
                { icon: 'fab fa-whatsapp', href: personalInfo.whatsapp },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--bg-4)] flex items-center justify-center text-[var(--text-muted)] hover:text-gold hover:bg-gold/[0.08] transition-all">
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[var(--text)] font-bold text-sm mb-5">Navigation</h3>
            <ul className="space-y-3">
              {['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((id) => (
                <li key={id}>
                  <a href={`#${id}`}
                    className="text-[var(--text-muted)] text-sm hover:text-gold transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[8px] text-gold/40" />
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--text)] font-bold text-sm mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              {[
                { icon: 'fa-envelope', text: personalInfo.email },
                { icon: 'fa-phone', text: personalInfo.phone },
                { icon: 'fa-map-marker-alt', text: personalInfo.location },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[var(--text-muted)] text-sm">
                  <i className={`fas ${icon} text-gold/50 text-xs`} />
                  {text}
                </li>
              ))}
            </ul>
            <a href="/Engr-Najib-CV.pdf" download className="btn-gold text-xs py-2.5 px-5 mt-6 inline-flex">
              <i className="fas fa-download text-[10px]" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-dim)] text-xs text-center md:text-left">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <Logo size="sm" />
        </div>
      </div>
    </footer>
  );
}
