"use client";

import { useState } from "react";
import { usePlayer } from "@/hooks/usePlayer";
import BuyModal from "./BuyModal";
import { Play, ShoppingCart } from "lucide-react";

export default function BeatCard({ beat }: any) {
  const { playTrack, currentTrack, isPlaying } = usePlayer();
  const [open, setOpen] = useState(false);

  const isCurrent = currentTrack?.id === beat.id;

  return (
    <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl hover:border-white/20 transition-all group">
      <div className="mb-4">
        <h3 className="font-bold text-lg tracking-tight">{beat.title}</h3>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          {beat.genre} <span className="mx-1">•</span> {beat.bpm} BPM
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => playTrack(beat)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
            isCurrent && isPlaying
              ? "bg-white text-black scale-[0.98]"
              : "bg-white/10 text-white hover:bg-white hover:text-black"
          }`}
        >
          <Play size={14} fill="currentColor" />
          {isCurrent && isPlaying ? "Tocando" : "Ouvir"}
        </button>

        <button
          onClick={() => setOpen(true)}
          className="p-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
        >
          <ShoppingCart size={18} />
        </button>
      </div>

      {open && (
        <BuyModal beatName={beat.title} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
