// piVô
const listaLivros = require('./arraysort');


function encontraMenores(pivo, arraysort) {
    let menores = 0;

    for(let atual = 0; atual < arraysort.length; atual++) {
        let produtoAtual = arraysort[atual]
        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(arraysort, arraysort.indexOf(pivo), menores)
    return arraysort
}

function trocaLugar(arraysort, de, para) {
    const elem1 = arraysort[de]
    const elem2 = arraysort[para]

    arraysort[para] = elem1
    arraysort[de] = elem2
}

function divideNoPivo(arraysort) {
    let pivo = arraysort [Math.floor(arraysort.length /2)];
    // O MATH ESTÁ ENTRE CHAVES POIS É UM NUMBER
    encontraMenores(pivo, arraysort);
    let valoresMenores = 0;
    for(let analisando = 0; analisando < arraysort.length; analisando++) {
    let atual = arraysort[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo) {
        trocaLugar(arraysort, analisando, valoresMenores)
        valoresMenores++}
    }
    return arraysort;
}

console.log(divideNoPivo(listaLivros))

//console.log(encontraMenores(listaLivros[2], listaLivros));

// this return five elements to array
// dividimos o array com base em um pivo (livro Java)
// e pedimos para ordenar o item de maror valor entre os menores
// o que resultou no item 5

//  { titulo: 'Go', preco: 45 },
//  { titulo: 'C++', preco: 35 },
//  { titulo: 'Rust', preco: 22 },
//  { titulo: 'PHP', preco: 15 },
//  { titulo: 'Elixir', preco: 50 },
//  { titulo: 'Java', preco: 30 },
//  { titulo: 'Scala', preco: 40 },
//  { titulo: 'Ruby', preco: 28 },
//  { titulo: 'JavaScript', preco: 25 },
//  { titulo: 'C#', preco: 33 },
//  { titulo: 'Python', preco: 20 }

// temos varios livros com valores ate 30 

// ai mandamos troca os iten de lugar 

// ele o pivo é o 5 elemento de menor valor

// RUST É O PIVO POIS É O MEIO DA LISTA -> E A CONDIÇÃO PASSADA PEDE A ORDENAÇÃO PELO MENOR VALOR
// A PARTIR DA SELEÇÃO DO PIVO PARA TRAS

// agora com a nova disposição o pivo passa a ser o RUST 22 e os outros de menor valor foram
// reordenados a partir do pivo Rust

//[
//    { titulo: 'PHP', preco: 15 },
//    { titulo: 'Python', preco: 20 },
//    { titulo: 'Rust', preco: 22 },

// a array continua abaixo foi obedecida a ordem de escolher e ordem os de menores valores
// a partir do RUST que é 22 então -> PHP e Python que sao os unicos de menor valor abaixo do RUST

//    { titulo: 'Go', preco: 45 },
//    { titulo: 'Elixir', preco: 50 },
// QUICK SORT -> PARTICIONAR A PARTIR DE UM PIVO ORDENANDO DE ESQUERDA E DIREITA