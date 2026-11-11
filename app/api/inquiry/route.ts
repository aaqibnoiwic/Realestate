import { NextResponse } from "next/server";

type Inquiry = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
};

function isText(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  let data: Inquiry;
  try {
    data = (await request.json()) as Inquiry;
  } catch {
    return NextResponse.json(
      { message: "Please submit a valid enquiry form." },
      { status: 400 },
    );
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return NextResponse.json(
      { message: "Please submit a valid enquiry form." },
      { status: 400 },
    );
  }
  const { name, email, phone, interest } = data;
  if (
    !isText(name) ||
    !isText(email) ||
    !isText(phone) ||
    !isText(interest)
  ) {
    return NextResponse.json(
      { message: "Please complete all enquiry fields." },
      { status: 400 },
    );
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedPhone = phone.trim();
  const normalizedInterest = interest.trim();
  const digits = normalizedPhone.replace(/\D/g, "");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const allowedInterests = new Set([
    "Land & agricultural",
    "Residential",
    "Commercial",
    "International investment",
    "Property visit",
  ]);

  if (normalizedName.length < 2 || normalizedName.length > 100) {
    return NextResponse.json(
      { message: "Please enter a name between 2 and 100 characters." },
      { status: 400 },
    );
  }
  if (normalizedEmail.length > 254 || !emailPattern.test(normalizedEmail)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (
    !/^\+?[0-9\s().-]{7,20}$/.test(normalizedPhone) ||
    digits.length < 7 ||
    digits.length > 15
  ) {
    return NextResponse.json(
      { message: "Please enter a valid phone number with 7 to 15 digits." },
      { status: 400 },
    );
  }
  if (!allowedInterests.has(normalizedInterest)) {
    return NextResponse.json(
      { message: "Please select a valid area of interest." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      {
        message:
          "Enquiry delivery is not configured yet. Your request has not been sent. Please try again once the company contact service is available.",
      },
      { status: 503 },
    );
  }

  const emailBody = [
    `Name: ${normalizedName}`,
    `Email: ${normalizedEmail}`,
    `Phone: ${normalizedPhone}`,
    `Interest: ${normalizedInterest}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: normalizedEmail,
        subject: `Website enquiry: ${normalizedInterest}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "We couldn’t deliver your enquiry just now. Please try again or contact us directly.",
        },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      {
        message:
          "We couldn’t reach our enquiry service. Please try again or contact us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thank you. Our team will be in touch shortly.",
  });
}
