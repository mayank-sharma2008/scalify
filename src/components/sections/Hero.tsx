"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function useCountUp(target: number, duration: number = 1500, inView: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
}

export default function Hero() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(50, 1200, inView);
  const days = useCountUp(7, 800, inView);
  const satisfaction = useCountUp(100, 1500, inView);

  return (
    <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col gap-7">
          <motion.div whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 text-xs font-medium px-4 py-2 rounded-full w-fit tracking-wide uppercase cursor-default">
            ✦ Websites delivered in 7 days
          </motion.div>

          <h1 className="font-display text-[58px] leading-[1.03] font-bold text-[#0A0A0A]">
            Websites,{" "}
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>done right.</em>
          </h1>

          <p className="text-[17px] text-gray-400 leading-relaxed">Fixed price. Fixed timeline. No agency drama.</p>

          <div className="flex items-center gap-3 pt-1">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#pricing" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200 block">
                Order now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#portfolio" className="border border-gray-200 hover:border-gray-400 text-[#0A0A0A] px-7 py-3.5 rounded-full text-[15px] font-medium transition-all duration-200 block">
                See our work
              </Link>
            </motion.div>
          </div>

          {/* Animated stats */}
          <div ref={ref} className="flex items-center gap-8 pt-2 border-t border-gray-100 mt-2">
            <div>
              <p className="font-display font-bold text-2xl text-[#0A0A0A]">{projects}+</p>
              <p className="text-xs text-gray-400 mt-0.5">Projects shipped</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div>
              <p className="font-display font-bold text-2xl text-[#0A0A0A]">{days} Days</p>
              <p className="text-xs text-gray-400 mt-0.5">Average delivery</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div>
              <p className="font-display font-bold text-2xl text-[#0A0A0A]">{satisfaction}%</p>
              <p className="text-xs text-gray-400 mt-0.5">Code ownership</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="absolute -top-4 left-4 z-10 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Start today
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 min-h-[360px] flex flex-col justify-between relative overflow-hidden cursor-pointer"
            style={{ background: "linear-gradient(140deg, #ff80b5 0%, #b06ef3 35%, #7c3aed 65%, #4f46e5 85%, #f97316 100%)" }}
          >
            <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-xl p-3.5 w-48">
              <div className="flex gap-1 mb-2.5">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-gray-900 rounded-lg p-2.5 mb-2">
                <p className="text-white text-[9px] font-black tracking-tight leading-tight">ELEVATE<br />YOUR BRAND</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 bg-gray-100 rounded-full w-full"></div>
                <div className="h-1.5 bg-gray-100 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="mt-auto">
              <h2 className="text-white font-display font-bold text-[32px] leading-tight mb-2">Build a site<br />that converts.</h2>
              <p className="text-white/70 text-sm mb-7">Productized web development.<br />Delivered in 7 days.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="#pricing" className="bg-white text-[#0A0A0A] font-semibold text-sm px-6 py-3 rounded-full inline-block">
                  See pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-3 border border-gray-100 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center text-base">😊</div>
              <div>
                <p className="text-sm font-semibold text-[#0A0A0A]">Kick off your project in 24 hours</p>
                <p className="text-xs text-gray-400">No calls. No delays.</p>
              </div>
            </div>
            <motion.div whileHover={{ x: 3 }} className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-sm">→</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}