import { UTMParams, ApiResponse } from "@/types/lead";

const NOCODB_URL = "https://db.feedingtrends.com/api/v3/data/pvmdy4nc8k9r5se";

const FORMS_TABLE = "mkwjonegcqtbup9";
const ACTIVITIES_TABLE = "mbx38zqkl9f2i40";

const TOKEN = "nc_pat_fA5KGqRqKkjm1rdkyCAk2MuAWzdveNPUGPL1Ipcj";

const DEFAULT_UTM = {
	utm_source: "",
	utm_medium: "",
	utm_campaign: "",
	utm_term: "",
	utm_content: "",
};

/**
 * Sanitize payload before sending to NocoDB
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
 * Update record in NocoDB
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
 * Find existing lead by email
 */
async function findRecordByEmail(email: string) {
	const res = await fetch(
		`${NOCODB_URL}/${FORMS_TABLE}/records?pageSize=1&where=(email,eq,${encodeURIComponent(
			email,
		)})`,
		{
			headers: {
				"xc-token": TOKEN,
			},
		},
	);

	if (!res.ok) {
		const errorText = await res.text();

		console.error("Find Record Error:", {
			email,
			errorText,
		});

		throw new Error(errorText);
	}

	const data = await res.json();

	return data?.records?.[0] || null;
}

/**
 * Newsletter signup
 */
export async function submitNewsletter(
	email: string,
	utm: UTMParams = {},
): Promise<ApiResponse<any>> {
	const existing = await findRecordByEmail(email);

	if (existing) {
		return existing;
	}

	return createRecord(FORMS_TABLE, {
		email: email || "",

		type: ["newsletter"],

		source: "cta-funnel",
		stage: "newsletter",

		joined_whatsapp: false,

		...DEFAULT_UTM,
		...sanitizeRecord(utm),
	});
}

/**
 * Lead form submission
 * Updates newsletter record if email already exists
 */
export async function submitLead(
	data: {
		name?: string;
		email?: string;
		phone?: string;
	},
	utm: UTMParams = {},
): Promise<ApiResponse<any>> {
	const email = data?.email?.trim() || "";

	if (!email) {
		throw new Error("Email is required");
	}

	const existing = await findRecordByEmail(email);

	if (existing) {
		const existingTypes = Array.isArray(existing?.fields?.type)
			? existing.fields.type
			: [];

		const updatedTypes = [
			...new Set([...existingTypes, "newsletter", "whatsapp-funnel"]),
		];

		return updateRecord(FORMS_TABLE, existing.id, {
			name: data?.name || "",
			phone: data?.phone || "",

			stage: "profile",
			joined_whatsapp: false,

			type: updatedTypes,

			...DEFAULT_UTM,
			...sanitizeRecord(utm),
		});
	}

	return createRecord(FORMS_TABLE, {
		name: data?.name || "",
		email,
		phone: data?.phone || "",

		source: "cta-funnel",
		stage: "profile",

		joined_whatsapp: false,

		type: ["whatsapp-funnel"],

		...DEFAULT_UTM,
		...sanitizeRecord(utm),
	});
}

/**
 * WhatsApp button click tracking
 */
export async function trackWhatsAppClick(utm: UTMParams = {}): Promise<void> {
	try {
		await createRecord(FORMS_TABLE, {
			source: "cta-funnel",
			stage: "whatsapp-clicked",

			joined_whatsapp: true,

			type: ["whatsapp-funnel"],

			...DEFAULT_UTM,
			...sanitizeRecord(utm),
		});

		await createRecord(ACTIVITIES_TABLE, {
			type: "whatsapp_clicked",
			actor: "visitor",
			message: "Visitor clicked WhatsApp join button from CTA funnel",
			metadata: {},
		});
	} catch (error) {
		console.error("trackWhatsAppClick error:", error);
	}
}

/**
 * Analytics event tracking
 */
export async function trackEvent(
	eventName: string,
	metadata?: Record<string, unknown>,
): Promise<void> {
	try {
		await createRecord(ACTIVITIES_TABLE, {
			type: eventName || "unknown_event",
			actor: "visitor",
			message: `CTA funnel event: ${eventName || "unknown_event"}`,
			metadata: metadata || {},
		});
	} catch (error) {
		console.error("trackEvent error:", error);
	}
}
