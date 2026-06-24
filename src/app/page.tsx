import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeBanner from "@/components/sections/Marquee";
import Process from "@/components/sections/Process";
import WhyScalify from "@/components/sections/WhyScalify";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Process />
      <WhyScalify />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}