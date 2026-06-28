"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const services = [
  { name: "Quick Intro Call", duration: "15 min", desc: "Just getting to know each other. No pressure.", icon: "👋" },
  { name: "Project Discovery", duration: "30 min", desc: "Discuss your project in detail and get a plan.", icon: "🎯" },
  { name: "Full Strategy Session", duration: "60 min", desc: "Deep dive into your business goals and website strategy.", icon: "🚀" },
];

import { useState } from "react";

export default function BookPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selected, setSelected] = useState({ service: "", slot: "", name: "", email: "", note: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleBook = async () => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: selected.name,
          email: selected.email,
          message: `BOOKING REQUEST\nService: ${selected.service}\nTime: ${selected.slot}\nNote: ${selected.note}`,
          budget: "Booking",
          business: selected.service,
        }),
      });
      setDone(true);
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  if (done) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-6 bg-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center text-4xl mx-auto mb-6">😊</div>
            <h1 className="font-display font-bold text-[38px] text-[#0A0A0A] leading-tight mb-3">
              You&apos;re booked!
            </h1>
            <p className="text-gray-400 text-[16px] mb-3">
              <span className="font-semibold text-[#0A0A0A]">{selected.service}</span> at <span className="font-semibold text-[#0A0A0A]">{selected.slot}</span>
            </p>
            <p className="text-gray-400 text-[15px] mb-8">
              We&apos;ll send a confirmation to <span className="text-[#7C3AED] font-medium">{selected.email}</span> within a few minutes.
            </p>
            <Link href="/" className="bg-[#7C3AED] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#6D28D9] transition-colors inline-block">
              Back to home
            </Link>
          </motion.div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-4 flex items-center justify-center gap-2">✦ Book a call</p>
            <h1 className="font-display text-[48px] md:text-[56px] font-bold text-[#0A0A0A] leading-tight">
              Let&apos;s talk about<br />
              <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>your project.</em>
            </h1>
            <p className="text-gray-400 mt-4 text-[17px]">No hard sell. Just a quick chat to see if we&apos;re a good fit.</p>
          </motion.div>

          {/* Progress bar */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= s ? "bg-[#7C3AED] text-white" : "bg-gray-100 text-gray-400"
                }`}>{s}</div>
                {s < 3 && <div className={`w-16 h-0.5 transition-all duration-300 ${step > s ? "bg-[#7C3AED]" : "bg-gray-100"}`}></div>}
              </div>
            ))}
          </div>

          {/* Step 1 — Choose service */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="font-display font-bold text-[22px] text-[#0A0A0A] mb-6 text-center">What kind of call do you need?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {services.map((s) => (
                  <motion.button
                    key={s.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setSelected({ ...selected, service: s.name }); }}
                    className={`rounded-2xl p-6 text-left border-2 transition-all duration-200 ${
                      selected.service === s.name
                        ? "border-[#7C3AED] bg-[#F5F3FF]"
                        : "border-gray-100 hover:border-gray-200 bg-white"
                    }`}
                  >
                    <div className="text-3xl mb-4">{s.icon}</div>
                    <p className="font-display font-bold text-[16px] text-[#0A0A0A] mb-1">{s.name}</p>
                    <p className={`text-xs font-semibold mb-2 ${selected.service === s.name ? "text-[#7C3AED]" : "text-gray-400"}`}>{s.duration}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </motion.button>
                ))}
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selected.service && setStep(2)}
                  className={`px-10 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 ${
                    selected.service
                      ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Pick a time slot →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2 — Pick time slot */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="font-display font-bold text-[22px] text-[#0A0A0A] mb-2 text-center">Pick a time that works</h2>
              <p className="text-gray-400 text-sm text-center mb-8">All times are in IST (India Standard Time)</p>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {timeSlots.map((slot) => (
                  <motion.button
                    key={slot}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelected({ ...selected, slot })}
                    className={`py-3 px-4 rounded-2xl text-sm font-semibold border-2 transition-all duration-200 ${
                      selected.slot === slot
                        ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                        : "border-gray-100 text-gray-600 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                    }`}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <button onClick={() => setStep(1)} className="px-8 py-4 rounded-full border border-gray-200 text-gray-500 font-medium text-[15px] hover:border-gray-400 transition-colors">
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selected.slot && setStep(3)}
                  className={`px-10 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 ${
                    selected.slot
                      ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Enter your details →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3 — Enter details */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="font-display font-bold text-[22px] text-[#0A0A0A] mb-8 text-center">Almost there — just your details</h2>

              {/* Booking summary */}
              <div className="bg-[#F5F3FF] border border-[#7C3AED]/20 rounded-2xl p-5 mb-8 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white text-lg">
                    {services.find(s => s.name === selected.service)?.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A0A0A] text-sm">{selected.service}</p>
                    <p className="text-[#7C3AED] text-xs font-medium">{services.find(s => s.name === selected.service)?.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#7C3AED]">🕐</span>
                  {selected.slot} IST
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col gap-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Your name</label>
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={selected.name}
                      onChange={e => setSelected({ ...selected, name: e.target.value })}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      placeholder="rahul@company.com"
                      value={selected.email}
                      onChange={e => setSelected({ ...selected, email: e.target.value })}
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Anything to share before the call? (optional)</label>
                  <textarea
                    placeholder="Tell us a bit about your project or what you'd like to discuss..."
                    rows={3}
                    value={selected.note}
                    onChange={e => setSelected({ ...selected, note: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-gray-300 focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3.5 rounded-2xl border border-gray-200 text-gray-500 font-medium text-sm hover:border-gray-400 transition-colors"
                  >
                    ← Back
                  </button>
                  <motion.button
                    onClick={handleBook}
                    disabled={!selected.name || !selected.email || submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-[15px] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Booking...</>
                    ) : "Confirm booking →"}
                  </motion.button>
                </div>

                <p className="text-gray-300 text-xs text-center">No spam. Confirmation sent to your email within minutes.</p>
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </>
  );
}