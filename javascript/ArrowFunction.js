/**
 * Construindo Functions
 * Função Padrão
 * Função Expressão
 * Funcão Arrow
 * 
 * A diferença das funções está no 'this', quando uma função é padrão ou expressão o 'this' é referido ao próprio objeto. Porém se tivemos duas funções dentro de um mesma classe, teremos dois 'this' e assim não conseguimos chamar o objeto. 
 * Quando usamos a Arrow Function o 'this' consegue ter acesso ao objeto em questão, pois arrow functions não geram dois 'this'.
 */

// Função Padrão
function StandardFunction(parameter) {
  return parameter.toUpperCase();
}

// Função Expressão
const expressionFunction = function(ExpressionFunction) {
  return ExpressionFunction.toUpperCase();
}

/**
 * Função Arrow
 * Sem parentes quando tenho apenas um parâmetro
 * Com () se hover mais de um parâmetro
 * Se hover apenas uma linha de retorno eu não preciso passar {} e nem a palavra return
 */

// Arrow Function
const arrowFunction = ArrayFunction => {
  return ArrayFunction.toUpperCase();
}

// Função com dois ou mais parâmentros
const arrowFunctionTwoParamenter = (arrowFunctionTwoParamenter, segundoParametro) => {
  return arrowFunctionTwoParamenter.toUpperCase();
}

// Função Resumida
const arrowFunctionSummarized = arrowFunctionSummarized => arrowFunctionSummarized.toUpperCase();
 
/** 
 * Chamadas das funções
 * Saída vai ser texto WITHPARAMENTER 
 */
StandardFunction("withParamenter");
expressionFunction("withParamenter");
arrowFunction("withParamenter");
arrowFunctionTwoParamenter("withParamenter");
arrowFunctionSummarized("withParamenter");