// FASE DI SET UP
/* DATI */
const namesList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const tableName = 'Tavolo Vip';

// FASE DI ELABORAZIONE
// 1. Al fine di creare un oggetto per ogni nome nella lista, creo un oggetto generico che faccia da oggetto modello, cioé che abbia le proprietà desiderate
let model = {
  tableName: tableName,
  guestName: '',
  place: 0,
};

// 2. Creo una lista di oggetti a partire dal modello
const guestsList = namesList.map((guest, i) => {
  model.guestName = guest;
  model.place = i + 1;
  const elementGuest = {...model};
  return elementGuest;
});

// 3. stampo in console il nuovo array
console.log(guestsList);