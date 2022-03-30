const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJAVA = [6, 5, 8, 9,5, 6]
const salaPython = [7, 3.5, 8, 9.5]


function mediaSala(notasDaSala){
    const SomaDasNotas = notasDaSala.reduce((acum,
    atual) => atual + acum,0)
    return SomaDasNotas/notasDaSala.length
}

console.log(`Media da Sala de JAVASCRIPT ${mediaSala(salaJS)}`)
console.log(`Media da Sala de JAVA ${mediaSala(salaJAVA)}`)
console.log(`Media da Sala de PYTHON ${mediaSala(salaPython)}`)

// calcular a media de 3 arrays diferente o desafio é criar uma unica função para calculo das medias
// de todas as arrays
// so pra lembrar => "arrow function" 
// metodo reduce
// apos => somar todas as notas atual + acumulador,0
// vai retornar média de notas de cada sala
// Media da Sala de JAVASCRIPT 7.5
// Media da Sala de JAVA 6.5
// Media da Sala de PYTHON 7

// nova simulação do método reduce do javascript moderno
const notas = [10,6.5,8,7,9];

const medianovo = notas.reduce((acum, atual) => atual + acum,0) /notas.length

console.log(medianovo);

// o acum é primeiro parametro e o atual é o segundo parametro

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) 

//return 170

//  O método reduce() está trabalhando com dois parâmetros
//  O primeiro é a função callback obrigatória para retornar o cálculo
//  O segundo é um número que representa o valor inicial - no caso, 0.

//  função callback foi escrita diretamente dentro do reduce()

// esta função também está recebendo dois parâmetros, ambos
// obrigatórios: O valor acumulado(acum) e o valor atual(atual).

// A função callback foi escrita na forma de arrow function 
// quando só temos uma linha de instrução dentro da função (atual + acum)
// não precisamos usar chaves e nem da palavra-chave return.

// maaaaasssss IMPORTANTE

// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, 
// as chaves {} e a palavra-chave return voltam a ser necessários.

// EXEMPLO ABAIXO DE UMA FORMA MAIS DETALHADA



const soma2 = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

// Mais práticas para resolver problemas com arrays utilizando os métodos callback filter() e reduce().

// METODOS NATIVOS DO   JavaScript como o push() e o splice()

// DIVIDIR ARRAY EM DOIS slice()

// concat
// array dentro de uma array
// pesquisa dentro dos arrays
// for, loop dentro dos elementos do array
// forEach
// filter, map, reduce