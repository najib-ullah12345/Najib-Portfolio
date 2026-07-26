import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mb-16 ${center ? 'text-center' : ''} reveal ${visible ? 'visible' : ''}`}
    >
      {eyebrow && (
        <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] mb-4">
        {title}
      </h2>
      <div className={`divider ${center ? 'divider-center' : ''} mb-6`} />
      {subtitle && (
        <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
