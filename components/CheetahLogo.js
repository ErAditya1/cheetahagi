// Cheetah-robot mark: a stylized profile that reads as both predator and machine.
// Built with geometric primitives so it scales crisply and hints at "engineered speed."
export default function CheetahLogo({ className = 'w-10 h-10', animated = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cheetah AGI logomark"
    >
      <defs>
        <linearGradient id="cheetah-strike" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C5FF3D" />
          <stop offset="100%" stopColor="#8FCC1E" />
        </linearGradient>
        <linearGradient id="cheetah-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5F2EA" />
          <stop offset="100%" stopColor="#C9C5B8" />
        </linearGradient>
      </defs>

      {/* Speed lines behind the mark — kinetic motif */}
      <g opacity="0.4">
        <line x1="2" y1="22" x2="14" y2="22" stroke="#C5FF3D" strokeWidth="1" strokeLinecap="round" />
        <line x1="2" y1="32" x2="10" y2="32" stroke="#C5FF3D" strokeWidth="1" strokeLinecap="round" />
        <line x1="2" y1="42" x2="16" y2="42" stroke="#C5FF3D" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Cheetah head — angular profile with mechanical jaw */}
      <path
        d="M22 18 L34 14 L46 18 L52 24 L52 32 L48 38 L44 38 L42 44 L38 46 L34 44 L30 46 L26 44 L24 38 L20 36 L18 30 L20 24 Z"
        fill="url(#cheetah-body)"
        stroke="#08080C"
        strokeWidth="0.5"
      />

      {/* Cyber eye — the predator focus */}
      <circle cx="38" cy="26" r="2.5" fill="url(#cheetah-strike)">
        {animated && (
          <animate attributeName="r" values="2.5;3;2.5" dur="2s" repeatCount="indefinite" />
        )}
      </circle>
      <circle cx="38" cy="26" r="0.8" fill="#08080C" />

      {/* Cheek spots — robot panel lines */}
      <circle cx="32" cy="32" r="0.8" fill="#08080C" />
      <circle cx="36" cy="36" r="0.8" fill="#08080C" />
      <circle cx="42" cy="32" r="0.8" fill="#08080C" />

      {/* Mechanical seam down the muzzle */}
      <line x1="42" y1="38" x2="42" y2="44" stroke="#08080C" strokeWidth="0.6" />

      {/* The attacking paw — extended forward, claws out */}
      <g>
        <path
          d="M48 44 L56 46 L58 50 L56 54 L52 54 L50 50 Z"
          fill="url(#cheetah-strike)"
          stroke="#08080C"
          strokeWidth="0.5"
        />
        {/* Claws */}
        <path d="M56 46 L58 44" stroke="url(#cheetah-strike)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M58 50 L60 50" stroke="url(#cheetah-strike)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M56 54 L58 56" stroke="url(#cheetah-strike)" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Antenna tip — the "AGI" signal */}
      <line x1="34" y1="14" x2="34" y2="9" stroke="#C5FF3D" strokeWidth="1" strokeLinecap="round" />
      <circle cx="34" cy="8" r="1.2" fill="#C5FF3D">
        {animated && (
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        )}
      </circle>
    </svg>
  );
}
