import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-dark flex items-center justify-center">
      {/* Outer ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold animate-spin" style={{ animationDuration: '1.2s' }} />
        <span className="absolute inset-2 rounded-full border-2 border-transparent border-b-gold/50 animate-spin" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }} />
        <div className="w-12 h-12 rounded-[14px] bg-gold flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
          <span className="text-[#0b0b0f] font-extrabold text-sm tracking-wide">NUK</span>
        </div>
      </div>
    </div>
  );
}
