import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Portfolio' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef(null);

  // Theme setup
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setDarkMode(false);
      document.body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via Intersection Observer
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-70px 0px -40% 0px' }
    );

    sections.forEach((s) => observerRef.current.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  const linkClass = (to) =>
    `px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg ${
      activeSection === to
        ? 'text-gold bg-gold/[0.08]'
        : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--border)]'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--bg)]/95 backdrop-blur-2xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold text-gradient cursor-pointer tracking-wider hover:opacity-80 transition-opacity duration-300"
          aria-label="NU - Najib Ullah Khan"
        >
          NU<span className="text-gold">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-70}
                className={linkClass(to)}
                onClick={() => setActiveSection(to)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            {darkMode ? (
              <i className="fas fa-sun text-sm" />
            ) : (
              <i className="fas fa-moon text-sm" />
            )}
          </button>

          <a
            href="https://github.com/najib-ullah12345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden lg:flex w-9 h-9 rounded-lg border border-[var(--border)] items-center justify-center text-[var(--text-muted)] hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            <i className="fab fa-github text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/najibullah0048/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden lg:flex w-9 h-9 rounded-lg border border-[var(--border)] items-center justify-center text-[var(--text-muted)] hover:text-gold hover:border-gold/30 transition-all duration-300"
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
            className="lg:hidden text-[var(--text)] text-xl p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--bg)]/98 backdrop-blur-2xl border-t border-[var(--border)] px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => { setMobileOpen(false); setActiveSection(to); }}
                  className={linkClass(to)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-4">
            <button onClick={toggleTheme} className="btn-outline text-xs py-2 px-4">
              <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'} />
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="/Engr-Najib-CV.pdf" download className="btn-gold text-xs py-2 px-4">
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
