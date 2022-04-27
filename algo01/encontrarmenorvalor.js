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

console.log(encontraMenores(listaLivros[2], listaLivros));

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
