"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Fast delivery",
    desc: "Most sites delivered in 7 days or less. No waiting weeks for an agency.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #FBBF24 0%, #F97316 30%, #A855F7 70%, #4F46E5 100%)",
  },
  {
    title: "Fixed pricing",
    desc: "No surprise invoices. You know the price before we start. Always.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 018 0v4"/>
        <circle cx="12" cy="16" r="1" fill="#7C3AED"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #818CF8 0%, #6366F1 25%, #7C3AED 50%, #F97316 80%, #FBBF24 100%)",
  },
  {
    title: "Copy included",
    desc: "We write every word. No extra charges, no content delays.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #FB923C 0%, #F97316 30%, #EC4899 60%, #A855F7 100%)",
  },
  {
    title: "Senior-level quality",
    desc: "AI-powered development. Clean code, sharp design, built to convert.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #C084FC 0%, #A855F7 30%, #EC4899 60%, #22D3EE 100%)",
  },
  {
    title: "Fully yours",
    desc: "Every site is custom-built for you. You own 100% of the code.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #A78BFA 0%, #7C3AED 40%, #6366F1 70%, #93C5FD 100%)",
  },
  {
    title: "No agency drama",
    desc: "No long contracts, no bloated teams. One point of contact, start to finish.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
    gradient: "linear-gradient(160deg, #F87171 0%, #EF4444 30%, #F97316 60%, #3B82F6 100%)",
  },
];

export default function WhyScalify() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-6 flex items-center justify-center gap-2">
            ✦ Why Scalify
          </p>
          <h2 className="font-display text-[52px] md:text-[62px] font-bold text-[#0A0A0A] leading-[1.08]">
            It&apos;s{" "}
            <em
              className="text-[#7C3AED]"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: 700 }}
            >
              &lsquo;you&apos;ll never go<br />back&rsquo;
            </em>{" "}
            better.
          </h2>
          <p className="text-gray-400 mt-6 text-[16px] leading-relaxed max-w-md mx-auto">
            Scalify replaces unreliable freelancers and expensive agencies<br />
            for one fixed price, with websites delivered in 7 days.<br />
            So fast you won&apos;t want to go anywhere else.
          </p>
        </motion.div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex-shrink-0 snap-start flex flex-col gap-4"
              style={{ width: "160px" }}
            >
              {/* Card */}
              <div
                className="rounded-[22px] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: f.gradient,
                  width: "160px",
                  height: "220px",
                }}
              >
                {/* White icon box */}
                <div className="w-14 h-14 bg-white rounded-[14px] flex items-center justify-center shadow-sm">
                  {f.icon}
                </div>
              </div>

              {/* Text below card */}
              <div>
                <p className="font-display font-bold text-[14px] text-[#0A0A0A] leading-tight mb-1">{f.title}</p>
                <p className="text-gray-400 text-[12px] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow navigation */}
        <div className="flex items-center gap-3 mt-10">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-black transition-all"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-black transition-all"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}