"use client";

import { useEffect } from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import NewsSection from "../components/news-section";
import PartnerSection from "../components/partner-section";
import AboutSection from "../components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const yOffset = -80;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewsSection />
      <PartnerSection />
      <AboutSection />
      <Footer />
    </main>
  );
}