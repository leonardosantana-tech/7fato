"use client";

import { usePlayer } from "@/hooks/usePlayer";
import { Play } from "lucide-react";

export default function BeatCard({ beat }: any) {
  const { playTrack, currentTrack, isPlaying } = usePlayer();

  const isCurrent = currentTrack?.id === beat.id;

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{beat.title}</h3>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Exclusive License
          </p>
        </div>

        <button
          onClick={() => playTrack(beat)}
          className={`p-4 rounded-full transition-all ${
            isCurrent && isPlaying
              ? "bg-green-500 text-black scale-110"
              : "bg-white text-black hover:scale-110"
          }`}
        >
          <Play size={20} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
