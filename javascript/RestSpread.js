// Rest e Spread

// Rest para array
function showList(company, ...customers) {
  console.log(company, customers);
}
showList('Analista', 'Ricardo', 'Eduardo');

// Spread usados para node list
const numbers = [12,6,54,889,4,9,74,'ra'];
[...numbers].map(number => {
  console.log(number);
});

console.log(numbers);

// Clonando Objetos
const car = { color: 'red', doors: 4, year: 2007 }
const cloneCar = {...car, turbo: 'false'};

console.log(car);
console.log(cloneCar);
