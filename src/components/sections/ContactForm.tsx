"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", business: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
      if (!form.name || !form.email || !form.message) return;
      setStatus("loading");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        console.log("API response:", data);
        if (res.ok && data.success) setStatus("success");
        else {
          console.error("API error:", data.error);
          setStatus("error");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setStatus("error");
      }
    };

  if (status === "success") {
    return (
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center text-4xl mx-auto mb-6">😊</div>
            <h3 className="font-display font-bold text-[32px] text-[#0A0A0A] mb-3">We got your message!</h3>
            <p className="text-gray-400 text-[16px]">We'll get back to you within 24 hours to kick things off.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 flex items-center gap-2">✦ Start a project</p>
            <h2 className="font-display text-[42px] font-bold text-[#0A0A0A] leading-tight mb-5">
              Let&apos;s build something<br />
              <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>great together.</em>
            </h2>
            <p className="text-gray-400 text-[16px] leading-relaxed mb-8">
              Fill in the form and we&apos;ll get back to you within 24 hours. No calls needed until you&apos;re ready.
            </p>

            {/* What happens next */}
            <div className="flex flex-col gap-4">
              {[
                { step: "01", text: "You fill the form — takes 2 minutes" },
                { step: "02", text: "We review and send a proposal in 24hrs" },
                { step: "03", text: "You approve, we start building immediately" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-bold flex items-center justify-center flex-shrink-0">{s.step}</div>
                  <p className="text-gray-600 text-sm">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-4">

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Your name</label>
                <input
                  type="text" placeholder="Rahul Sharma"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                <input
                  type="email" placeholder="rahul@company.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Business name</label>
              <input
                type="text" placeholder="Acme Corp"
                value={form.business} onChange={e => setForm({ ...form, business: e.target.value })}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Budget</label>
              <div className="grid grid-cols-3 gap-2">
                {["₹4,999", "₹9,999", "₹17,999+"].map((b) => (
                  <button key={b} onClick={() => setForm({ ...form, budget: b })}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${form.budget === b ? "bg-[#7C3AED] text-white border-[#7C3AED]" : "border-gray-200 text-gray-500 hover:border-[#7C3AED] hover:text-[#7C3AED]"}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tell us about your project</label>
              <textarea
                placeholder="I need a landing page for my startup that..."
                rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-2xl text-[15px] transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            >
              {status === "loading" ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Sending...</>
              ) : "Send my brief →"}
            </motion.button>

            {status === "error" && (
              <p className="text-red-400 text-xs text-center">Something went wrong. Email us directly at hello@scalify.in</p>
            )}

            <p className="text-gray-300 text-xs text-center">No spam. No calls until you&apos;re ready. Reply within 24 hours.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}