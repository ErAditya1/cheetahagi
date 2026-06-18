'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { emailSchema, EmailFormData } from '@/lib/validations';
import { submitNewsletter } from '@/lib/api';
import { trackEvent } from '@/lib/api';
import { UTMParams } from '@/types/lead';

interface EmailCaptureFormProps {
  utm: UTMParams;
  onSuccess: (email: string) => void;
}

export function EmailCaptureForm({ utm, onSuccess }: EmailCaptureFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  // Auto-focus on mount
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: EmailFormData) => {
    try {
      await submitNewsletter(data.email, utm);
      await trackEvent('email_submitted', { email: data.email, ...utm });
      toast.success('Email confirmed! Complete your profile below.');
      onSuccess(data.email);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  const { ref: rhfRef, ...restRegister } = register('email');

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full space-y-3"
    >
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            1
          </div>
          <span className="text-xs text-muted-foreground font-medium">Step 1 of 2</span>
        </div>
        <div className="flex-1 h-0.5 bg-muted rounded-full">
          <div className="w-1/2 h-full bg-primary rounded-full" />
        </div>
      </div>

      <div className="relative">
        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          {...restRegister}
          ref={(el) => {
            rhfRef(el);
            (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
          }}
          type="email"
          placeholder="your@email.com"
          disabled={isSubmitting}
          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-border bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 text-sm"
        />
      </div>

      {errors.email && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive text-xs font-medium"
        >
          {errors.email.message}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            Continue
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>

      <p className="text-center text-xs text-muted-foreground">
        🔒 No spam. Unsubscribe anytime.
      </p>
    </motion.form>
  );
}
