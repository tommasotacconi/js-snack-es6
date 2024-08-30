/* FUNZIONI */

// snack 3

// FASE DI SET UP
/* DATI */
const bikes = [
  {
    name: 'Addict rc',
    weight: 6.7,
  },
  {
    name: 'Foil rc',
    weight: 6.95,
  },
  {
    name: 'Addict se',
    weight: 8,
  },
  {
    name: 'Speedster 10',
    weight: 10.1,
  },
  {
    name: 'Metrix 10',
    weight: 9,
  },
  {
    name: 'Speedster gravel rc',
    weight: 10.6
    ,
  },

]

// FASE DI ELABORAZIONE
// 1. Con il metodo forEach verifico ogni peso con il successivo al fine di prendere il peso più basso. Imposto una variabile settata sul primo peso dell'array e che tenga conto della bici con peso durante il ciclo con il forEach
let currentLighterWeight = bikes[0].weight;
bikes.forEach(bike => {
  if (currentLighterWeight > bike.weight) currentLighterWeight = bike.weight;
});

console.log(currentLighterWeight);

// 2. Filtro il la bicicletta più leggera con filter
const lighterBike = bikes.filter(bike => bike.weight === currentLighterWeight);

console.log(lighterBike);

// 3. Recupero il nome della bici più leggera
const lighterBikeName = lighterBike[0].name;

console.log(lighterBikeName);