export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8 text-[9px] rounded-[10px]',
    md: 'w-10 h-10 text-[11px] rounded-[12px]',
    lg: 'w-12 h-12 text-sm rounded-[14px]',
  };

  return (
    <span
      className={`inline-flex items-center justify-center bg-gold text-[#0b0b0f] font-extrabold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.18)] select-none ${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      NUK
    </span>
  );
}
