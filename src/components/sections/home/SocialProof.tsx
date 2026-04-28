export default function SocialProof() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 text-center mb-10">
          Trusted by Industry Talent
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {/* Aqui entrarão os logos dos artistas/gravadoras futuramente */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-32 h-12 bg-white/10 rounded-md grayscale hover:grayscale-0 transition-all cursor-pointer flex items-center justify-center border border-white/5"
            >
              <span className="text-[10px] font-bold">ARTIST_0{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
