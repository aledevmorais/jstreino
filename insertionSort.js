const livros = require('./lista-livros');

function insertionSort(lista) {

  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      let itemAnalise = lista[analise];
      let itemAnterior = lista[analise - 1];
    
      lista[analise] = itemAnterior
      lista[analise - 1] = itemAnalise

      analise--
    }
  }
  console.log(lista);
}

insertionSort(livros);

// ordenou corretamente trazendo o livro mais barato para o primeiro item inserindo na const livros

// [
//  { titulo: 'PHP', preco: 15 },
//  { titulo: 'Python', preco: 20 },
//  { titulo: 'JavaScript', preco: 25 },
//  { titulo: 'JAVA', preco: 30 },
//  { titulo: 'Go', preco: 45 },
//  { titulo: 'ELIXIR', preco: 50 }
// ]