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


