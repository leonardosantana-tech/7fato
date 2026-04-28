import { Mic, Sliders, AudioWaveform } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Mic size={32} />,
      title: "Gravação",
      desc: "Captação profissional em ambiente acusticamente tratado para máxima fidelidade.",
    },
    {
      icon: <Sliders size={32} />,
      title: "Mixagem",
      desc: "Equilíbrio tonal e espacial para garantir que cada elemento da sua track brilhe.",
    },
    {
      icon: <AudioWaveform size={32} />,
      title: "Masterização",
      desc: "O polimento final necessário para que seu som soe profissional em qualquer sistema.",
    },
  ];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center md:text-left">
          Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2"
            >
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
