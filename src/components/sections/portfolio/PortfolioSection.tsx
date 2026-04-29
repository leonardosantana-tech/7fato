"use client";

import { portfolio } from "@/data/mock/portfolio";
import { motion } from "framer-motion";

export default function PortfolioCarousel() {
  // Triplicamos os itens para garantir que o loop seja infinito e sem espaços em branco
  const items = [...portfolio, ...portfolio, ...portfolio];

  return (
    <section className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter">
          Artistas <span className="text-white/10">/ Portfólio</span>
        </h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Ajuste a velocidade aqui (mais alto = mais lento)
            repeat: Infinity,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group min-w-[300px] h-[500px] relative overflow-hidden transition-all duration-700"
              style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0% 100%)" }}
            >
              {/* Imagem do Artista */}
              <img
                src={item.image}
                alt={item.artist}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />

              {/* Overlay de Sombra */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Informações do Artista */}
              <div className="absolute bottom-10 left-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 block mb-2">
                  Artist
                </span>
                <h3 className="text-2xl font-black italic uppercase text-white leading-none">
                  {item.artist}
                </h3>
              </div>

              {/* Borda Lateral Estilizada */}
              <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 group-hover:bg-white/40 transition-colors" />
            </div>
          ))}
        </motion.div>

        {/* Gradientes laterais para suavizar o corte do carrossel */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
