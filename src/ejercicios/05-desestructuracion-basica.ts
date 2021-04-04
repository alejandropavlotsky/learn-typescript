interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  author: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    author: 'Ed Sheeran',
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { author } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El cancion actual es de: ', cancion);
// console.log('El segundo actual es de: ', segundo);
// console.log('El autor actual es de: ', author);

// ARRAY Destructuring

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
