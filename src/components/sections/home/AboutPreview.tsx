export default function AboutPreview() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-24 overflow-hidden bg-gbg">
      {/* 
          Ajustamos o gradiente:
          - from-transparent: começa do topo
          - via-gbg/40: movemos o ponto médio para 20% (surgindo mais cedo)
          - to-black: forçamos o preto a começar a dominar a partir de 60% da altura
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gbg/40 via-30% to-black to-60% z-0" />

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">
            A Identidade <br />
            <span className="text-white/40">da Nova Cena.</span>
          </h2>
          <div className="w-20 h-1 bg-white mb-6" />
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 text-lg leading-relaxed">
            A <span className="text-white font-bold">7FATO</span> é um estúdio
            de produção musical focado em qualidade, identidade sonora e
            evolução artística voltada para artistas independentes!
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Especializados em Hip Hop e R&B, entregamos a estética que as
            plataformas de streaming exigem hoje.
          </p>
          <p className="text-gray-500 text-sm italic">
            Localizado na Zona Leste de São Paulo.
          </p>
        </div>
      </div>
    </section>
  );
}
