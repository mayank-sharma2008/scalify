import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display font-bold text-xl text-[#0A0A0A]">Scalify</span>
          <p className="text-gray-400 text-sm">Based in Delhi, India</p>
        </div>
        <div className="flex items-center gap-8 text-sm text-gray-400">
          <Link href="#process" className="hover:text-black transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-black transition-colors">FAQ</Link>
          <a href="mailto:hello@scalify.in" className="hover:text-black transition-colors">hello@scalify.in</a>
        </div>
        <p className="text-gray-300 text-xs">© 2025 Scalify. All rights reserved.</p>
      </div>
    </footer>
  );
}