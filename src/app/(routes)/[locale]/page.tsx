import BeatCard from "@/components/beats/BeatCard";
import { beats } from "@/data/mock/beats";

export default function Home() {
  return (
    <main className="container mx-auto p-8 pt-24 space-y-6">
      <header className="mb-12">
        <h1 className="text-5xl font-black tracking-tighter italic uppercase">
          Beats
        </h1>
        <p className="text-gray-400">
          Selecione a base para o seu próximo hit.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beats.map((beat) => (
          <BeatCard key={beat.id} beat={beat} />
        ))}
      </div>
    </main>
  );
}
