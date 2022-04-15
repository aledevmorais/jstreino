var stringArray = ['Blue', 'Humpback', 'Beluga'];
// criamos uma var para um array do tipo string
var numericStringArray = ['80', '9', '700'];
// criamos uma var para um arrays de numeros pórem com dados do tipo string
var numberArray = [40, 1, 5, 200];
// criamos uma var para um  array de numeros do tipo number "sem ordem"
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
// criamos uma var de numeros e textos para array do tipo number e string também sem ordem
function compararNumeros(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
// join() junta todos os elementos de array e return uma string  [ 'Beluga', 'Blue', 'Humpback' ]
console.log('Ordenada:', stringArray.sort());
// método sort() obedece o padrão UNICODE caso queira ordenar por pontuação e lingua ECMAScript
// use o string.localeCompare -> ele compara os caracteres de cada lingua e os ordena por causa do sort()
// tem que criar uma function para o .localeCompare
console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));
// aqui ele ordenou conforme function (a-b) [ 1, 5, 40, 200 ] ordem crescente pelo sort() nativo
console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));
// mesmo usando caracteres mistos o javascript ordena considerando o "9" string com um number
// assim como todos os string dessa arrays de numeros e numbers
// return -> conforme abaixo

// Ordenada com compararNumeros: [
//  1,     5,    '9',
//  40,    '80', 200,
//  '700'
// ]