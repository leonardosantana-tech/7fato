"use client";

export default function AboutSection() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Sobre</h1>

      <div className="space-y-6 text-white/70 text-sm leading-relaxed">
        <p>
          A 7FATO é um estúdio de produção musical focado em qualidade,
          identidade sonora e evolução artística.
        </p>

        <p>
          Trabalhamos com artistas independentes e projetos que buscam um som
          profissional, moderno e competitivo.
        </p>

        <p>
          Cada produção é tratada de forma única, respeitando a identidade do
          artista e elevando o nível do resultado final.
        </p>
      </div>

      {/* FUNDADORES */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="font-bold mb-2">Akally</h3>
          <p className="text-sm text-white/60">
            Produtor musical e engenheiro de áudio.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="font-bold mb-2">Izz</h3>
          <p className="text-sm text-white/60">
            Especialista em mixagem e masterização.
          </p>
        </div>
      </div>
    </section>
  );
}
