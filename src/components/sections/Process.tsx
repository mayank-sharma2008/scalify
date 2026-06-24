"use client";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 flex items-center justify-center gap-2">
            ✦ The Process
          </p>
          <h2 className="font-display text-[52px] md:text-[62px] font-bold text-[#0A0A0A] leading-[1.06]">
            The way websites<br />
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>should&apos;ve</em>{" "}
            been done.
          </h2>
          <p className="text-gray-400 mt-5 text-[17px]">Simple. Fast. Transparent.</p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 01 — Order */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="rounded-[24px] p-7 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #f9a8d4 0%, #fbbf24 50%, #fde68a 100%)" }}
          >
            {/* Number */}
            <div className="w-9 h-9 rounded-full bg-white/40 border border-white/60 flex items-center justify-center">
              <span className="text-white text-xs font-bold">01</span>
            </div>

            {/* Floating mockup — top right */}
            <div className="absolute top-6 right-5 bg-white rounded-2xl shadow-xl p-4 w-[190px]">
              <p className="text-[9px] font-bold text-gray-600 mb-3">Your Project Brief</p>
              <div className="space-y-2.5">
                {[["Business name","Acme Corp"],["What do you do?","We build amazing products"],["Target audience","Startups & SMBs"],["Inspiration sites","3 links added"]].map(([l,v])=>(
                  <div key={l} className="flex justify-between border-b border-gray-100 pb-1.5">
                    <span className="text-[8px] text-gray-400">{l}</span>
                    <span className="text-[8px] text-gray-600 font-semibold">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-[#7C3AED] text-white text-[8px] font-bold py-2 rounded-full text-center">Submit Brief</div>
            </div>

            {/* Bottom-left smiley */}
            <div className="absolute bottom-[100px] left-7">
              <div className="w-12 h-12 rounded-2xl bg-[#EC4899] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">😊</span>
              </div>
              {/* Sparkle lines */}
              <div className="absolute -top-4 -left-2 text-white/60 text-lg font-bold">✦</div>
              <div className="absolute -bottom-3 left-10 text-white/40 text-sm font-bold">✦</div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white font-display font-bold text-[26px] mb-2">Order</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Choose your package, fill a short brief.<br />No calls, no back-and-forth, no wasted time.
              </p>
            </div>
          </motion.div>

          {/* Card 02 — We build */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-[24px] p-7 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #c4b5fd 0%, #818cf8 40%, #6366f1 100%)" }}
          >
            {/* Number */}
            <div className="w-9 h-9 rounded-full bg-white/40 border border-white/60 flex items-center justify-center">
              <span className="text-white text-xs font-bold">02</span>
            </div>

            {/* Floating mockup */}
            <div className="absolute top-6 right-4 left-4 bg-[#1a1040] rounded-2xl shadow-xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="flex">
                {/* Sidebar */}
                <div className="w-24 border-r border-white/10 p-3 flex flex-col gap-2">
                  <p className="text-white text-[9px] font-bold mb-1">Scalify</p>
                  {["Design","Content","Development","Preview"].map((item, i) => (
                    <div key={item} className={`text-[8px] px-2 py-1.5 rounded-md ${i === 3 ? "bg-purple-600/50 text-purple-300" : "text-gray-500"}`}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main area */}
                <div className="flex-1 p-4">
                  <h4 className="text-white text-[13px] font-bold leading-tight mb-1">Building something</h4>
                  <p className="text-purple-300 text-[13px] font-bold mb-3">awesome.</p>
                  <div className="h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-3"></div>
                  <button className="w-full bg-purple-500 text-white text-[8px] font-bold py-1.5 rounded-full">
                    View Live Preview →
                  </button>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white font-display font-bold text-[26px] mb-2">We build</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We write the copy, design, and code your site in Next.js. You get a live preview URL.
              </p>
            </div>
          </motion.div>

          {/* Card 03 — You approve */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="rounded-[24px] p-7 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 30%, #22d3ee 80%, #818cf8 100%)" }}
          >
            {/* Number */}
            <div className="w-9 h-9 rounded-full bg-white/40 border border-white/60 flex items-center justify-center">
              <span className="text-white text-xs font-bold">03</span>
            </div>

            {/* Floating mockup */}
            <div className="absolute top-6 right-5 bg-white rounded-2xl shadow-xl p-4 w-[185px]">
              <p className="text-[9px] font-bold text-gray-500 mb-3">Your feedback</p>
              {/* Avatar row */}
              <div className="flex items-center gap-1 mb-3">
                {["😊","👩","🧑","👨"].map((e,i)=>(
                  <div key={i} className="w-7 h-7 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs shadow-sm">{e}</div>
                ))}
                <div className="w-7 h-7 rounded-full bg-[#7C3AED] border-2 border-white flex items-center justify-center shadow-sm">
                  <span className="text-white text-[9px] font-bold">✓</span>
                </div>
              </div>
              {/* Chat bubbles */}
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="text-[8px] text-gray-600">Love the design! Can we change the hero headline?</p>
                  <p className="text-[7px] text-gray-400 mt-1">2m ago</p>
                </div>
                <div className="bg-green-50 rounded-xl px-3 py-2 flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[7px]">✓</span>
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-700 font-semibold">All changes done!</p>
                    <p className="text-[8px] text-gray-600">Ready to go live 🚀</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rocket icon bottom-right */}
            <div className="absolute bottom-[110px] right-6">
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚀</span>
              </div>
              {/* Sparkle */}
              <div className="absolute -top-3 right-10 text-white/50 text-sm">✦</div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white font-display font-bold text-[26px] mb-2">You approve</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Review it, request revisions, then go live. Your code, your domain, 100% yours.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom note */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[#7C3AED] text-sm">✦</span>
          <p className="text-gray-400 text-sm">
            No long meetings. No endless emails. Just a smooth process that gets your website live —{" "}
            <span className="text-[#7C3AED] font-semibold">fast.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}