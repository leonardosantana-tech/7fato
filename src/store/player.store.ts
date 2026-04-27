import { create } from "zustand";
import { Howl } from "howler";

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover: string;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  howl: Howl | null;

  // Ações
  setTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 0.5,
  howl: null,

  setTrack: (track) => {
    const { howl } = get();
    if (howl) howl.stop(); // Para o áudio atual antes de começar o novo

    const newHowl = new Howl({
      src: [track.url],
      html5: true,
      volume: get().volume,
      onplay: () => set({ isPlaying: true }),
      onpause: () => set({ isPlaying: false }),
      onstop: () => set({ isPlaying: false }),
    });

    newHowl.play();
    set({ currentTrack: track, howl: newHowl, isPlaying: true });
  },

  togglePlay: () => {
    const { howl, isPlaying } = get();
    if (!howl) return;

    if (isPlaying) {
      howl.pause();
    } else {
      howl.play();
    }
    set({ isPlaying: !isPlaying });
  },

  setVolume: (volume) => {
    const { howl } = get();
    if (howl) howl.volume(volume);
    set({ volume });
  },
}));
