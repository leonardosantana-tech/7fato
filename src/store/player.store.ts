import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { audioEngine } from "@/lib/howler";

export type Track = {
  id: string;
  title: string;
  url: string;
  cover?: string;
};

type PlayerState = {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  _hasHydrated: boolean;

  setHasHydrated: (state: boolean) => void;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (v: number) => void;
  seek: (time: number) => void;
};

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      currentTrack: null,
      isPlaying: false,
      volume: 0.7,
      progress: 0,
      duration: 0,
      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      playTrack: (track) => {
        const { currentTrack, volume } = get();
        const isSame = currentTrack?.id === track.id;

        if (!isSame) {
          audioEngine.load(track.url, volume);
          audioEngine.onProgress((seek, duration) => {
            set({ progress: seek, duration });
          });
        }

        audioEngine.play();
        set({ currentTrack: track, isPlaying: true });
      },

      togglePlay: () => {
        const { isPlaying, currentTrack, volume } = get();
        if (!currentTrack) return;

        if (isPlaying) {
          audioEngine.pause();
          set({ isPlaying: false });
        } else {
          // 🔥 FIX: Garante que o áudio seja carregado se vier do Storage pós-recarregamento
          audioEngine.load(currentTrack.url, volume);
          audioEngine.onProgress((seek, duration) => {
            set({ progress: seek, duration });
          });

          audioEngine.play();
          set({ isPlaying: true });
        }
      },

      setVolume: (v) => {
        audioEngine.setVolume(v);
        set({ volume: v });
      },

      seek: (time) => {
        audioEngine.seek(time);
        set({ progress: time });
      },
    }),
    {
      name: "7fato-player-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;

        // 🔥 AUTO-SYNC: Sincroniza o volume salvo com a engine de áudio
        audioEngine.setVolume(state.volume);
        state.setHasHydrated(true);
      },
      partialize: (state) => ({
        currentTrack: state.currentTrack,
        volume: state.volume,
      }),
    },
  ),
);
