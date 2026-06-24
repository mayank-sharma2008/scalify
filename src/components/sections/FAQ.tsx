"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  { q: "How fast will I receive my website?", a: "Most websites are delivered within 7 days of receiving your brief. Complex projects may take a little longer, but we always keep you updated." },
  { q: "How does the process work?", a: "You choose a package, fill out a short brief, and we take it from there. We design, write the copy, and build the site. You review and approve — or request revisions." },
  { q: "Do I need to write the content myself?", a: "No. Copywriting is fully included in every package. We write every word based on your brief." },
  { q: "What do I need to provide?", a: "Just your business name, what you do, your target audience, and any inspiration sites. That's it." },
  { q: "What if I don't like the first draft?", a: "No problem. We offer unlimited revisions until you're 100% happy with the result." },
  { q: "Do you handle domain and hosting?", a: "We deploy to Vercel (free tier available). You own the domain — we can guide you through connecting it." },
  { q: "Who builds my website?", a: "Scalify is a one-person studio. You work directly with the founder from start to finish." },
  { q: "Can I see the code?", a: "Absolutely. You get 100% of the source code. It's yours forever." },
  { q: "What if I need more pages later?", a: "We offer maintenance and expansion packages. Just reach out and we'll sort it." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Client logos marquee */}
        <div className="overflow-hidden mb-20 border-b border-gray-100 pb-10">
          <div className="flex animate-marquee-slow whitespace-nowrap w-max gap-16 items-center">
            {["WriteAI ✦", "ELEVON ✦", "Furniture Store ✦", "Lumière Salon ✦", "Nectar ✦", "WriteAI ✦", "ELEVON ✦", "Furniture Store ✦", "Lumière Salon ✦", "Nectar ✦"].map((name, i) => (
              <span key={i} className="text-sm text-gray-300 font-medium tracking-wide">{name}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* FAQ list */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="font-display text-[42px] font-bold text-[#0A0A0A] leading-tight">
                <em className="text-[#7C3AED]" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>Frequently</em> asked<br />questions.
              </h2>
            </motion.div>

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100">
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4 group">
                    <span className="text-[15px] text-[#0A0A0A] font-medium group-hover:text-[#7C3AED] transition-colors">{faq.q}</span>
                    <span className={`text-gray-400 text-lg transition-transform duration-200 flex-shrink-0 ${open === i ? "rotate-180" : ""}`}>∨</span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <p className="text-gray-400 text-sm leading-relaxed pb-5">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Book a call card */}
          <div className="flex flex-col gap-5">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-3xl p-8 flex flex-col gap-5 sticky top-24"
              style={{ background: "linear-gradient(135deg, #ff80b5 0%, #c44fed 40%, #7c3aed 70%, #f97316 100%)" }}>
              <div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center text-2xl">😊</div>
              <div>
                <h3 className="text-white font-display font-bold text-2xl leading-tight">Book a 15-min<br />intro call</h3>
                <p className="text-white/70 text-sm mt-2">Let&apos;s chat about your project.<br />No pressure. Just clarity.</p>
              </div>
              <Link href="https://cal.com" target="_blank"
                className="bg-white text-[#0A0A0A] font-semibold text-sm px-6 py-3.5 rounded-full text-center hover:scale-[1.02] transition-transform block">
                Book a call →
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs">✉️</div>
                <div>
                  <p className="text-white/60 text-xs">Prefer email?</p>
                  <a href="mailto:hello@scalify.in" className="text-white text-sm font-medium hover:underline">hello@scalify.in</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}