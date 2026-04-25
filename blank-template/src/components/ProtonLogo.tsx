export default function ProtonLogo({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: 'relative', width: '220px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }} width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#1cb0f6" strokeWidth="3">
          <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="16" transform="rotate(120 50 50)" />
        </g>
        <circle cx="50" cy="50" r="9" fill="#1cb0f6" />
        <circle cx="28" cy="18" r="4" fill="#1cb0f6" />
      </svg>
      <span style={{ position: 'relative', color: 'var(--text-primary, #0B1F33)', fontSize: '28px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.5px', zIndex: 2 }}>
        Protonlab
      </span>
    </div>
  );
}
