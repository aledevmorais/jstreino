const notas = [10, 7, 8, 5, 10]
notas.pop();
console.log(notas)

media = (notas[0] + notas[1] + notas [2] + notas [3]) / notas.length;

console.log(media);

// esqueci de colocar a let -> js adiciona uma var "vai dar erro sempre declara para evitar bugs"

// pop -> reetira o ultimo elemento da array

media = (notas[0] + notas[1] + notas [2] + notas [3]) / notas.length;

console.log(`A média é: ${media}`);

// método é uma função que serve como propriedade da array ou de um objeto

// métodos de array

const array1 = [5, 12, 8, 130, 44];
//list array com os itens
const encontrar = array1.find(element => element > 50);
// encontrar elemento da lista maior ou igual 50
console.log(encontrar);
// return primeiro item da lista maio ou igual a 50

var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);

// concat() -> junta dois arrays
// filter() -> list conforme solicitação
// find() -> return firt item - não altera o array porem o resultado save again, new array
// findIndex() -> return the index
// indexOf() -> return the index de determinado valor de uma array
