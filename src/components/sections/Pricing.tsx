"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const included = ["One request at a time","Avg. 48 hour delivery","Unlimited brands","Website development","Figma to Next.js","Unlimited pages","CMS / Admin panels","Unlimited revisions","Premium support","Pause or cancel anytime"];

declare global {
  interface Window { Razorpay: new (options: Record<string, unknown>) => { open: () => void }; }
}

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/create-order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount: 499900 }) });
      const data = await res.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Scalify",
        description: "Scalify Club Membership",
        order_id: data.id,
        handler: () => { window.location.href = "/thank-you"; },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#7C3AED" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  return (
    <section id="pricing" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-5 flex items-center justify-center gap-2">✦ Pricing</p>
          <h2 className="font-display text-[48px] md:text-[54px] font-bold text-[#0A0A0A] leading-tight">
            One subscription,<br />
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>endless</em> possibilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left card visual */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl p-7 flex flex-col gap-5"
              style={{ background: "linear-gradient(135deg, #ff80b5, #fb923c, #7c3aed, #4f46e5)" }}>
              <div className="flex gap-3 flex-wrap">
                {["#EF4444","#F97316","#EAB308","#22C55E","#7C3AED"].map((c, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-10 h-10 rounded-full border-4 border-white/30 flex items-center justify-center text-sm"
                    style={{ background: c }}>😊</motion.div>
                ))}
              </div>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">Start today</p>
                <p className="text-white font-display font-bold text-2xl mt-1">Join <span className="text-yellow-300">Scalify</span> Club</p>
                <p className="text-white/60 text-sm mt-2">One plan. Everything included.<br />Websites that work. Delivered fast.</p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {["Pause or cancel anytime","No long-term contracts","Request as many as you need","Start, pause or cancel anytime"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="text-green-300 text-xs">✓</span> {b}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right pricing card */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-[#0A0A0A] rounded-3xl p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-white font-display font-bold text-xl">Scalify Club</p>
              <span className="text-gray-500 text-xs border border-gray-700 px-3 py-1 rounded-full">Pause or cancel anytime</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 text-[#a78bfa] text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
              Lifetime Discount – Limited Time
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display font-bold text-white text-[44px]">₹4,999</span>
              <span className="text-gray-500 text-sm">/month</span>
              <span className="text-gray-600 line-through text-lg">₹9,999</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-[#7C3AED] text-xs flex-shrink-0">✓</span> {item}
                </div>
              ))}
            </div>

            <motion.button
              onClick={handlePayment}
              whileHover={{ scale: 1.02, backgroundColor: "#6D28D9" }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-[#7C3AED] text-white font-semibold py-4 rounded-2xl text-[15px] transition-all duration-200 mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Processing...</>
              ) : "Start my plan →"}
            </motion.button>

            <div className="flex items-center gap-3 pt-2 border-t border-gray-800">
              <div className="flex -space-x-2">
                {["#7C3AED","#F97316","#06B6D4","#EF4444"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-xs" style={{ background: c }}>😊</div>
                ))}
              </div>
              <p className="text-gray-400 text-xs">Trusted by founders across India &amp; worldwide ⭐ 4.9/5</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Load Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    </section>
  );
}