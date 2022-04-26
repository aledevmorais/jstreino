// algoritmos de ordenação
// é esencial a ordenação para melhorar a busca
// dividir para conquistar -> merge sort
// pega um seleção e divide em partes pequenas e solucionando a ordenação cada parte pequena

// merge -> unir, mesclar apos ordenar

const listaLivros = require('./arraysort');

function mergeSort(arraysort) {
    if(arraysort.length >1){
        const meio = Math.floor(arraysort.length /2);
        const part1 = mergeSort(arraysort.slice(0, meio));
        const part2 = mergeSort(arraysort.slice(meio, arraysort.length));
        arraysort = ordena(part1, part2);          
    }
    
    return arraysort;
}
  
function ordena(part1, part2) {
    let posicaoAtualPart1 = 0
    let posicaoAtualPart2 = 0
    const resultado = []

    while(posicaoAtualPart1 < part1.length && posicaoAtualPart2 < part2.length) {
      let produtoAtualPart1 = part1[posicaoAtualPart1]
      let produtoAtualPart2 = part2[posicaoAtualPart2]
      
      if (produtoAtualPart1.preco < produtoAtualPart2.preco){
        resultado.push(produtoAtualPart1)
        posicaoAtualPart1++
      } else {
        resultado.push(produtoAtualPart2)
        posicaoAtualPart2++
      }
    }
    return resultado.concat(posicaoAtualPart1 < part1.length
        ? part1.slice(posicaoAtualPart1)
        : part2.slice(posicaoAtualPart2))

}
   
console.log(mergeSort(listaLivros));

// return

//  { titulo: 'PHP', preco: 15 },
//  { titulo: 'Python', preco: 20 },
//  { titulo: 'Rust', preco: 22 },
//  { titulo: 'JavaScript', preco: 25 },
//  { titulo: 'Ruby', preco: 28 },
//  { titulo: 'Java', preco: 30 },
//  { titulo: 'C#', preco: 33 },
//  { titulo: 'C++', preco: 35 },
//  { titulo: 'Scala', preco: 40 },
//  { titulo: 'Go', preco: 45 },
//  { titulo: 'Elixir', preco: 50 }

// merge sort criou 2 listas part1 e part2 
//