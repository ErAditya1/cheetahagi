import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import ManifestoText from '@/components/ui/ManifestoText';

export default function Manifesto() {
  return (
    <section className="py-[140px] max-md:py-20 bg-obsidian relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212,168,79,0.06), transparent 70%)'
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow>MANIFESTO · I</Eyebrow>
        </Reveal>
        <ManifestoText />
        <div className="divider-ornament">
          <span className="diamond" />
        </div>
      </div>
    </section>
  );
}
