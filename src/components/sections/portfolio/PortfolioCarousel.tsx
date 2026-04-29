"use client";

import { portfolio } from "@/data/mock/portfolio";
import { motion } from "framer-motion";

export default function PortfolioCarousel() {
  // duplicação para loop infinito
  const items = [...portfolio, ...portfolio];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[250px] h-[400px] relative rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.artist}
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* nome */}
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-bold">{item.artist}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
