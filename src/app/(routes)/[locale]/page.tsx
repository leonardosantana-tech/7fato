import Hero from "@/components/sections/home/Hero";
import FeaturedBeats from "@/components/sections/home/FeaturedBeats";
import Services from "@/components/sections/home/Services";
import AboutPreview from "@/components/sections/home/AboutPreview";
import SocialProof from "@/components/sections/home/SocialProof";
import CTA from "@/components/sections/home/CTA";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Impacto Visual */}
      <Hero />

      {/* 2. Vitrine de Beats (Antiga lista que estava aqui) */}
      <FeaturedBeats />

      {/* 3. Gravação Mix e Master */}
      <Services />

      {/* 4. Portfolio / Artistas */}
      <PortfolioSection />

      {/* 5. Sobre */}
      <AboutPreview />

      {/* 6. Depoimentos */}
      <SocialProof />

      {/* 7. Chamada para ação */}
      <CTA />
    </div>
  );
}
