import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { athletes, getAthlete } from '@/lib/content';
import { athleteSchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return athletes.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const athlete = getAthlete(params.slug);
  if (!athlete) return {};
  return {
    title: `${athlete.name} · ${athlete.role}`,
    description: athlete.bio,
    alternates: { canonical: `/athletes/${athlete.slug}` }
  };
}

export default function AthleteDetailPage({ params }) {
  const athlete = getAthlete(params.slug);
  if (!athlete) notFound();

  // Pick related athletes in same sport or other categories
  const related = athletes.filter(a => a.slug !== athlete.slug).slice(0, 2);

  return (
    <>
      <header className="pt-[200px] pb-[80px] max-md:pt-32 max-md:pb-12 relative overflow-hidden border-b border-[var(--border-subtle)] bg-void">
        <div
          className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 55%)',
            opacity: 0.4,
            filter: 'blur(80px)'
          }}
        />
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-[5]">
          <div className="font-mono text-[11px] tracking-extra-wide uppercase text-muted mb-8 font-bold">
            <Link href="/" className="hover:text-[var(--gold-primary)] transition-colors text-decoration-none">
              BORN GOAT
            </Link>
            <span className="text-[var(--gold-primary)] mx-3">/</span>
            <Link href="/athletes" className="hover:text-[var(--gold-primary)] transition-colors text-decoration-none">
              OUR ROSTER
            </Link>
            <span className="text-[var(--gold-primary)] mx-3">/</span>
            <span>{athlete.name.toUpperCase()}</span>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] max-md:grid-cols-1 gap-12 items-center">
            {/* Left: Athlete portrait card */}
            <div className="relative aspect-[3/4] rounded overflow-hidden border border-[var(--border-gold)] shadow-gold-glow max-w-[360px] max-md:mx-auto">
              <img 
                src={athlete.imageAsset} 
                alt={athlete.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <span className="athlete-card__sport-badge">{athlete.sport}</span>
            </div>

            {/* Right: Athlete overview details */}
            <div>
              <div className="flex gap-4 mb-6 flex-wrap items-center">
                <span className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] border border-[var(--border-gold)] px-3 py-1 font-bold">
                  {athlete.role}
                </span>
                <span className="font-mono text-[11px] tracking-extra-wide uppercase text-muted">
                  {athlete.flag} {athlete.country} · {athlete.age}
                </span>
              </div>

              <h1 className="font-heading text-[clamp(44px,7vw,85px)] leading-[0.92] tracking-cinematic uppercase text-primary">
                {athlete.name}
              </h1>

              <blockquote className="mt-10 text-[20px] text-[var(--gold-primary)] italic leading-[1.55] max-w-[820px] font-medium border-l-2 border-[var(--border-gold)] pl-6">
                {athlete.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(athleteSchema(athlete)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Our Roster', path: '/athletes' },
              { name: athlete.name, path: `/athletes/${athlete.slug}` }
            ])
          )
        }}
      />

      {/* CORE BIOGRAPHY */}
      <section className="py-[100px] max-md:py-16 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-[1.5fr_1fr] max-md:grid-cols-1 gap-16 items-start">
            <Reveal>
              <div>
                <span className="text-label text-xs block mb-4">THE STORY</span>
                <h2 className="font-heading text-4xl uppercase text-primary mb-8">BIOGRAPHY</h2>
                <p className="text-[18px] text-secondary leading-relaxed mb-8">
                  {athlete.bio}
                </p>
                <p className="text-secondary leading-relaxed">
                  As part of Born Goat's elite roster, we architect campaigns and transfers that respect the athlete's integrity and long-term security. Through 360-degree support, we secure global sportswear deals and optimize international club transfers.
                </p>
              </div>
            </Reveal>

            {/* Quick Metrics panel */}
            <Reveal delay={60}>
              <div className="bg-dark border border-[var(--border-subtle)] p-8 rounded-[2px]">
                <h3 className="font-heading text-lg font-bold uppercase text-primary mb-6 pb-4 border-b border-[var(--border-subtle)]">
                  REPRESENTATION STATS
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {athlete.stats.map((st, idx) => (
                    <div key={idx}>
                      <span className="font-display text-4xl text-[var(--gold-primary)] block leading-none mb-1">
                        {st.value}
                      </span>
                      <span className="text-xs uppercase text-muted tracking-wider block font-mono">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* TROPHY CABINET */}
      <section className="py-[100px] max-md:py-16 bg-dark">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-12 text-center">
            <span className="text-label text-xs block mb-4">TROPHY CABINET</span>
            <h2 className="font-heading text-4xl uppercase text-primary">HONORS & ACHIEVEMENTS</h2>
          </Reveal>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-w-[900px] mx-auto">
            {athlete.trophyShelf.map((trophy, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="trophy-card">
                  <span className="trophy-card__icon" aria-hidden="true">{trophy.icon}</span>
                  <h3 className="trophy-card__title">{trophy.name}</h3>
                  <span className="trophy-card__count">{trophy.count}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* CAREER TIMELINE */}
      <section className="py-[100px] max-md:py-16 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-12 text-center">
            <span className="text-label text-xs block mb-4">CAREER STAGES</span>
            <h2 className="font-heading text-4xl uppercase text-primary">CHRONOLOGICAL JOURNEY</h2>
          </Reveal>

          <div className="timeline max-w-[800px] mx-auto reveal visible">
            {athlete.timeline.map((event, idx) => (
              <div key={idx} className="timeline__item">
                <div className={`timeline__marker ${idx === athlete.timeline.length - 1 ? 'timeline__marker--gold' : ''}`}></div>
                <div className="timeline__content">
                  <span className="text-label text-xs block font-mono">{event.year}</span>
                  <h3 className="timeline__title">{event.title}</h3>
                  <p className="text-secondary text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* SPONSORSHIPS */}
      <section className="py-[60px] bg-dark text-center overflow-hidden">
        <div className="container">
          <p className="text-label text-xs mb-8">ENDORSEMENT PORTFOLIO</p>
          <div className="flex gap-12 flex-wrap items-center justify-center">
            {athlete.sponsors.map((sp, idx) => (
              <span key={idx} className="font-heading text-2xl max-sm:text-lg text-secondary tracking-widest uppercase transition-colors hover:text-[var(--gold-primary)] cursor-default">
                {sp}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* OTHER ROSTER CASES */}
      {related.length > 0 && (
        <section className="py-[100px] max-md:py-16 bg-void border-t border-[var(--border-subtle)]">
          <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
            <Reveal className="mb-12">
              <span className="text-label block mb-4">CONTINUE READING</span>
              <h3 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-cinematic uppercase mt-7">
                OTHER <span className="text-gold-gradient">ATHLETES</span>
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <Link
                    href={`/athletes/${a.slug}`}
                    className="block bg-dark border border-[var(--border-subtle)] hover:border-[var(--border-gold)] transition-all duration-[400ms] p-10 max-sm:p-7 group text-decoration-none"
                  >
                    <div className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] mb-4 font-bold">
                      {a.sport.toUpperCase()} · {a.role.toUpperCase()}
                    </div>
                    <h4 className="font-heading text-[36px] leading-[0.95] tracking-cinematic uppercase mb-4 text-primary">
                      {a.name}
                    </h4>
                    <p className="text-[14px] text-secondary leading-[1.7] mb-6">
                      {a.bio.slice(0, 140)}…
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                      VIEW PROFILE
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        eyebrow="INQUIRE FOR APPEARANCES"
        heading="REQUEST SPONSORSHIP"
        goldHeading="OR DEALS."
        sub="Contact our endorsement desk to pitch sponsorship deals, media appearances, or commercial partnerships for our athletes."
      />
    </>
  );
}
