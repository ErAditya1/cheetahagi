'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EmailCaptureForm } from './EmailCaptureForm';
import { CompleteProfileModal } from './CompleteProfileModal';
import { UTMParams } from '@/types/lead';

// Animated floating orb
function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      animate={{
        y: [-20, 20, -20],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

interface HeroSectionProps {
  utm: UTMParams;
}

export function HeroSection({ utm }: HeroSectionProps) {
  const [capturedEmail, setCapturedEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleEmailSuccess = (email: string) => {
    setCapturedEmail(email);
    setModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      {/* Background orbs */}
      <FloatingOrb className="w-96 h-96 bg-primary top-10 -left-32" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-purple-500 bottom-20 -right-24" delay={3} />
      <FloatingOrb className="w-60 h-60 bg-cyan-400 top-1/2 left-1/2 -translate-x-1/2" delay={5} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--foreground) / 0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Exclusive Community Access
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground"
        >
          Get Free{' '}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Resources,
          </span>{' '}
          Updates &amp;{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-primary bg-clip-text text-transparent">
            Exclusive
          </span>{' '}
          Opportunities
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto"
        >
          Join hundreds of learners receiving premium content and updates
          directly.
        </motion.p>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {['🎓', '💡', '🚀', '📈', '🎯'].map((emoji, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-sm"
              >
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            <span className="text-foreground font-bold">500+</span> learners already joined
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6 shadow-2xl"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
          <EmailCaptureForm utm={utm} onSuccess={handleEmailSuccess} />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {['✅ Free forever', '🔒 100% secure', '📱 WhatsApp community'].map(
            (item) => (
              <span key={item} className="text-xs text-muted-foreground">
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Profile completion modal */}
      <CompleteProfileModal
        open={modalOpen}
        email={capturedEmail}
        utm={utm}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
