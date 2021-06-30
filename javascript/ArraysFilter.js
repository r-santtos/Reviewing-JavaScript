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

// Filter Padrão
const pricesFilter = price.filter(function(prices) {
  console.log(prices);
  // Verificando
  if (prices.includes("R$")) {
    return true;
  } else {
    return false;
  }
});

// Filter Arrow Function
const pricesFilter = price.filter(prices => {
  console.log(prices);
  // Verificando
  if (prices.includes("R$")) {
    return true;
  } else {
    return false;
  }
});

// Filter Reduzido as verificações
const pricesFilter = price.filter(prices => {
  return prices.includes("R$");
});

// Filter performatico e recomendado
const pricesFilter = price.filter(prices => prices.includes("R$"));

console.log(pricesFilter);