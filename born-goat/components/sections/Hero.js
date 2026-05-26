'use client'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';

export default function SportsHero() {
  const [activeMatch, setActiveMatch] = useState(0);

  const liveMatches = [
    { team1: 'Mumbai', team2: 'Delhi', score1: 156, score2: 142, status: 'LIVE', sport: 'Cricket' },
    { team1: 'Chelsea', team2: 'Liverpool', score1: 2, score2: 1, status: 'LIVE', sport: 'Football' },
    { team1: 'Lakers', team2: 'Celtics', score1: 98, score2: 102, status: 'LIVE', sport: 'Basketball' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMatch((prev) => (prev + 1) % liveMatches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="min-h-screen pt-24 pb-20 relative overflow-hidden flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Dynamic neon top glow */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[100vw] h-[70vw] pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, rgba(236,72,153,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'energyPulse 6s ease-in-out infinite'
        }}
      />

      {/* Energy streaks - animated */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[1]">
        <div
          className="absolute w-96 h-1 bg-gradient-to-r from-blue-500 to-transparent"
          style={{
            top: '20%',
            left: '-5%',
            filter: 'blur(15px)',
            animation: 'horizontalStreak 4s ease-in-out infinite',
            opacity: 0.6
          }}
        />
        <div
          className="absolute w-80 h-1 bg-gradient-to-r from-pink-500 to-transparent"
          style={{
            top: '50%',
            right: '-5%',
            filter: 'blur(15px)',
            animation: 'horizontalStreak 5s ease-in-out infinite reverse',
            animationDelay: '0.5s',
            opacity: 0.5
          }}
        />
        <div
          className="absolute w-96 h-1 bg-gradient-to-r from-cyan-400 to-transparent"
          style={{
            top: '75%',
            left: '10%',
            filter: 'blur(15px)',
            animation: 'horizontalStreak 6s ease-in-out infinite',
            animationDelay: '1s',
            opacity: 0.4
          }}
        />
      </div>

      {/* Rotating grid ornament */}
      <svg
        className="absolute top-1/3 -right-1/4 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] animate-slow-rotate z-[1]"
        viewBox="0 0 800 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#sportGrad)" strokeWidth="0.6" opacity="0.15">
          <circle cx="400" cy="400" r="360" />
          <circle cx="400" cy="400" r="280" />
          <circle cx="400" cy="400" r="200" />
          <circle cx="400" cy="400" r="120" />
        </g>
        <g stroke="url(#sportGrad)" strokeWidth="0.8" opacity="0.2">
          <line x1="400" y1="0" x2="400" y2="800" />
          <line x1="0" y1="400" x2="800" y2="400" />
          <line x1="150" y1="150" x2="650" y2="650" />
          <line x1="650" y1="150" x2="150" y2="650" />
        </g>
      </svg>

      <div className="relative z-[5] w-full max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        {/* Header tags */}
        <div className="flex gap-4 items-center flex-wrap mb-[50px]">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase">
            ⚡ LIVE SPORTS HUB
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-cyan-300 uppercase font-mono tracking-wider">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50" />
            43 LIVE MATCHES · WORLDWIDE
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-black text-[clamp(52px,10vw,180px)] leading-[0.9] tracking-tight uppercase mb-12">
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise">WHERE</span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="inline-block animate-rise bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent"
              style={{ animationDelay: '0.1s', textShadow: 'none' }}
            >
              CHAMPIONS
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise" style={{ animationDelay: '0.2s' }}>
              ARE MADE<span className="text-pink-500 animate-pulse">.</span>
            </span>
          </span>
        </h1>

        {/* Live scoreboard card */}
        <div
          className="mb-16 p-6 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-950/40 to-slate-900/40 backdrop-blur-md animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50" />
              <span className="text-sm font-bold text-pink-400 uppercase tracking-widest">NOW PLAYING</span>
            </div>
            <span className="text-xs text-cyan-300 font-mono">{liveMatches[activeMatch].sport}</span>
          </div>

          <div className="grid grid-cols-3 gap-6 items-center">
            {/* Team 1 */}
            <div className="text-center">
              <p className="text-sm text-cyan-300/70 mb-2 uppercase tracking-wide">Team A</p>
              <h3 className="text-2xl font-black text-white mb-2">{liveMatches[activeMatch].team1}</h3>
              <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {liveMatches[activeMatch].score1}
              </p>
            </div>

            {/* VS badge */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 font-bold text-xs uppercase">
                VS
              </div>
              <span className="text-xs text-pink-400 font-bold mt-3 uppercase">{liveMatches[activeMatch].status}</span>
            </div>

            {/* Team 2 */}
            <div className="text-center">
              <p className="text-sm text-pink-300/70 mb-2 uppercase tracking-wide">Team B</p>
              <h3 className="text-2xl font-black text-white mb-2">{liveMatches[activeMatch].team2}</h3>
              <p className="text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                {liveMatches[activeMatch].score2}
              </p>
            </div>
          </div>

          {/* Match indicators */}
          <div className="flex gap-2 mt-6 pt-6 border-t border-blue-400/20">
            {liveMatches.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMatch(idx)}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${idx === activeMatch
                  ? 'bg-gradient-to-r from-blue-400 to-pink-500 shadow-lg'
                  : 'bg-slate-700 hover:bg-slate-600'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Description and CTAs */}
        <div className="grid grid-cols-[1.2fr_1fr] max-md:grid-cols-1 gap-[60px] max-md:gap-9 items-end mb-[80px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-[clamp(16px,1.5vw,20px)] text-slate-200 max-w-[550px] leading-[1.6] font-medium">
            Experience <span className="text-cyan-300 font-bold">live-action analytics</span>, real-time scores, and exclusive player insights. Stay connected to every heartbeat of the game.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-end max-md:justify-start">
            <Link href="/live">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm">
                Watch Now <span>→</span>
              </button>
            </Link>
            <Link href="/leagues">
              <button className="px-8 py-4 rounded-lg border-2 border-pink-500 text-pink-400 font-bold uppercase tracking-widest hover:bg-pink-500/10 transition-all duration-300 text-sm">
                Explore Leagues
              </button>
            </Link>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-6 border-t border-blue-400/20 pt-10 animate-fade-in" style={{ animationDelay: '1s' }}>
          {[
            { value: '2.4B+', label: '👥 Global Fans', icon: '🌍' },
            { value: '50+', label: '🏆 Sports Covered', icon: '⚽' },
            { value: '180', label: '🌐 Countries', icon: '🗺️' },
            { value: '24/7', label: '📡 Live Coverage', icon: '🎬' }
          ].map((stat, i) => (
            <div
              key={i}
              className={`px-7 max-sm:px-0 relative group cursor-pointer transition-all duration-300 hover:scale-105 ${i === 0 ? 'pl-0 border-l-0' : 'border-l border-blue-400/20 max-sm:border-l-0'
                }`}
            >
              <span className="absolute -top-px left-0 w-6 h-px bg-gradient-to-r from-blue-400 to-pink-500" style={i === 0 ? {} : { left: '-1px' }} />
              <div className="font-black text-4xl leading-none tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-slate-400 mt-3 group-hover:text-cyan-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, 0) scale(1.12); }
        }

        @keyframes horizontalStreak {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes rise {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slow-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-rise {
          animation: rise 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slow-rotate {
          animation: slow-rotate 30s linear infinite;
        }
      `}</style>
    </header>
  );
}