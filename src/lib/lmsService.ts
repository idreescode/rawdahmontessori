interface RegistrationData {
  [key: string]: unknown;
}

interface LmsResult {
  success: boolean;
  error?: string;
}

export async function syncToLms(data: RegistrationData): Promise<LmsResult> {
  const apiUrl = process.env.IQRASS_API_URL;
  const apiKey = process.env.IQRASS_API_KEY;

  if (!apiUrl || !apiKey) {
    return { success: false, error: "LMS API URL or API key not configured" };
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { success: false, error: `LMS API returned ${response.status}: ${errorText}` };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: `LMS API call failed: ${message}` };
  }
}
