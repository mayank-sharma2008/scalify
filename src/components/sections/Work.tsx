"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Mayank — Web Developer",
    desc: "Personal portfolio — Bold typographic design with code-backdrop hero and AI-forward developer brand.",
    tag: "Portfolio",
    tagColor: "#7C3AED",
    link: "https://mayank-sharma2008.github.io/MyPortfolio/",
    gradient: "linear-gradient(135deg, #d6d0c4 0%, #c8c0b0 50%, #bab0a0 100%)",
    textColor: "#1a1a1a",
    preview: (
      <div className="rounded-xl overflow-hidden w-full min-h-[160px] flex flex-col relative" style={{ background: "linear-gradient(135deg, #ccc5b5 0%, #bdb0a0 100%)" }}>
       {/* Simulated code background text */}
        <div className="absolute inset-0 opacity-30 overflow-hidden p-2">
          <p className="text-[6px] text-stone-600 font-mono leading-relaxed break-all">
            {"<?php bloginfo('charset'); ?> content='width=device-width' $menu_pos $theme_options src_attr $menu_position fruitrain $body_class"}
          </p>
        </div>
        {/* Navbar */}
        <div className="relative z-10 flex justify-between items-center px-3 py-2">
          <span className="text-stone-800 text-[9px] font-bold">Mayank</span>
          <div className="flex gap-2 text-[7px] text-stone-600 font-medium">
            <span>ABOUT</span><span>SKILLS</span><span>PROJECTS</span>
          </div>
        </div>
        {/* Hero text */}
        <div className="relative z-10 px-3 pt-1 pb-3">
          <p className="text-stone-900 font-black leading-[1.0]" style={{ fontSize: "17px" }}>I Build Websites.</p>
          <p className="font-black leading-[1.0]" style={{ fontSize: "17px", color: "#8b7355" }}>AI Does the Heavy Lifting.</p>
          <p className="text-stone-600 text-[7px] mt-2 leading-relaxed max-w-[180px]">I help businesses and founders get clean, functional websites built fast.</p>
          <div className="flex gap-2 mt-2">
            <div className="bg-stone-900 text-white text-[6px] font-bold px-2.5 py-1.5 rounded">START A PROJECT ↗</div>
            <div className="border border-stone-400 text-stone-600 text-[6px] font-bold px-2.5 py-1.5 rounded">VIEW WORK</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Furniture Store",
    desc: "Premium furniture brand — elegant editorial design with full product showcase.",
    tag: "E-commerce",
    tagColor: "#92400e",
    link: "https://mayank-sharma2008.github.io/furniture/",
    gradient: "linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 50%, #d4c4a0 100%)",
    textColor: "#1a1a1a",
    preview: (
      <div className="bg-stone-100 rounded-xl p-4 w-full min-h-[160px] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-stone-800 text-[10px] font-serif font-bold italic">Furniture</span>
          <div className="bg-stone-900 text-white text-[7px] font-bold px-2 py-1 rounded">BOOK CONSULT</div>
        </div>
        <div>
          <p className="text-stone-800 text-[15px] font-serif font-bold leading-tight">Designed to Last.</p>
          <p className="text-stone-800 text-[15px] font-serif font-bold leading-tight">Built to Impress.</p>
          <p className="text-stone-500 text-[8px] italic mt-1">Premium furniture for interiors that mean something.</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="bg-stone-900 text-white text-[7px] font-bold px-3 py-1.5 rounded">EXPLORE</div>
          <div className="border border-stone-400 text-stone-600 text-[7px] font-bold px-3 py-1.5 rounded">LOOKBOOK</div>
        </div>
      </div>
    ),
  },
  {
    title: "ELEVON",
    desc: "Energy supplement brand — bold, high-impact design built to convert fitness enthusiasts.",
    tag: "Brand",
    tagColor: "#EF4444",
    link: "https://mayank-sharma2008.github.io/Elevon/",
    gradient: "linear-gradient(135deg, #111111 0%, #1f1f1f 50%, #0f0f0f 100%)",
    textColor: "white",
    preview: (
      <div className="bg-[#111] rounded-xl p-4 w-full min-h-[160px] flex flex-col justify-between">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-white text-[11px] font-black tracking-wider">ELEV<span className="text-red-500">ON</span></span>
          <span className="text-red-500 text-[10px] font-black">•</span>
        </div>
        <div>
          <p className="text-white text-[13px] font-black leading-tight uppercase">High Calories.</p>
          <p className="text-[13px] font-black leading-tight uppercase" style={{background:"linear-gradient(90deg,#ef4444,#f97316,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Zero Compromise.</p>
          <p className="text-gray-400 text-[7px] mt-1">Built for diet-conscious people who refuse to eat junk.</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="bg-red-500 text-white text-[7px] font-black px-3 py-1.5 rounded">SHOP NOW</div>
          <div className="bg-gray-800 text-white text-[7px] font-bold px-3 py-1.5 rounded">HOW IT WORKS</div>
        </div>
      </div>
    ),
  },
  {
    title: "Lumière Salon",
    desc: "Luxury salon brand — dark editorial aesthetic with gold accents and appointment booking.",
    tag: "Service",
    tagColor: "#b45309",
    link: "https://mayank-sharma2008.github.io/Salon/",
    gradient: "linear-gradient(135deg, #1a2a1a 0%, #0d1f0d 50%, #0a1a0a 100%)",
    textColor: "white",
    preview: (
      <div className="bg-[#0d1a0d] rounded-xl p-4 w-full min-h-[160px] flex flex-col justify-between">
        <div className="flex justify-end mb-2">
          <div className="bg-[#1a3a1a] rounded-full px-3 py-1 flex items-center gap-2">
            <span className="text-green-400 text-[8px] font-bold">Lumière</span>
            <div className="bg-green-500 text-white text-[7px] font-bold px-2 py-0.5 rounded-full">Book Now</div>
          </div>
        </div>
        <div>
          <p className="text-white text-[14px] font-black leading-tight">Your Most Beautiful</p>
          <p className="text-[14px] font-black leading-tight" style={{color:"#d4af37"}}>Self Starts Here</p>
          <p className="text-gray-400 text-[7px] mt-1">Award-winning stylists in the heart of Manhattan.</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="border border-white/30 text-white text-[7px] px-3 py-1.5 rounded-full">Book Appointment →</div>
        </div>
      </div>
    ),
  },
  {
    title: "WriteAI",
    desc: "AI content generation SaaS — clean minimal design with full dashboard and Supabase backend.",
    tag: "SaaS",
    tagColor: "#2563EB",
    link: "https://writeai-xi.vercel.app/",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EDE9FE 100%)",
    textColor: "#1e1b4b",
    preview: (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 w-full min-h-[160px] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">✦</div>
            <span className="text-gray-800 text-[10px] font-bold">WriteAI</span>
          </div>
          <div className="bg-blue-600 text-white text-[7px] font-bold px-2 py-1 rounded-full">Get Started</div>
        </div>
        <div className="text-center py-2">
          <p className="text-gray-900 text-[14px] font-black leading-tight">Write better.</p>
          <p className="text-blue-600 text-[14px] font-black leading-tight">Write faster.</p>
          <p className="text-gray-400 text-[7px] mt-1">Generate blog posts, ad copy & emails in seconds.</p>
        </div>
        <div className="bg-blue-600 text-white text-[7px] font-bold px-3 py-1.5 rounded-full text-center mt-1">Start Writing Free →</div>
      </div>
    ),
  },
  {
    title: "Mayank.dev",
    desc: "Alternative portfolio — dark creative developer showcase with motion and stack highlights.",
    tag: "Portfolio",
    tagColor: "#7C3AED",
    link: "https://mayank-sharma2008.github.io/more/",
    gradient: "linear-gradient(135deg, #050505 0%, #111111 50%, #0a0a1a 100%)",
    textColor: "white",
    preview: (
      <div className="bg-[#050505] rounded-xl p-4 w-full min-h-[160px] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-[9px] font-bold">mayank.dev</span>
          <div className="border border-white/20 text-white text-[7px] px-2 py-1 rounded-full">LET'S TALK</div>
        </div>
        <div>
          <div className="inline-flex items-center gap-1 border border-teal-500/30 bg-teal-500/10 text-teal-400 text-[7px] px-2 py-1 rounded-full mb-2">
            <span className="w-1 h-1 bg-teal-400 rounded-full"></span> OPEN TO COLLABORATE
          </div>
          <p className="text-[16px] font-black leading-tight" style={{background:"linear-gradient(90deg,#22d3ee,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Creative</p>
          <p className="text-[16px] font-black leading-tight" style={{background:"linear-gradient(90deg,#22d3ee,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Developer ✦</p>
        </div>
        <div className="flex gap-4 mt-1">
          {[["15+","PROJECTS"],["3+","YRS"],["500+","COMMITS"]].map(([v,l])=>(
            <div key={l}><p className="text-white text-[9px] font-bold">{v}</p><p className="text-gray-600 text-[6px]">{l}</p></div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[#7C3AED] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 flex items-center justify-center gap-2">✦ Recent Work</p>
          <h2 className="font-display text-[48px] md:text-[56px] font-bold text-[#0A0A0A] leading-tight">
            Built by us.<br />
            <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>Owned by you.</em>
          </h2>
          <p className="text-gray-400 mt-5 text-[17px] max-w-lg mx-auto">
            Every project is custom-built, fully handed over, and made to convert. Here's a sample of what we ship.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-[24px] overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Preview card */}
              <div className="p-4 flex-1" style={{ background: p.gradient }}>
                {p.preview}
              </div>

              {/* Info */}
              <div className="p-5 bg-white flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-[16px] text-[#0A0A0A]">{p.title}</h3>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border" style={{ color: p.tagColor, borderColor: `${p.tagColor}30`, backgroundColor: `${p.tagColor}10` }}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-[13px] leading-relaxed">{p.desc}</p>
                <Link
                  href={p.link}
                  target="_blank"
                  className="flex items-center gap-1.5 text-[#7C3AED] text-[13px] font-semibold hover:gap-3 transition-all duration-200 group-hover:underline"
                >
                  View live site <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-[16px] mb-6">Want something like this for your business?</p>
          <Link
            href="#pricing"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 inline-block hover:scale-[1.02]"
          >
            Start your project →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}