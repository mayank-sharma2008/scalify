import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(req: Request) {
  const { name, email, message, budget } = await req.json();

  // Save to Supabase
  await supabase.from("leads").insert([{ name, email, message, budget, created_at: new Date().toISOString() }]);

  // Send email notification
  await resend.emails.send({
    from: "Scalify <hello@scalify.in>",
    to: "hello@scalify.in",
    subject: `New inquiry from ${name}`,
    html: `<h2>New lead from Scalify</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Budget:</b> ${budget}</p><p><b>Message:</b> ${message}</p>`,
  });

  // Send confirmation to user
  await resend.emails.send({
    from: "Scalify <hello@scalify.in>",
    to: email,
    subject: "We got your message! 🚀",
    html: `<h2>Hey ${name}!</h2><p>Thanks for reaching out to Scalify. We'll get back to you within 24 hours.</p><p>— Scalify Team</p>`,
  });

  return NextResponse.json({ success: true });
}