'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, User, Phone, MessageCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { profileSchema, ProfileFormData } from '@/lib/validations';
import { submitLead, trackEvent } from '@/lib/api';
import { UTMParams } from '@/types/lead';
import { useRouter } from 'next/navigation';

interface CompleteProfileModalProps {
  open: boolean;
  email: string;
  utm: UTMParams;
  onClose: () => void;
}

export function CompleteProfileModal({
  open,
  email,
  utm,
  onClose,
}: CompleteProfileModalProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: { email },
  });

  // Sync email when it changes
  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  // Reset form on close
  useEffect(() => {
    if (!open) reset({ email });
  }, [open, email, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const result = await submitLead(
        { name: data.name, email: data.email, phone: data.phone },
        utm
      );
      await trackEvent('profile_completed', {
        email: data.email,
        ...utm,
      });
      await trackEvent('lead_generated', {
        leadId: result.id,
        email: data.email,
        ...utm,
      });
      toast.success("You're in! Redirecting...");
      onClose();
      router.push('/thank-you');
    } catch (err) {
      toast.error('Failed to save your profile. Please try again.');
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
          <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl p-6"
            >
              {/* Glassmorphism accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

              {/* Progress */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                    ✓
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    2
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Step 2 of 2</span>
                </div>
                <div className="flex-1 h-0.5 bg-muted rounded-full">
                  <div className="w-full h-full bg-primary rounded-full" />
                </div>
              </div>

              <DialogHeader className="mb-5">
                <DialogTitle className="text-xl font-bold text-foreground">
                  Complete Your Profile
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  One last step to join our exclusive WhatsApp community.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Full Name
                  </label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-3 rounded-xl border border-border bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 text-sm"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs font-medium">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                      +91
                    </span>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 disabled:opacity-50 text-sm"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-destructive text-xs font-medium">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email (readonly) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    readOnly
                    disabled
                    className="w-full px-3.5 py-3 rounded-xl border border-border bg-muted/30 text-muted-foreground text-sm cursor-not-allowed"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-3.5 px-6 mt-2 rounded-xl bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#20bd58] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-green-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      Join WhatsApp Community
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
