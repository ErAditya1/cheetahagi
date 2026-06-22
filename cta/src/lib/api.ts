import { UTMParams, ApiResponse } from "@/types/lead";

const NOCODB_URL = "https://db.feedingtrends.com/api/v3/data/pvmdy4nc8k9r5se";

const FORMS_TABLE = "mkwjonegcqtbup9";
const ACTIVITIES_TABLE = "mbx38zqkl9f2i40";

const TOKEN =
	process.env.NEXT_PUBLIC_NOCODB_TOKEN ||
	"nc_pat_fA5KGqRqKkjm1rdkyCAk2MuAWzdveNPUGPL1Ipcj";

const DEFAULT_UTM = {
	utm_source: "",
	utm_medium: "",
	utm_campaign: "",
	utm_term: "",
	utm_content: "",
};

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
 * Create record in NocoDB fghj
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
 * Lead Submission
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

	let result;

	if (existing) {
		const existingTypes = Array.isArray(existing?.fields?.type)
			? existing.fields.type
			: [];

		const updatedTypes = [
			...new Set([...existingTypes, "newsletter", "whatsapp-funnel"]),
		];

		result = await updateRecord(FORMS_TABLE, existing.id, {
			name: data?.name || "",
			email,
			phone: data?.phone || "",

			type: updatedTypes,
			stage: "profile",
			joined_whatsapp: false,

			...DEFAULT_UTM,
			...sanitizeRecord(utm),
		});
	} else {
		result = await createRecord(FORMS_TABLE, {
			name: data?.name || "",
			email,
			phone: data?.phone || "",

			type: ["whatsapp-funnel"],
			source: "cta-funnel",
			stage: "profile",
			joined_whatsapp: false,

			...DEFAULT_UTM,
			...sanitizeRecord(utm),
		});
	}

	if (typeof window !== "undefined") {
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

		if (email) {
			const existing = await findRecordByEmail(email);

			if (existing) {
				const existingTypes = Array.isArray(existing?.fields?.type)
					? existing.fields.type
					: [];

				const updatedTypes = [
					...new Set([...existingTypes, "newsletter", "whatsapp-funnel"]),
				];

				await updateRecord(FORMS_TABLE, existing.id, {
					joined_whatsapp: true,
					stage: "whatsapp-clicked",
					type: updatedTypes,

					...DEFAULT_UTM,
					...sanitizeRecord(utm),
				});
			}
		}

		await createRecord(ACTIVITIES_TABLE, {
			type: "whatsapp_clicked",
			actor: "visitor",
			message: "Visitor clicked WhatsApp join button from CTA funnel",
			metadata: JSON.stringify({
				email,
			}),
		});
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
	try {
		await createRecord(ACTIVITIES_TABLE, {
			type: eventName || "unknown_event",
			actor: "visitor",
			message: `CTA funnel event: ${eventName || "unknown_event"}`,
			metadata: JSON.stringify(metadata || {}),
		});
	} catch (error) {
		console.error("trackEvent error:", error);
	}
}

