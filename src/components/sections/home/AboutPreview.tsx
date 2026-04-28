export default function AboutPreview() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">
            A Identidade <br />
            <span className="text-white/40">da Nova Cena.</span>
          </h2>
          <div className="w-20 h-1 bg-white mb-6" />
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 text-lg leading-relaxed">
            A <span className="text-white font-bold">7FATO</span> é mais que um
            estúdio; é um laboratório de hits focado em música urbana.
            Especializados em Trap e Rap, entregamos a estética que as
            plataformas de streaming exigem hoje.
          </p>
          <p className="text-gray-500 text-sm italic">
            Localizado na Zona Leste de São Paulo, transformamos ideias em
            sonoridade.
          </p>
        </div>
      </div>
    </section>
  );
}
