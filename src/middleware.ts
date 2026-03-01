import { NextRequest, NextResponse } from "next/server";

async function verifyToken(timestamp: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const expectedSig = await crypto.subtle.sign("HMAC", key, encoder.encode(timestamp));
  const expectedHex = Array.from(new Uint8Array(expectedSig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return signature === expectedHex;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("dashboard_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const dotIndex = token.indexOf(".");
  if (dotIndex === -1) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const timestamp = token.substring(0, dotIndex);
  const signature = token.substring(dotIndex + 1);

  if (!timestamp || !signature) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Check if token is expired (24 hours)
  const tokenAge = Date.now() - parseInt(timestamp, 10);
  if (tokenAge > 24 * 60 * 60 * 1000) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.delete("dashboard_session");
    return response;
  }

  // Verify HMAC signature
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const valid = await verifyToken(timestamp, signature, password);
  if (!valid) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.delete("dashboard_session");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/documents",
};
