import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Destination inbox — pulled from env so it never touches client bundles
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "sujanmandal2393@gmail.com";
// Resend requires the "from" address to be a verified domain or the default sandbox address
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    // ── Server-side validation ───────────────────────────────────────────────
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide your name (at least 2 characters)." },
        { status: 400 }
      );
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // ── Send via Resend ──────────────────────────────────────────────────────
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: "New Portfolio Contact Message",
      text: [
        "--------------------------------",
        "",
        `Name:`,
        name.trim(),
        "",
        `Email:`,
        email.trim(),
        "",
        `Message:`,
        message.trim(),
        "",
        "--------------------------------",
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0f; color: #e5e5e5; border-radius: 12px;">
          <h2 style="color: #ffffff; font-size: 22px; margin-bottom: 24px;">New Portfolio Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #2a2a3a; margin-bottom: 24px;" />

          <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280;">Name</p>
          <p style="margin: 0 0 20px; font-size: 16px; color: #ffffff;">${escapeHtml(name.trim())}</p>

          <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280;">Email</p>
          <p style="margin: 0 0 20px; font-size: 16px; color: #ffffff;">
            <a href="mailto:${escapeHtml(email.trim())}" style="color: #6a8fff; text-decoration: none;">${escapeHtml(email.trim())}</a>
          </p>

          <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280;">Message</p>
          <p style="margin: 0 0 20px; font-size: 16px; color: #ffffff; white-space: pre-wrap; line-height: 1.7;">${escapeHtml(message.trim())}</p>

          <hr style="border: none; border-top: 1px solid #2a2a3a; margin-top: 24px;" />
          <p style="font-size: 12px; color: #4b5563; margin-top: 16px;">Sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact/route] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("[contact/route] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
