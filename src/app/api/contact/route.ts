import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { name, email, message, budget } = await req.json();

    // Save to Supabase only if keys exist
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      await supabase.from("leads").insert([{ name, email, message, budget, created_at: new Date().toISOString() }]);
    }

    // Send email only if Resend key exists
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Scalify <hello@scalify.in>",
        to: "hello@scalify.in",
        subject: `New inquiry from ${name}`,
        html: `<h2>New lead</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Budget:</b> ${budget}</p><p><b>Message:</b> ${message}</p>`,
      });

      await resend.emails.send({
        from: "Scalify <hello@scalify.in>",
        to: email,
        subject: "We got your message! 🚀",
        html: `<h2>Hey ${name}!</h2><p>Thanks for reaching out. We'll get back within 24 hours.</p><p>— Scalify Team</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}