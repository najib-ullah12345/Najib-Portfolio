import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/personalInfo';

const TYPING_PHRASES = [
  'Front-End Developer',
  'React.js Enthusiast',
  'UI/UX Designer',
  'Web Craftsman',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < phrase.length) {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(phrase.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gold text-sm font-medium">{personalInfo.availability}</span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          {personalInfo.name}
        </h1>

        {/* Typing animation */}
        <div
          className="text-2xl md:text-4xl font-semibold mb-6 h-12 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="text-gradient">{displayed}</span>
          <span className="text-gold ml-1 animate-pulse">|</span>
        </div>

        {/* Tagline */}
        <p
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.9s' }}
        >
          <a
            href={`#projects`}
            className="btn-primary text-base px-8 py-3.5"
          >
            <i className="fas fa-folder-open" />
            View Projects
          </a>
          <a
            href={`#contact`}
            className="btn-outline text-base px-8 py-3.5"
          >
            <i className="fas fa-paper-plane" />
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-4 mt-12 animate-fade-up"
          style={{ animationDelay: '1.1s' }}
        >
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
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-300 hover:scale-110"
            >
              <i className={icon} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1.5s' }}
        >
          <i className="fas fa-chevron-down text-gold/40 text-xl" />
        </div>
      </div>
    </section>
  );
}
