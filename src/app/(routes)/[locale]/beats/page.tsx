"use client";

import BeatCard from "@/components/beats/BeatCard";
import { useBeatSearch } from "@/hooks/useBeatSearch";
import { Search, Filter } from "lucide-react";

export default function BeatsPage() {
  const { query, setQuery, genre, setGenre, beats } = useBeatSearch();

  return (
    <main className="container mx-auto pt-28 pb-24 px-6">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
          Catálogo de Beats
        </h1>
        <p className="text-gray-500">
          Encontre a sonoridade perfeita para o seu projeto.
        </p>
      </header>

      {/* 🔍 SEARCH & FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-full text-sm focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>

        <div className="relative">
          <Filter
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            size={18}
          />
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="appearance-none pl-12 pr-10 py-4 bg-white/[0.03] border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-white/30 cursor-pointer"
          >
            <option value="all" className="bg-neutral-900">
              Todos os Gêneros
            </option>
            <option value="trap" className="bg-neutral-900">
              Trap
            </option>
            <option value="rnb" className="bg-neutral-900">
              R&B
            </option>
          </select>
        </div>
      </div>

      {/* 🎧 LIST */}
      {beats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beats.map((beat) => (
            <BeatCard key={beat.id} beat={beat} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
          <p className="text-gray-500 italic">
            Nenhum beat encontrado para sua busca.
          </p>
        </div>
      )}
    </main>
  );
}
