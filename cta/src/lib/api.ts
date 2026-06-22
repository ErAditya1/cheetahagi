import { UTMParams, ApiResponse } from "@/types/lead";
import {
	submitNewsletterAction,
	submitLeadAction,
	trackWhatsAppClickAction,
	trackEventAction,
} from "./actions";

const LEAD_EMAIL_STORAGE_KEY = "lead_email";

/**
 * Newsletter Signup
 */
export async function submitNewsletter(
	email: string,
	utm: UTMParams = {},
): Promise<ApiResponse<unknown>> {
	return submitNewsletterAction(email, utm);
}

/**
 * Lead Submission
 */
export async function submitLead(
	data: {
		name?: string;
		email?: string;
		phone?: string;
	},
	utm: UTMParams = {},
): Promise<ApiResponse<unknown>> {
	const result = await submitLeadAction(data, utm);

	const email = data?.email?.trim();
	if (email && typeof window !== "undefined") {
		localStorage.setItem(LEAD_EMAIL_STORAGE_KEY, email);
	}

	return result;
}

/**
 * WhatsApp Click Tracking
 */
export async function trackWhatsAppClick(utm: UTMParams = {}): Promise<void> {
	try {
		const email =
			typeof window !== "undefined"
				? localStorage.getItem(LEAD_EMAIL_STORAGE_KEY) || ""
				: "";

		await trackWhatsAppClickAction(email, utm);
	} catch (error) {
		console.error("trackWhatsAppClick error:", error);
	}
}

/**
 * Generic Analytics Tracking
 */
export async function trackEvent(
	eventName: string,
	metadata?: Record<string, unknown>,
): Promise<void> {
	return trackEventAction(eventName, metadata);
}
