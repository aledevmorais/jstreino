const listaLivros = require('./arraysort');
const trocaLugar = require('./encontrarmenorvalor');

function quickSort(arraysort, esquerda, direita) {

    if(arraysort.length > 1){
        let indiceAtual = particiona(arraysort, esquerda, direita);
        if (esquerda < indiceAtual -1) { 
            quickSort(arraysort, esquerda, indiceAtual -1);
        }
        if (indiceAtual < direita) {
            quickSort(arraysort, indiceAtual, direita);
        }
    }
    return arraysort;
}
function particiona(arraysort, esquerda, direita) {
    let pivo = arraysort[Math.floor((esquerda + direita) /2)]
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita) {
        // vamos criar dois While um que ira cuidar da comparacação do valores da Esquerda para direita e outro
        // da direita para esquerda 
        while (arraysort[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++ // todos os itens que estão na esquerda tem que ter valor menor que pivo "Rust 22"
        }

        while (arraysort[atualDireita].preco > pivo.preco) {
            atualDireita-- // todos os itens que estão direita tem que ter valor maior que pivo "Rust 22"
        }                  // vai decrementando (--) "decrementar é encontrar valor menor que Rust 22"

        // nesses dois while ele segura o indice para atualEsquerda ou atualDireita respectivamente
        // iremos importa um if que ja foi escrito pelo module.exports

        if (atualEsquerda <= atualDireita) {
            trocaLugar(arraysort, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length -1))
// indice de inicio e indice de final "parte esquerda do pivo e parte direita do pivo"
// dentro do if que iremos fazer recursão
// varTemp for chamada vai receber novos valores de esquerda e direita
// olhando a array enchergamos que Rust 22 é o pivo
// como a array será divida em 2 lista então 
// o indice 0 será o Go 45 "da esquerda do pivo"
// o quickSort vai comparar a partir do pivo Rust 22 qual é o de menor valor
// como Rust 22 é menor que Go 45 ele entra no lugar
// sempre comeca da esquerda para direita por causa da odernação length
// o pivo é fixo independente do seu valor e se movimenta dentro da array
// obedecendo a ordenação e incrementação
// na implementação da função condicionar na ordenação a Atual Esquerda ou direita a comparação de valores
// como o seu anterior e sucessor para que a var não fique percorrendo toda a lista
// a let atual esquerda e direita comeca recebendo o valor que vem do parametro

// this return  apartir do Rust 22 " pivo" a lista da esquerda com os menores preco
// a lista da direira do pivo rust 22 for reordenada pelo menor valor a partir do pivo
// this sample relata a forma do quickSort de ordenação quebrando a lista em partes menores
// a partir de um pivo para alocar indice a indice obedencendo o parametro que é menor valor
// a direita do pivo e maiores valores a partir da esquerda do pivo 
// o quickSort é um algoritmo muito performático 

//  [
//    { titulo: 'PHP', preco: 15 },
//    { titulo: 'Python', preco: 20 },
//    { titulo: 'Rust', preco: 22 },
//    { titulo: 'JavaScript', preco: 25 },
//    { titulo: 'Ruby', preco: 28 },
//    { titulo: 'Java', preco: 30 },
//    { titulo: 'C#', preco: 33 },
//    { titulo: 'C++', preco: 35 },
//    { titulo: 'Scala', preco: 40 },
//    { titulo: 'Go', preco: 45 },
//    { titulo: 'Elixir', preco: 50 }
//  ]


