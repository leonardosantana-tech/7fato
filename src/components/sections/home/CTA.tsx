export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
          Faça História <br /> No Nosso Estúdio.
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Sua música merece o tratamento 7FATO. Agenda aberta para novas
          produções e mixagens.
        </p>

        <button className="bg-white text-black font-black uppercase px-12 py-5 rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Entrar em Contato
        </button>

        <div className="mt-8 flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">
            WhatsApp
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">
            Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
