/**
 * Craindo Objetos JavaScript
 * Objetos tem propriedade e métodos
 */
const object = {
  property: '.string',
  Methods() {
    const propertyElement = document.querySelector(this.property);
    console.log(propertyElement);
  }
};

// Chamada da função dentro do objeto
object.Methods();