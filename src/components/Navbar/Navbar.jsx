import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Portfolio' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0b0b0f]/95 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={600}
          offset={0}
          className="text-xl font-bold text-gradient cursor-pointer tracking-wide"
        >
          NAJIB<span className="text-gold">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-70}
                className="px-4 py-2 text-sm font-medium text-[#7a7a8c] hover:text-gold transition-all duration-300 cursor-pointer rounded-lg hover:bg-white/[0.04]"
                activeClass="text-gold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/najib-ullah12345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden lg:flex w-9 h-9 rounded-lg border border-white/10 items-center justify-center text-[#7a7a8c] hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <i className="fab fa-github text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/najibullah0048/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden lg:flex w-9 h-9 rounded-lg border border-white/10 items-center justify-center text-[#7a7a8c] hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <i className="fab fa-linkedin-in text-sm" />
          </a>
          <a
            href="/Engr-Najib-CV.pdf"
            download
            className="hidden md:inline-flex btn-gold text-xs py-2.5 px-5"
          >
            Resume
          </a>
          <button
            className="lg:hidden text-[#e0e0e8] text-xl p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0b0b0f]/98 backdrop-blur-2xl border-t border-white/[0.05] px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#7a7a8c] hover:text-gold transition-colors rounded-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href="/Engr-Najib-CV.pdf"
              download
              className="btn-gold text-xs py-2 px-4"
            >
              Resume
            </a>
            <a
              href="https://github.com/najib-ullah12345"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4"
            >
              <i className="fab fa-github" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/najibullah0048/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4"
            >
              <i className="fab fa-linkedin-in" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
