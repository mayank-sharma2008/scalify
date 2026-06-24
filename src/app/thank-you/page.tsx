"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center text-4xl mx-auto mb-8">😊</div>
        <h1 className="font-display font-bold text-[42px] text-[#0A0A0A] leading-tight mb-4">
          You&apos;re in!
        </h1>
        <p className="text-gray-400 text-[17px] mb-8">
          Payment confirmed. We&apos;ll reach out within 24 hours to kick off your project.
        </p>
        <Link href="/" className="bg-[#7C3AED] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#6D28D9] transition-colors">
          Back to home
        </Link>
      </motion.div>
    </main>
  );
}