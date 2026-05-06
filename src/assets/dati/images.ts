import dati1 from './dati1.jpeg';
import dati2 from './dati2.jpeg';
import dati3 from './dati3.jpeg';
import dati4 from './dati4.jpeg';
import dati5 from './dati5.jpeg';
import dati6 from './dati6.jpeg';
import dati7 from './dati7.jpeg';

export const datiImages = [dati1, dati2, dati3, dati4, dati5, dati6, dati7];

export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = src;
        }),
    ),
  );
}
