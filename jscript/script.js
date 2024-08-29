// snack 1

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

// 2. Creo una lista di oggetti a partire dal modello montandoli con il metodo map
const guestsList = namesList.map(function (guest, i) {
  model.guestName = guest;
  model.place = i + 1;
  const elementGuest = {...model};
  return elementGuest;
});

// 3. stampo in console il nuovo array
console.log(guestsList);


// snack 2

// FASE DI SET UP
// Id  Name                Grades
// 213 Marco della Rovere      78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna 	    48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello 	    68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84
const studentsLists = [
  {id: 213, name: 'Marco della Rovere', gradesSum: 78},
  {id: 110, name: 'Paola Cortellessa', gradesSum: 96},
  {id: 250, name: 'Andrea Mantegna', gradesSum: 48},
  {id: 145, name: 'Gaia Borromini', gradesSum: 74},
  {id: 196, name: 'Luigi Grimaldello', gradesSum: 68},
  {id: 102, name: 'Piero della Francesca', gradesSum: 50},
  {id: 120, name: 'Francesca da Polenta', gradesSum: 84}
];

// FASE DI ELABORAZIONE
// 1. Creo una lista di nomi scritti in maiuscolo montandoli con map
const studentsCapitalNamesList = studentsLists.map(student => student.name.toUpperCase());
// 2. Stampo la lista in console
console.log(studentsCapitalNamesList);

// 1. Creo una lista con gli studenti che hanno gradesSum > 70 usando il metodo filter
const studentsGradeAbove70 = studentsLists.filter(student => student.gradesSum > 70);
// 2. Stampo la lista in console
console.log(studentsGradeAbove70);

