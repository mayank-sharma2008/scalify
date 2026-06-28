"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    priceNum: 499900,
    desc: "Perfect for solo founders and small businesses who need a clean online presence fast.",
    color: "#F97316",
    gradient: "linear-gradient(135deg, #fde68a, #fb923c, #ef4444)",
    features: [
      "Up to 3 pages",
      "Mobile responsive",
      "Copy included",
      "Contact form",
      "SEO basics",
      "Vercel deployment",
      "7-day delivery",
      "1 revision round",
    ],
    notIncluded: ["CMS / Admin panel", "Custom animations", "E-commerce", "Priority support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    priceNum: 999900,
    desc: "For growing businesses that need a full website with more pages, animations and a backend.",
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #a78bfa, #7c3aed, #4f46e5)",
    features: [
      "Up to 7 pages",
      "Mobile responsive",
      "Copy included",
      "Contact form",
      "SEO setup",
      "Vercel deployment",
      "7-day delivery",
      "Framer Motion animations",
      "CMS / Admin panel",
      "2 revision rounds",
    ],
    notIncluded: ["E-commerce", "Custom integrations"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹17,999",
    priceNum: 1799900,
    desc: "Full-stack custom build for startups and brands that need everything — including integrations.",
    color: "#0A0A0A",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    features: [
      "Unlimited pages",
      "Mobile responsive",
      "Copy included",
      "Contact form",
      "Advanced SEO",
      "Vercel deployment",
      "7-day delivery",
      "Custom animations",
      "CMS / Admin panel",
      "E-commerce / Payments",
      "API integrations",
      "Priority support",
      "Unlimited revisions",
    ],
    notIncluded: [],
    popular: false,
  },
];

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePayment = async (plan: typeof plans[0]) => {
    setLoading(plan.name);
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
    setLoading(null);
  };

  return (
    <section id="pricing" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 flex items-center justify-center gap-2">
            ✦ Pricing
          </p>
          <h2 className="font-display text-[48px] md:text-[56px] font-bold text-[#0A0A0A] leading-tight">
            Simple pricing.<br />
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>No surprises.</em>
          </h2>
          <p className="text-gray-400 mt-5 text-[17px] max-w-md mx-auto">
            Fixed price. Fixed timeline. Pick your pack and we get started within 24 hours.
          </p>
        </motion.div>

        {/* 3 Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-[24px] flex flex-col overflow-hidden border transition-all duration-300 ${
                plan.popular
                  ? "border-[#7C3AED] shadow-xl shadow-purple-100"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2 z-10">
                  ✦ Most Popular
                </div>
              )}

              {/* Gradient top */}
              <div
                className={`p-7 ${plan.popular ? "pt-12" : "pt-7"}`}
                style={{ background: plan.gradient }}
              >
                <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2">{plan.name}</p>
                <p className="text-white font-display font-bold text-[40px] leading-none">{plan.price}</p>
                <p className="text-white/60 text-xs mt-1">one-time payment</p>
                <p className="text-white/80 text-sm mt-4 leading-relaxed">{plan.desc}</p>
              </div>

              {/* Features */}
              <div className="bg-white flex-1 p-7 flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-[#0A0A0A]">
                      <span className="w-4 h-4 rounded-full bg-[#F5F3FF] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#7C3AED] text-[9px] font-bold">✓</span>
                      </span>
                      {f}
                    </div>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-300 text-[9px] font-bold">✕</span>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-2.5 mt-auto pt-4">
                  <motion.button
                    onClick={() => handlePayment(plan)}
                    disabled={loading === plan.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                    style={{
                      background: plan.popular ? "#7C3AED" : "#0A0A0A",
                      color: "white",
                    }}
                  >
                    {loading === plan.name ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Processing...
                      </>
                    ) : (
                      <>Pay now — {plan.price}</>
                    )}
                  </motion.button>

                  <Link
                    href="#contact"
                    className="w-full py-3 rounded-2xl text-sm font-medium border border-gray-200 text-gray-500 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-200 text-center"
                  >
                    Send a brief instead
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee strip — dark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1a1040 50%, #0A0A0A 100%)" }}
        >
          {/* Purple glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7C3AED]/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                title: "7-day delivery",
                desc: "Or we work until it's done",
                bg: "from-yellow-400/10 to-orange-400/5",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="10" rx="2"/>
                    <path d="M8 11V7a4 4 0 018 0v4"/>
                  </svg>
                ),
                title: "Fixed price",
                desc: "No hidden fees ever",
                bg: "from-purple-400/10 to-indigo-400/5",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ),
                title: "You own 100%",
                desc: "All code handed over",
                bg: "from-green-400/10 to-emerald-400/5",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6"/>
                    <path d="M1 20v-6h6"/>
                    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                  </svg>
                ),
                title: "Free revisions",
                desc: "Until you're happy",
                bg: "from-blue-400/10 to-cyan-400/5",
              },
            ].map((g) => (
              <motion.div
                key={g.title}
                whileHover={{ backgroundColor: "rgba(124,58,237,0.08)" }}
                className="flex flex-col items-center gap-3 p-8 text-center transition-colors duration-200 cursor-default"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${g.bg} border border-white/10 flex items-center justify-center`}>
                  {g.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-[15px] text-white mb-1">{g.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Not sure CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          Not sure which plan?{" "}
          <Link href="#contact" className="text-[#7C3AED] font-semibold hover:underline">
            Send us a brief
          </Link>{" "}
          and we&apos;ll recommend one.
        </motion.p>

      </div>

      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    </section>
  );
}