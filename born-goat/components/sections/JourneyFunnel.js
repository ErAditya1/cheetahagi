import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

const stages = [
  { num: '01', title: 'RAW INGESTION', body: 'On-course scorer mobile inputs and live telemetry feeds captured instantly at origin.' },
  { num: '02', title: 'CLEANSING', body: 'Automated database parsing and sanity filters validating raw match events in under 5ms.' },
  { num: '03', title: 'ENRICHMENT', body: 'Calculating player expectation indexes, handicap metrics, and fantasy score multipliers.' },
  { num: '04', title: 'MODELING', body: 'AI win-probability predictor engines running concurrent ball-by-ball simulators.' },
  { num: '05', title: 'BROADCAST', body: 'Low-latency WebSocket feeds served to active fan widgets and linear TV trucks.' }
];

export default function JourneyFunnel() {
  return (
    <section className="py-[140px] max-md:py-20 bg-slate-900 border-t border-line relative overflow-hidden">
      <div
        className="electric-streak"
        style={{ top: '50%', left: 0, right: 0, width: '100%', opacity: 0.4 }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">THE PIPELINE · III</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            FROM FIELD
            <br />
            TO <span className="text-sports-cyan">LIVE FEEDS.</span>
          </h2>
          <p className="text-slate-300 text-[17px] leading-[1.7] max-w-[620px] mt-7">
            How raw sport events are converted into low-latency analytics streams. We ingest, process, enrich, model, and broadcast data to millions of screens.
          </p>
        </Reveal>

        <div className="relative">
          <div
            className="absolute top-9 left-0 right-0 h-px z-[1] max-md:hidden"
            style={{
              background:
                'linear-gradient(90deg, transparent, #06B6D4 15%, #06B6D4 85%, transparent)',
              opacity: 0.5
            }}
          />
          <div className="grid grid-cols-5 max-md:grid-cols-1 gap-8 max-md:gap-6 relative z-[2]">
            {stages.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-left group">
                  <div
                    className="font-display text-[56px] leading-none mb-8 tracking-cinematic bg-slate-900 inline-block pr-4 transition-colors duration-[400ms]"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '1.5px #EC4899'
                    }}
                  >
                    {s.num}
                  </div>
                  <h4 className="font-display text-[22px] tracking-[0.02em] uppercase mb-3 text-white">
                    {s.title}
                  </h4>
                  <p className="text-sm text-titanium leading-[1.65]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
