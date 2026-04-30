"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Camera, PlayCircle, Share2, MonitorPlay } from "lucide-react";

const carouselImages = [
  "/images/about/studio1.jpg",
  "/images/about/studio2.jpg",
  "/images/about/studio3.jpg",
  "/images/about/studio4.jpg",
];

export default function AboutSection() {
  const params = useParams();
  const locale = (params?.locale as "pt" | "en") || "pt";
  const loopImages = [...carouselImages, ...carouselImages];

  return (
    <main className="container mx-auto pt-28 pb-24 px-6">
      {/* 1. TÍTULO PADRÃO 7FATO */}
      <header className="mb-12">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
          {locale === "pt" ? "Sobre" : "About"}
        </h1>
        <p className="text-gray-500 italic">
          {locale === "pt"
            ? "A HISTÓRIA POR TRÁS DO SOM"
            : "THE STORY BEHIND THE SOUND"}
        </p>
      </header>

      {/* 2. CARROSSEL ANIMADO */}
      <div className="overflow-hidden mb-24 -mx-6">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopImages.map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[450px] h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/5"
            >
              <img
                src={img}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="7FATO Studio"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. HISTÓRIA DO ESTÚDIO */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 overflow-hidden bg-gbg">
        {/* O GRADIENTE DE SOMBRA (Preto transparente para Preto sólido) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bbg z-0" />

        {/* CONTEÚDO CENTRALIZADO (Limitado ao max-w-4xl) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-10 text-center">
            História do Estúdio
          </h2>

          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed italic">
              A <span className="text-white font-bold">7FATO</span> começou em
              2021, na Zona Leste de São Paulo. Depois de passar anos estudando
              música e produção, o{" "}
              <span className="text-white font-bold">Akally</span> reuniu o que
              tinha para montar o próprio estúdio ao lado do seu primo,
              Ciborgue. A ideia sempre foi ter um espaço próprio para
              desenvolver uma sonoridade com base na identidade do artista e
              trabalhar de verdade com a indústria musical.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed italic">
              Logo no início, o grupo Troca Justa e os MC’s Muzy e Kauzzz foram
              os primeiros a fechar com o estúdio. Eles confiaram no trabalho
              desde as primeiras sessões e essa parceria continua firme até
              hoje. O foco aqui continua o mesmo: oferecer uma produção de
              qualidade para quem vive a música no dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO TIME (AKALLY & IZZ) - GRADIENTE CONSISTENTE */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-32 overflow-hidden">
        {/* O GRADIENTE - AGORA EXATAMENTE IGUAL AO DA HOME/HERO */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* 4. PERFIL: AKALLY */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-sm"
            >
              <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden">
                <img
                  src="/images/team/akally.jpg"
                  alt="Akally"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white">
                Produção <span className="text-white/10">/ AKALLY</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                CEO e Produtor da 7FATO,{" "}
                <span className="text-white font-bold text-primary">
                  {" "}
                  Akally
                </span>{" "}
                é um artista conhecido por sua sonoridade diferenciada, pela sua
                versatilidade em trabalhar com diversos genêros musicais e pelo
                seu talento com instrumentos, como a guitarra.
              </p>
            </div>
          </div>

          {/* 5. PERFIL: IZZ */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4 text-right md:text-left">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 text-white">
                Marketing <span className="text-white/10">/ IZZ</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed italic">
                Responsável pelo Marketing da 7FATO,{" "}
                <span className="text-white font-bold text-primary"> Izz</span>{" "}
                é uma artista com visão de negócios e identidade visual para
                artistas do underground.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 md:order-2 flex justify-end"
            >
              <div className="max-w-sm w-full aspect-square bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden">
                <img
                  src="/images/team/izz.jpg"
                  alt="Izz"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. REDES SOCIAIS (COM ÍCONES ESTÁVEIS) */}
      <div className="grid grid-cols-1 gap-8">
        {[
          {
            label: "Instagram",
            icon: Camera,
            url: "https://instagram.com/7fato",
            img: "/images/social/ig-preview.jpg",
          },
          {
            label: "YouTube",
            icon: PlayCircle,
            url: "https://youtube.com/@7fato",
            img: "/images/social/yt-preview.jpg",
          },
          {
            label: "TikTok",
            icon: Share2,
            url: "https://tiktok.com/@7fato",
            img: "/images/social/tk-preview.jpg",
          },
          {
            label: "Twitch",
            icon: MonitorPlay,
            url: "https://twitch.tv/7fato",
            img: "/images/social/tw-preview.jpg",
          },
        ].map((social, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/30 transition-all"
          >
            <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={social.img}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                alt={social.label}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-black italic uppercase mb-4">
                {social.label}
              </h4>
              <button
                onClick={() => window.open(social.url, "_blank")}
                className="inline-flex items-center gap-3 bg-primary px-8 py-3 rounded-full font-bold text-white hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                <social.icon size={20} />
                {locale === "pt"
                  ? `Conhecer ${social.label}`
                  : `Visit ${social.label}`}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
