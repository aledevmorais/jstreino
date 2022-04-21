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

// o insertion sort é um algoritmo quadratico vai da posição n a posição n - pra fazer a ordenação

// metodos de ordenação é bom saber a forma como escreve e outros métodos para ajustar a quantidade
// de memoria usada
// existem varias formas de se combinar algoritmos de forma linear ou quadratica -
// exemplo em uma tabela cujo o indice seja por ordem alfabetica não necessitamos busca em toda array
// de a a (z) visto que a seleção esta chamando letra (e) por exemplo -> nesse caso a ordenação poderia ser linear
// a partir do (e)

//O(n)	linear
//O(n²)	quadrático


// notação	nome
// O(n)	linear
// O(n²)	quadrático
// O(1)	constante
// O(log(n))	logarítmica
// O(nc)	polinomial
// O(cn)	exponencia
