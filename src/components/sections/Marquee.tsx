"use client";
import { useState } from "react";

export default function MarqueeBanner() {
  const [paused, setPaused] = useState(false);
  const items = ["Landing pages","Business websites","Portfolio sites","Startup sites","Service pages","Brand websites","5-page packages","Copy included","7-day delivery","Next.js","SEO setup","Animations"];

  return (
    <div
      className="border-y border-gray-100 py-4 overflow-hidden bg-white cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`flex whitespace-nowrap w-max ${paused ? "" : "animate-marquee"}`}
        style={{ animationPlayState: paused ? "paused" : "running" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-7 text-sm text-gray-400 font-medium flex items-center gap-3 transition-colors hover:text-gray-700">
            {item} <span className="text-[#7C3AED] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}