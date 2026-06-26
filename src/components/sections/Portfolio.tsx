"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const testimonials = [
  {
    quote: "Clean design, fast delivery. Exactly what my startup needed.",
    name: "Early Client",
    role: "Startup Founder, Delhi",
    color: "#7C3AED"
  },
  {
    quote: "Got my furniture store site in under a week. No back and forth.",
    name: "Business Owner",
    role: "Furniture Store, India",
    color: "#F97316"
  },
];

const features = ["Landing Pages","Business Websites","Portfolio Sites","Startup Websites","Copywriting","Animations","Next.js","SEO Setup","Responsive Design","Contact Forms","Performance","Vercel Deployment","Brand Websites","UI Design","Maintenance"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-5 flex items-center justify-center gap-2">✦ Trusted by Founders</p>
          <h2 className="font-display text-[48px] md:text-[54px] font-bold text-[#0A0A0A] leading-tight">
            Websites <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>you&apos;ll never</em> want to replace.
          </h2>
          <p className="text-gray-400 mt-5 text-[17px]">Scalify replaces slow agencies, unreliable freelancers,<br />and DIY builders with fixed-price websites delivered fast.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                className="border border-gray-100 rounded-3xl p-7 flex flex-col gap-4 cursor-default transition-shadow">
                <p className="text-[18px] font-display font-bold text-[#0A0A0A] leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: t.color }}>😊</div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Animated stats */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="border border-gray-100 rounded-3xl p-7 grid grid-cols-3 gap-4">
              {[
                { value: 50, suffix: "+", label: "Projects shipped" },
                { value: 7, suffix: " Days", label: "Avg. delivery" },
                { value: 100, suffix: "%", label: "Code ownership" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display font-bold text-2xl text-[#0A0A0A]">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Features */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="border border-gray-100 rounded-3xl p-7 flex flex-col gap-4">
            <p className="font-display font-bold text-[22px] text-[#0A0A0A] leading-snug">
              Everything your business<br /><span className="text-[#7C3AED]">website needs.</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {features.map((f) => (
                <motion.span key={f} whileHover={{ scale: 1.05, backgroundColor: "#F5F3FF", borderColor: "#7C3AED" }}
                  className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full cursor-default transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}