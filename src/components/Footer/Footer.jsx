import { personalInfo } from '../../data/personalInfo';

const footerLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-4">
              {'<'}NAJIB<span className="text-gold">/</span>{'>'}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Front-End Developer crafting clean, responsive, and user-friendly web experiences.
              Let's build something great together.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
                { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: 'fab fa-facebook-f', href: personalInfo.facebook, label: 'Facebook' },
                { icon: 'fab fa-whatsapp', href: personalInfo.whatsapp, label: 'WhatsApp' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-muted hover:text-gold hover:bg-gold/10 transition-all"
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ label, to }) => (
                <li key={to}>
                  <a
                    href={`#${to}`}
                    className="text-text-muted text-sm hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs text-gold/40" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              {[
                { icon: 'fas fa-envelope', text: personalInfo.email },
                { icon: 'fas fa-phone', text: personalInfo.phone },
                { icon: 'fas fa-map-marker-alt', text: personalInfo.location },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-text-muted text-sm">
                  <i className={`${icon} text-gold/60 text-sm`} />
                  {text}
                </li>
              ))}
            </ul>

            <a
              href="/Engr-Najib-CV.pdf"
              download
              className="btn-primary text-sm py-2.5 px-5 mt-6 inline-flex"
            >
              <i className="fas fa-download text-xs" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Designed & built with{' '}
            <i className="fas fa-heart text-gold text-xs" />{' '}
            using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
