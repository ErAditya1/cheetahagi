import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Free Resources & Community Access | Join 500+ Learners",
	description:
		"Join our community to receive exclusive updates, training materials, and opportunities. Get free resources and premium content delivered directly to you.",
	keywords: [
		"free resources",
		"online community",
		"learning",
		"WhatsApp community",
		"newsletter",
		"training materials",
	],
	authors: [{ name: "Cheetah AGI" }],
	openGraph: {
		type: "website",
		locale: "en_IN",
		title: "Free Resources & Community Access",
		description:
			"Join hundreds of learners receiving premium content and updates directly.",
		siteName: "Cheetah AGI",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resources & Community Access",
		description:
			"Join hundreds of learners receiving premium content and updates directly.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Free Resources & Community Access",
	description:
		"Join our community to receive exclusive updates, training materials, and opportunities.",
	url: "https://cheetahagi.com",
	publisher: {
		"@type": "Organization",
		name: "Cheetah AGI",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable} data-scroll-behavior="smooth">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="font-sans antialiased bg-background text-foreground">
				<AnalyticsProvider
					gaId={process.env.NEXT_PUBLIC_GA_ID}
					metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
				/>
				{children}
				<Toaster
					position="top-center"
					toastOptions={{
						classNames: {
							toast:
								"bg-background/90 backdrop-blur-xl border border-border text-foreground shadow-2xl rounded-xl",
							success: "!border-green-500/30",
							error: "!border-destructive/30",
						},
					}}
				/>
			</body>
		</html>
	);
}
