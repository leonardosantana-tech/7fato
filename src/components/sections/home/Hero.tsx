"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-black">
      {/* OVERLAY DE GRADIENTE PARA LEITURA */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />

      {/* VÍDEO DE FUNDO (Se não tiver o vídeo ainda, o fundo ficará preto sólido) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/studio.mp4" type="video/mp4" />
      </video>

      {/* CONTEÚDO PRINCIPAL */}
      <motion.div
        className="relative z-20 max-w-4xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-4 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Produção Musical Profissional
        </motion.span>

        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
          O Próximo Hit <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Começa Aqui.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-medium">
          Beats exclusivos, mixagem e masterização com o selo de qualidade
          7FATO.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-black font-black uppercase px-8 py-4 rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
            Ouvir Beats
          </button>

          <button className="bg-transparent border border-white/20 text-white font-bold uppercase px-8 py-4 rounded-full hover:bg-white/5 transition-all">
            Mixagem & Masterização
          </button>
        </div>
      </motion.div>

      {/* DECORAÇÃO LATERAL */}
      <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
        <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/20 uppercase rotate-90 origin-left">
          <span>São Paulo // SP</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>7Fato Studio</span>
        </div>
      </div>
    </section>
  );
}
