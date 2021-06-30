// Array Map Filter Reduce
const price = [
  "Crédito",
  "R$ 230",
  "R$ 220",
  "R$ 210",
  "Contas Pagas",
  "R$ 240",
  "R$ 250"
];

// Filter performatico e recomendado
const pricesFilter = price.filter(prices => prices.includes("R$"));

// Map 
const numberPrice = pricesFilter.map(function(priceMap) {
  console.log(priceMap);
  return Number(priceMap.replace("R$ ", ""));
});

console.log(pricesFilter);
console.log(numberPrice);