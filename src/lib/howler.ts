import { Howl } from "howler";

let sound: Howl | null = null;
let rafId: number | null = null;
let currentSrc: string | null = null; // 🔥 Proteção Double Load
type ProgressCallback = (seek: number, duration: number) => void;
let onProgress: ProgressCallback | null = null;

const startProgressLoop = () => {
  if (!sound || !onProgress) return;
  const loop = () => {
    if (!sound || !onProgress) return;
    const seek = (sound.seek() as number) || 0; // 🔥 Failsafe
    const duration = sound.duration() || 0; // 🔥 Failsafe
    onProgress(seek, duration);
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);
};

const stopProgressLoop = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
};

export const audioEngine = {
  load: (src: string, volume: number) => {
    if (currentSrc === src && sound) return; // 🔥 Proteção contra Double Load em Dev Mode

    if (sound) {
      sound.unload();
      stopProgressLoop();
    }

    currentSrc = src;
    sound = new Howl({
      src: [src],
      html5: true,
      volume,
    });
  },
  play: () => {
    if (!sound || sound.state() === "unloaded") return;
    sound.play();
    startProgressLoop();
  },
  pause: () => {
    if (!sound) return;
    sound.pause();
    stopProgressLoop();
  },
  seek: (value: number) => {
    if (!sound) return;
    sound.seek(value);
  },
  setVolume: (value: number) => {
    if (!sound) return;
    sound.volume(value);
  },
  onProgress: (callback: ProgressCallback) => {
    onProgress = callback;
  },
};
