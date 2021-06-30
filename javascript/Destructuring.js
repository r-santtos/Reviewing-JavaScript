/** 
 * Desestruturação JavaScript
 * Capturando o movimento do mouse
 */

// Padrão
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}
document.documentElement.addEventListener('mousemove', handleMouseMove);

// Com desestruturação
function handleMouseMoveDestructuring(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// Com desestruturação reumida
function handleMouseMoveDestructuringSummarized({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// Array com desestruturação
// Padrão 
const arrayFruits = ['Banana', 'Apple'];
const fruit = arrayFruits[0];
console.log(fruit);

// Com desestruturação
const arrayFruitsDestructuring = ['Banana', 'Apple'];
const [fruit1, fruit2] = arrayFruitsDestructuring;
console.log(fruit2);