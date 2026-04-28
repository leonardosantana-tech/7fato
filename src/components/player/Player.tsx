"use client";

import { useEffect } from "react";
import { usePlayer } from "@/hooks/usePlayer";
import { Play, Pause, Volume2 } from "lucide-react";

export default function Player() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    progress,
    duration,
    seek,
    volume,
    setVolume,
    _hasHydrated,
    setHasHydrated,
  } = usePlayer();

  // Garante que o estado do localStorage seja lido antes de renderizar
  useEffect(() => {
    setHasHydrated(true);
  }, [setHasHydrated]);

  if (!_hasHydrated || !currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex items-center gap-6">
        {/* CONTROLES */}
        <button
          onClick={togglePlay}
          className="bg-white text-black p-3 rounded-full hover:scale-105 transition-transform active:scale-95"
        >
          {isPlaying ? (
            <Pause size={20} fill="black" />
          ) : (
            <Play size={20} fill="black" />
          )}
        </button>

        {/* INFO & PROGRESSO */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex justify-between items-end">
            <p className="text-sm font-bold tracking-tight text-white uppercase">
              {currentTrack.title}
            </p>
            <span className="text-[10px] text-gray-500 font-mono">
              {Math.floor(progress / 60)}:
              {(progress % 60).toFixed(0).padStart(2, "0")} /{" "}
              {Math.floor(duration / 60)}:
              {(duration % 60).toFixed(0).padStart(2, "0")}
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>

        {/* VOLUME (Escondido em telas muito pequenas) */}
        <div className="hidden md:flex items-center gap-2 w-32">
          <Volume2 size={16} className="text-gray-400" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>
    </div>
  );
}
