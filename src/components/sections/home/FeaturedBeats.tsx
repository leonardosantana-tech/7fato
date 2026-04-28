"use client";

import { beats } from "@/data/mock/beats";
import BeatCard from "@/components/beats/BeatCard";

export default function FeaturedBeats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">
              Beats em Destaque
            </h2>
            <p className="text-gray-500 text-sm">
              Explore as últimas produções do estúdio.
            </p>
          </div>

          <button className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">
            Ver Tudo
          </button>
        </div>

        {/* Scroll Horizontal com Snap */}
        <div className="flex gap-6 overflow-x-auto snap-x scrollbar-hide pb-4 -mx-6 px-6">
          {beats.map((beat) => (
            <div
              key={beat.id}
              className="min-w-[300px] md:min-w-[350px] snap-start"
            >
              <BeatCard beat={beat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
