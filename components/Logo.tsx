export default function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe/Compass Icon */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      
      {/* Compass Points */}
      <line x1="20" y1="2" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="34" x2="20" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="20" x2="6" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      
      {/* Travel Path */}
      <path
        d="M 12 20 Q 20 12 28 20 Q 20 28 12 20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Center Dot */}
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

