import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mb-16 ${center ? 'text-center' : ''} reveal ${visible ? 'visible' : ''}`}
    >
      {eyebrow && (
        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
