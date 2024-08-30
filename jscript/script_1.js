/* FUNZIONI */
// funzione per generare tot numeri casuali diversi tra loro e
// non maggiori di un max
function getRandomNumbers (max, totalNumbers) {
  const numbers = [];

  while (numbers.length < totalNumbers) {
    const randNum = Math.floor(Math.random() * max) + 1;
    if (!numbers.includes(randNum)) numbers.push(randNum);
  }

  return numbers;
}


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
];

// FASE DI ELABORAZIONE
// 1. Con il metodo forEach verifico ogni peso con il successivo al fine di prendere il peso più basso. Imposto una variabile settata sul primo peso dell'array e che tenga conto della bici con peso durante il ciclo con il forEach
let currentLighterWeight = bikes[0].weight;
bikes.forEach(({weight}) => {
  if (currentLighterWeight > weight) currentLighterWeight = weight;
});
// 2. Stampo il peso più leggero in console
console.log(currentLighterWeight);
// 3. Filtro il la bicicletta più leggera con filter
const lighterBike = bikes.filter(({weight}) => weight === currentLighterWeight);
// 4. Stampo l'oggetto bici più leggera in console
console.log(lighterBike);
// 5. Recupero il nome della bici più leggera e lo stampo in console
const lighterBikeName = lighterBike[0].name;
console.log(lighterBikeName);


// snack 4

// FASE DI SET UP
let streetfootballTeams =
[
  {
    teamName: 'Compagnia dei Celestini',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Yokkmokk Fiällrävar',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Slaiv Gallion Braes',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Manakoko Wallabies',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Pelorinho Pivetes Bahia',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Chumatien Shaolin Little Dragons',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: ' Zaire Red Lions',
    teamPoints: 0,
    teamFouls: 0,
  },
  {
    teamName: 'Berliner Aas Devils',
    teamPoints: 0,
    teamFouls: 0,
  },
];

// FASE DI ELABORAZIONE
// 1. Aggiungo con il metodo forEach d'array i punti ed i falli delle squadre casualmente, suppondendo che nessuno abbia pià di 20 punti e 10 falli
for (let team of streetfootballTeams) {
  team.teamPoints = getRandomNumbers (20, 1)[0];
  team.teamFouls = getRandomNumbers (10, 1)[0];
}
// 2. Stampo in console l'array di oggetti con i numeri casuali inseriti
console.log(streetfootballTeams);
// 3. Con map creo un array che contenga solo i nomi e falli subiti
const newStreetfootballTeams = streetfootballTeams.map(({teamName, teamFouls}) => {
  const currentTeam = {teamName: teamName, teamFouls: teamFouls};
return currentTeam ;
});
// 4. Stampo in console il nuovo Array
console.log(newStreetfootballTeams);
