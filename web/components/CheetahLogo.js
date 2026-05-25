export default function CheetahLogo({ className = 'w-10 h-10', animated = false }) {
  return (
    <img
      src="/icon.png"
      className={`${className} object-contain ${animated ? 'animate-pulse-strike' : ''}`}
      alt="Cheetah AGI logomark"
      loading="eager"
      decoding="async"
    />
  );
}
