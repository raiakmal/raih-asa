import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import NewsSection from "../components/news-section"
import PartnerSection from "../components/partner-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewsSection />
      <PartnerSection />
    </main>
  )
}