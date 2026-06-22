import { UTMParams, ApiResponse } from "@/types/lead";
import {
	submitNewsletterAction,
	submitLeadAction,
	trackWhatsAppClickAction,
	trackEventAction,
} from "./actions";

const LEAD_EMAIL_STORAGE_KEY = "lead_email";

/**
 * Replace undefined/null values
 */
function sanitizeRecord(data: Record<string, any>) {
	return Object.fromEntries(
		Object.entries(data).map(([key, value]) => [
			key,
			value === undefined || value === null ? "" : value,
		]),
	);
}

/**
 * Create record in NocoDB
 */
async function createRecord(
	tableId: string,
	data: Record<string, any>,
): Promise<any> {
	const payload = [
		{
			fields: sanitizeRecord(data),
		},
	];

	const res = await fetch(`${NOCODB_URL}/${tableId}/records`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"xc-token": TOKEN,
		},
		body: JSON.stringify(payload),
	});

	const responseText = await res.text();

	if (!res.ok) {
		console.error("NocoDB Create Error:", {
			status: res.status,
			tableId,
			payload,
			errorText: responseText,
		});

		throw new Error(responseText);
	}

	const result = JSON.parse(responseText);

	return result?.records?.[0] || result;
}

/**
 * Update existing record
 */
async function updateRecord(
	tableId: string,
	recordId: number,
	fields: Record<string, any>,
): Promise<any> {
	const payload = [
		{
			id: recordId,
			fields: sanitizeRecord(fields),
		},
	];

	const res = await fetch(`${NOCODB_URL}/${tableId}/records`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"xc-token": TOKEN,
		},
		body: JSON.stringify(payload),
	});

	const responseText = await res.text();

	if (!res.ok) {
		console.error("NocoDB Update Error:", {
			status: res.status,
			tableId,
			payload,
			errorText: responseText,
		});

		throw new Error(responseText);
	}

	const result = JSON.parse(responseText);

	return result?.records?.[0] || result;
}

/**
 * Find lead by email using NocoDB filter
 */
async function findRecordByEmail(email: string) {
	if (!email) return null;

	const where = `(email,eq,${email})`;

	const res = await fetch(
		`${NOCODB_URL}/${FORMS_TABLE}/records?pageSize=1&where=${encodeURIComponent(
			where,
		)}`,
		{
			headers: {
				"xc-token": TOKEN,
			},
		},
	);

	const responseText = await res.text();

	if (!res.ok) {
		console.error("Find Record Error:", {
			email,
			errorText: responseText,
		});

		throw new Error(responseText);
	}

	const data = JSON.parse(responseText);

	return data?.records?.[0] || null;
}

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

