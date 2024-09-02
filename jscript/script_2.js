// ES6 Snack 5
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

// Creo un array di stringhe
const names = ['sofia', 'FRANCESCO', 'Riccardo', 'giovanni', 'ADA', 'Marta'];

// Giro su tutte le variabili con map per creare un nuovo array sulla base del precedente
const formattedNames = names.map(element => element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());

//   // Prendo la prima lettera
//   let firstLetter = element[0];
//   // Prendo le altre lettere
//   let restLetters = element.slice(1, element.length);
//   console.log(firstLetter, restLetters);

//   // Unisco le lettere prese rendendo maiuscola la prima e minuscole le restanti. Ritorno il risultato
//   // di questa operazione per ottenere l'elemento corrispondente del nuovo array
//   return element[0].toUpperCase() + element.slice(1, element.length).toLowerCase();
// });

console.log(formattedNames);

// snack 6
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

// Creo un array di oggetti
const animals =
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi' },
  { nome: 'pecora', famiglia: 'bovidi', classe: 'mammiferi' },
  { nome: 'tortora', famiglia: 'columbidi', classe: 'uccelli' },
  { nome: 'fagiano', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'donnola', famiglia: 'mustelide', classe: 'mammifero' },
  { nome: 'gufo', famiglia: 'strigidi', classe: 'uccelli' },
  { nome: 'lumaca', famiglia: 'helicidae', classe: 'gasteropodi' },
];

// Creo l'array dei soli mammiferi con filter
const mammals = animals.filter(({classe}) => classe == 'mammiferi');

// Stampo il nuovo array in console
console.log(mammals);

// snack 7
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

// Creo l'array di persone con proprietà 'nome', 'cognome' e 'età'
const people = [
  {
    name: 'Gaspare',
    surname: 'Tommasi',
    age: 10,
  },
  {
    name: 'Matilde',
    surname: 'Scani',
    age: 49,
  },
  {
    name: 'Eleonora',
    surname: 'Nardi',
    age: 60,
  },
  {
    name: 'Fabio',
    surname: 'Martani',
    age: 25,
  },
  {
    name: 'Roberta',
    surname: 'Rovati',
    age: 18,
  },
];

// Con map creo un nuovo array con la frase richiesta
const peopleCanNotDrive = people.map(element => {
  let wordCannot = '';
  if(element.age < 18) wordCannot = 'non ';
  element.drivePossibility = `${element.name} ${element.surname} ${wordCannot}può guidare`;
  return element;
});

// Stampo in console il nuovo array
console.log(peopleCanNotDrive);

