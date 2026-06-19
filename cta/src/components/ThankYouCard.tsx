"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Users, Zap, Trophy } from "lucide-react";
import { trackWhatsAppClick, trackEvent } from "@/lib/api";
import { getUTMFromStorage } from "@/lib/utm";

const WHATSAPP_LINK =
	process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
	"https://chat.whatsapp.com/REPLACE_WITH_LINK";

const benefits = [
	{ icon: Users, text: "Exclusive community of motivated learners" },
	{ icon: Zap, text: "Get updates before anyone else" },
	{ icon: Trophy, text: "Premium resources & training materials" },
];

export function ThankYouCard() {
	const [clicked, setClicked] = useState(false);

	const handleWhatsAppClick = async () => {
		setClicked(true);
		const utm = getUTMFromStorage();
		await trackWhatsAppClick(utm);
		await trackEvent("whatsapp_clicked", utm);
		window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
			{/* Background */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle, hsl(var(--foreground) / 0.05) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>
			<motion.div
				className="absolute w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl -top-20 -right-20 pointer-events-none"
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
			/>

			<div className="relative z-10 w-full max-w-md mx-auto">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: "spring", stiffness: 200, damping: 20 }}
					className="relative rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl p-8 shadow-2xl text-center space-y-6"
				>
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 via-transparent to-primary/5 pointer-events-none" />

					{/* Celebration */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{
							scale: 1,
							rotate: [0, -10, 10, -5, 5, 0],
						}}
						transition={{
							scale: {
								type: "spring",
								delay: 0.2,
								stiffness: 200,
								damping: 20,
							},
							rotate: {
								duration: 0.8,
								delay: 0.2,
								ease: "easeInOut",
							},
						}}
						className="text-6xl"
					>
						🎉
					</motion.div>

					<div className="space-y-2">
						<motion.h1
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-2xl sm:text-3xl font-extrabold text-foreground"
						>
							Thanks for joining!
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="text-muted-foreground text-sm leading-relaxed"
						>
							You&apos;re one step away from accessing our exclusive community.
						</motion.p>
					</div>

					{/* Benefits */}
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="space-y-2.5 text-left"
					>
						{benefits.map(({ icon: Icon, text }, i) => (
							<motion.li
								key={i}
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 + i * 0.1 }}
								className="flex items-center gap-3 text-sm text-foreground/80"
							>
								<div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
									<Icon className="w-3.5 h-3.5 text-green-500" />
								</div>
								{text}
							</motion.li>
						))}
					</motion.ul>

					{/* CTA Button */}
					<motion.button
						onClick={handleWhatsAppClick}
						disabled={clicked}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						whileHover={{ scale: clicked ? 1 : 1.02 }}
						whileTap={{ scale: clicked ? 1 : 0.97 }}
						className="w-full py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold text-base flex items-center justify-center gap-2.5 hover:bg-[#20bd58] transition-all duration-200 shadow-lg shadow-green-500/30 disabled:opacity-70"
					>
						{clicked ? (
							<>
								<CheckCircle2 className="w-5 h-5" />
								Opening WhatsApp...
							</>
						) : (
							<>
								<MessageCircle className="w-5 h-5" />
								Join WhatsApp Community
							</>
						)}
					</motion.button>

					<p className="text-xs text-muted-foreground">
						📱 Click the button above to join our free WhatsApp group
					</p>
				</motion.div>
			</div>
		</div>
	);
}
