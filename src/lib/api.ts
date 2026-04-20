export interface ContactFormPayload {
    profileId: number;
    senderName: string;
    senderEmail: string;
    subject?: string;
    body: string;
}

export interface ContactFormResponse {
    success: boolean;
    message: string;
    data?: any;
}

const backendBaseUrl =
    import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/u, "") ?? "";

export async function sendContactMessage(
    payload: ContactFormPayload,
): Promise<ContactFormResponse> {
    const url = `${backendBaseUrl || ""}/api/Message`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `Failed to send message (${response.status}): ${errorText || response.statusText}`,
        );
    }

    return response.json();
}
