import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/personalInfo';

const TYPING_PHRASES = ['Full Stack Developer', 'React.js Enthusiast', 'UI/UX Designer', 'Web Craftsman'];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    const speed = isDeleting ? 35 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < phrase.length) {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(phrase.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((p) => (p + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className={`${mounted ? 'animate-slide-left' : 'opacity-0'}`}>
            <p className="text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text)] mb-3 leading-[1.05]">
              Najib Ullah<br />
              <span className="text-gradient">Khan</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-6 h-10">
              <span className="text-xl md:text-2xl font-semibold text-[var(--text-muted)]">
                A
              </span>
              <span className="text-xl md:text-2xl font-bold text-gradient">
                {displayed}
              </span>
              <span className="text-gold text-2xl animate-blink">|</span>
            </div>

            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed mb-8 max-w-md">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-gold text-sm px-7 py-3.5">
                <i className="fas fa-folder-open" />
                View My Work
              </a>
              <a href="#contact" className="btn-outline text-sm px-7 py-3.5">
                <i className="fas fa-paper-plane" />
                Hire Me
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[var(--border)]">
              {[
                { num: '7+', label: 'Projects' },
                { num: '3+', label: 'Certifications' },
                { num: '1', label: 'Internship' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-gradient">{num}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div className={`flex justify-center lg:justify-end ${mounted ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Avatar ring */}
              <div className="avatar-ring">
                <img
                  src="/images/pic.jpeg"
                  alt={personalInfo.name}
                  className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full object-cover"
                />
              </div>

              {/* Floating status */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3">
                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-[var(--text)] text-xs font-medium">Available for work</span>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 glass-card px-4 py-2.5">
                <p className="text-gold text-xs font-bold">Front-End</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[var(--text-dim)] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
