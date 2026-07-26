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
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
          <span className="text-dark font-bold text-xl">N</span>
        </div>
      </div>
    </div>
  );
}
