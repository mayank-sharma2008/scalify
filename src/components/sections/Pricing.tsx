"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    priceNum: 499900,
    originalPrice: "₹9,999",
    badge: "Best for solo founders",
    desc: "One plan. Everything included. Clean websites that work. Delivered fast.",
    perks: ["Up to 3 pages", "No long-term contracts", "Request as many revisions", "Start, pause or cancel anytime"],
    included: [
      "Mobile responsive", "Copy included", "Contact form",
      "SEO basics", "Vercel deployment", "7-day delivery",
      "1 revision round", "Code ownership",
    ],
    color: "#F97316",
    cardGradient: "linear-gradient(135deg, #fde68a 0%, #fb923c 40%, #ef4444 70%, #a855f7 100%)",
    smileys: ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#A855F7"],
  },
  {
    name: "Growth",
    price: "₹9,999",
    priceNum: 999900,
    originalPrice: "₹19,999",
    badge: "Most popular",
    desc: "One plan. Everything included. Websites with animations, CMS and backend. Delivered fast.",
    perks: ["Up to 7 pages", "No long-term contracts", "Unlimited revisions", "Start, pause or cancel anytime"],
    included: [
      "Mobile responsive", "Copy included", "Contact form",
      "SEO setup", "Vercel deployment", "7-day delivery",
      "Framer Motion animations", "CMS / Admin panel",
      "2 revision rounds", "Code ownership",
    ],
    color: "#7C3AED",
    cardGradient: "linear-gradient(135deg, #c4b5fd 0%, #7c3aed 40%, #4f46e5 70%, #f97316 100%)",
    smileys: ["#7C3AED", "#A855F7", "#6366F1", "#EC4899", "#F97316", "#EF4444"],
  },
  {
    name: "Pro",
    price: "₹17,999",
    priceNum: 1799900,
    originalPrice: "₹34,999",
    badge: "Full-stack everything",
    desc: "One plan. Everything included. Full custom build with payments, APIs and priority support.",
    perks: ["Unlimited pages", "No long-term contracts", "Unlimited revisions", "Start, pause or cancel anytime"],
    included: [
      "Mobile responsive", "Copy included", "Contact form",
      "Advanced SEO", "Vercel deployment", "7-day delivery",
      "Custom animations", "CMS / Admin panel",
      "E-commerce / Payments", "API integrations",
      "Priority support", "Code ownership",
    ],
    color: "#0F172A",
    cardGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #1e3a5f 60%, #f97316 100%)",
    smileys: ["#1E3A5F", "#312E81", "#1E1B4B", "#0F172A", "#374151", "#111827"],
  },
];

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function Pricing() {
  const [activePlan, setActivePlan] = useState(1); // default Growth
  const [loading, setLoading] = useState(false);

  const plan = plans[activePlan];

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: plan.priceNum }),
      });
      const data = await res.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Scalify",
        description: `Scalify ${plan.name} Package`,
        order_id: data.id,
        handler: () => { window.location.href = "/thank-you"; },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: plan.color },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <section id="pricing" className="py-32 px-6 bg-[#f8f7ff]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 flex items-center justify-center gap-2">
            ✦ Pricing
          </p>
          <h2 className="font-display text-[48px] md:text-[56px] font-bold text-[#0A0A0A] leading-tight">
            One subscription,<br />
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>endless</em> possibilities.
          </h2>
        </motion.div>

        {/* Plan toggle */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {plans.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={() => setActivePlan(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                activePlan === i
                  ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                  : "border-gray-200 text-gray-500 bg-white hover:border-[#7C3AED] hover:text-[#7C3AED]"
              }`}
            >
              {p.name}
            </motion.button>
          ))}
        </div>

        {/* Main pricing layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            {/* LEFT — colorful card */}
            <div className="flex flex-col gap-4">
              {/* Smiley card */}
              <div
                className="rounded-3xl p-7 flex flex-col gap-5 flex-1"
                style={{ background: plan.cardGradient }}
              >
                {/* Smiley faces */}
                <div className="grid grid-cols-3 gap-2 w-fit">
                  {plan.smileys.map((c, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-11 h-11 rounded-full border-4 border-white/20 flex items-center justify-center text-lg shadow-sm"
                      style={{ background: c }}
                    >
                      😊
                    </motion.div>
                  ))}
                </div>

                {/* Start today pill */}
                <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  Start today
                </div>

                <div>
                  <p className="text-white font-display font-bold text-2xl">
                    Join <span className="text-yellow-300">Scalify</span> {plan.name}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{plan.desc}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {plan.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-white/80 text-sm">
                      <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px]">✓</span>
                      </div>
                      {perk}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social proof strip */}
              <div className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between border border-gray-100">
                <div className="flex -space-x-2">
                  {["#7C3AED", "#F97316", "#06B6D4", "#EF4444"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs shadow-sm" style={{ background: c }}>😊</div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">Trusted by founders across India &amp; worldwide</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-gray-500 text-xs font-semibold">4.9/5</span>
                </div>
              </div>
            </div>

            {/* RIGHT — dark pricing card */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden">
              {/* Bottom right orange glow */}
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-60"
                style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)" }}></div>

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <p className="text-white font-display font-bold text-xl">Scalify {plan.name}</p>
                  <span className="text-gray-500 text-[10px] border border-gray-700 px-3 py-1 rounded-full">
                    Pause or cancel anytime
                  </span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 text-[#a78bfa] text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
                  ✦ {plan.badge} — Limited Time
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-white text-[44px] leading-none">{plan.price}</span>
                  <span className="text-gray-500 text-sm">one-time</span>
                  <span className="text-gray-600 line-through text-lg">{plan.originalPrice}</span>
                </div>

                {/* Included features */}
                <div>
                  <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest mb-3">Included</p>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {plan.included.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-gray-300 text-[13px]">
                        <span className="text-[#7C3AED] text-xs flex-shrink-0">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-2.5 mt-auto pt-2">
                  <motion.button
                    onClick={handlePayment}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-2xl text-[15px] transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Processing...</>
                    ) : `Start my plan →`}
                  </motion.button>

                  <Link
                    href="#contact"
                    className="w-full py-3.5 rounded-2xl text-sm font-medium border border-gray-700 text-gray-400 hover:border-[#7C3AED] hover:text-white transition-all duration-200 text-center"
                  >
                    Send a brief instead
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mt-6"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1a1040 50%, #0A0A0A 100%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7C3AED]/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, title: "7-day delivery", desc: "Or we work until it's done", bg: "from-yellow-400/10 to-orange-400/5" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>, title: "Fixed price", desc: "No hidden fees ever", bg: "from-purple-400/10 to-indigo-400/5" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, title: "You own 100%", desc: "All code handed over", bg: "from-green-400/10 to-emerald-400/5" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>, title: "Free revisions", desc: "Until you're happy", bg: "from-blue-400/10 to-cyan-400/5" },
            ].map((g) => (
              <motion.div key={g.title} whileHover={{ backgroundColor: "rgba(124,58,237,0.08)" }}
                className="flex flex-col items-center gap-3 p-7 text-center transition-colors duration-200 cursor-default">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${g.bg} border border-white/10 flex items-center justify-center`}>{g.icon}</div>
                <div>
                  <p className="font-display font-bold text-[14px] text-white mb-1">{g.title}</p>
                  <p className="text-white/40 text-xs">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Not sure which plan?{" "}
          <Link href="#contact" className="text-[#7C3AED] font-semibold hover:underline">Send us a brief</Link>
          {" "}and we&apos;ll recommend one.
        </motion.p>

      </div>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    </section>
  );
}