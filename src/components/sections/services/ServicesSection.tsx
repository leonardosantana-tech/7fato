"use client";

import { Mic, Sliders, Music } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const servicesData = {
  pt: [
    {
      icon: Mic,
      title: "Gravação",
      desc: "Captação profissional em ambiente tratado e equipamentos de ponta.",
    },
    {
      icon: Sliders,
      title: "Mixagem",
      desc: "Equilíbrio, estética e profundidade sonora para sua produção se destacar.",
    },
    {
      icon: Music,
      title: "Masterização",
      desc: "O polimento final necessário para todas as plataformas digitais.",
    },
  ],
  en: [
    {
      icon: Mic,
      title: "Recording",
      desc: "Professional capture in a treated environment with top-tier gear.",
    },
    {
      icon: Sliders,
      title: "Mixing",
      desc: "Balance, clarity, and sonic impact to make your production stand out.",
    },
    {
      icon: Music,
      title: "Mastering",
      desc: "The final polish needed for all digital streaming platforms.",
    },
  ],
};

export default function ServicesSection() {
  const params = useParams();
  const locale = (params?.locale as "pt" | "en") || "pt";
  const services = servicesData[locale];

  return (
    <main className="container mx-auto pt-28 pb-24 px-6">
      {/* 🏁 HEADER IDENTICO AO DE BEATS */}
      <header className="mb-12">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
          {locale === "pt" ? "Serviços" : "Services"}
        </h1>
        <p className="text-gray-500">
          {locale === "pt"
            ? "Qualidade 7FATO para elevar o nível do seu projeto."
            : "7FATO quality to level up your project."}
        </p>
      </header>

      {/* 🧱 GRID COM ANIMAÇÃO DE ENTRADA (ESTILO CATÁLOGO) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-white/50 transition-all duration-500"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <Icon
                  className="text-primary group-hover:text-white transition-colors"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-black italic uppercase tracking-tight mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 📱 CTA - BOTÃO INSTAGRAM CORRIGIDO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 py-20 text-center border border-dashed border-white/10 rounded-3xl"
      >
        <h2 className="text-2xl font-black italic uppercase mb-8 tracking-tighter">
          {locale === "pt" ? "Pronto para começar?" : "Ready to start?"}
        </h2>

        <button
          onClick={() => window.open("https://instagram.com/7fato", "_blank")}
          className="group flex items-center gap-3 bg-primary mx-auto px-10 py-4 rounded-full font-bold text-white hover:scale-105 transition-all shadow-xl shadow-primary/10"
        >
          {/* Trocamos o ícone para garantir que o build passe sem erro */}
          <div className="bg-white/20 p-1 rounded-md">
            <Sliders size={16} className="text-white" />
          </div>
          {locale === "pt" ? "Falar no Instagram" : "Let's talk"}
        </button>
      </motion.div>
    </main>
  );
}
