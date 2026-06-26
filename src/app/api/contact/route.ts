import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, budget, business } = body;

    console.log("Contact form received:", { name, email, message, budget, business });

    // Check env vars
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing Supabase env vars");
      return NextResponse.json({ success: false, error: "Missing config" }, { status: 500 });
    }

    // Create fresh client with service role key
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { data, error } = await supabase
      .from("leads")
      .insert([{
        name: name || "Unknown",
        email: email || "Unknown",
        message: message || "",
        budget: budget || "",
        business: business || "",
        created_at: new Date().toISOString(),
      }])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("Saved to Supabase:", data);

    // Send email if Resend key exists
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Scalify <onboarding@resend.dev>",
          to: "mayanksharmap10122@gmail.com",
          subject: `New brief from ${name} — ${budget}`,
          html: `
            <h2>New lead on Scalify! 🚀</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Business:</b> ${business}</p>
            <p><b>Budget:</b> ${budget}</p>
            <p><b>Message:</b> ${message}</p>
          `,
        });
      } catch (emailErr) {
        console.error("Email error (non-fatal):", emailErr);
      }
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}