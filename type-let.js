// var

var altura1 = 5;
var comprimento1 = 7;

var area = altura1 * comprimento1;

console.log(area)


// let

let altura2 = 6;
let comprimento2 = 5;

let area2 = altura2 * comprimento2;

console.log(area2)

// var ou let são parecidos
// var é a primeira coisa a ser executada no javascript
// calculo de area de uma forma 'retangulo, quadrado, triangulo, losango...'

let forma3 = "retangulo"

let altura3 = 12;
let comprimento3 = 3;

let area3 = altura3 * comprimento3;

if (forma3 === "retangulo") {
    area3 = (altura3 *  comprimento3)
} else {
    area3 = (altura3 * comprimento3) /2
}
console.log(area3);

// ele buscou no if se forma for um retangulo usar a instrução contida em else
// calculando assim a area do retangulo

// tudo que é feito entre chaves é um bloco 

const forma4 = "quadrada";
const altura4 = 8;
const comprimento4 = 6;
//const area4; 
let area4;

if (forma4 === "quadrada") {
    area4 = altura4 * comprimento4;
}   else {
    (area4 = altura * comprimento4) /2
}
console.log(area4)
// variavel constante tem que ter um valor atribuido
// no exemplo acima que dara erro pois a const exige um valor atribuido 
// nesse caso tem que usar uma let
// var não é recomendado usar por ser muito solta
// VAR NÃO USA MAIS POR SER MUITO PROPENSA A BUGS





