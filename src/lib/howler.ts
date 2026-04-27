import { Howl } from "howler";

export const createHowl = (src: string, onEnd: () => void) => {
  return new Howl({
    src: [src],
    html5: true, // Importante para streaming de áudio longo
    onend: onEnd,
  });
};
