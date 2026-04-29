"use client";

import { Mic, Sliders, Music } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Gravação",
    desc: "Captação profissional em ambiente tratado",
  },
  {
    icon: Sliders,
    title: "Mixagem",
    desc: "Equilíbrio, clareza e impacto sonoro",
  },
  {
    icon: Music,
    title: "Masterização",
    desc: "Pronto para plataformas digitais",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Serviços</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              <Icon className="mb-4 text-[#09a401]" size={28} />

              <h3 className="text-lg font-bold mb-2">{service.title}</h3>

              <p className="text-sm text-white/60">{service.desc}</p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold mb-4">
          Pronto para elevar o nível do seu som?
        </h2>

        <button
          onClick={() => window.open("https://instagram.com", "_blank")}
          className="bg-[#09a401] px-6 py-3 rounded-full font-bold hover:opacity-90"
        >
          Falar no Instagram
        </button>
      </div>
    </section>
  );
}
