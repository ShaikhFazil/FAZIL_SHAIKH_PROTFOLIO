// /app/api/send/route.ts
import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby6L7Oa3y6Mm3VgvSdvs-wgOtqBfV4doJt6cswbO9mUdjIM422g4mAT0f3xMFl-FMc1Jg/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.from_name,
        email: body.from_email,
        message: body.message,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Google Script error: ${text}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save to Google Sheet" },
      { status: 500 }
    );
  }
}
