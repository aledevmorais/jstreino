const livros = require('./lista-livros');

const menorValor = require('./preco-livros');

for (let atual = 0; atual < livros.length; atual ++) {
    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual];
    console.log('posição atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)

// livro atual { titulo: 'JavaScript', preco: 25 }
//livro menor preço { titulo: 'JavaScript II', preco: 15 }
//livro atual { titulo: 'JavaScript', preco: 25 }
//livro menor preço { titulo: 'JavaScript VI', preco: 20 }
//livro atual { titulo: 'JavaScript III', preco: 30 }
//livro menor preço { titulo: 'JavaScript', preco: 25 }
//livro atual { titulo: 'JavaScript IV', preco: 50 }
//livro menor preço { titulo: 'JavaScript III', preco: 30 }
//livro atual { titulo: 'JavaScript V', preco: 45 }
//livro menor preço { titulo: 'JavaScript V', preco: 45 }
//livro atual { titulo: 'JavaScript IV', preco: 50 }
//livro menor preço { titulo: 'JavaScript IV', preco: 50 }
//[
//  { titulo: 'JavaScript II', preco: 15 },
//  { titulo: 'JavaScript VI', preco: 20 },
//  { titulo: 'JavaScript', preco: 25 },
//  { titulo: 'JavaScript III', preco: 30 },
//  { titulo: 'JavaScript V', preco: 45 },
//  { titulo: 'JavaScript IV', preco: 50 }
//]
//
//
// ordenação pelo método sort 

// select, sort -> ordenar em ingles
// o require faz uma requisição a um ocidgo já gravado com a sintaxe require('./) e logo em seguida
// selecione o código para ser importado dentro da arrays no caso livros
// criar um for para ordenar esta lista que foi chamada
// dentro do for cria uma let igual a 0 para buscar o primeiro item dda lista
// esse for vai funcionar enquanto livros.lenght(tamanho da nossa lista de livros)
// adicionamos atual++ para o javascript percorrer a lista toda
// ai oara isso (for) adicionaremos o if (a condição ou function)
// logo apos isso o console.log para exibir a seleção
// sort -> podemos usar includes() find() or filter()
// sort -> para ordenar arrays

// o método sort utliza um "algorítmo de ordenação" -> precisamos estudar o seu algorítmo 

// o javascript se densenvolveu como uma linguagem interpretada pelos navegadores

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.

// prestar atenção pois o método retornará conforme  a configuração da engine do navegador
// precisa declarar para obter o resultado esperado

//Se o parametro "funcaoDeComparacao" é fornecido, o array será ordenado de acordo com o valor
//de retorno da "funcaoDeComparacao".

//é sempre bom fornecer os parâmetros pois os navegadores podem mudar.

//ótimo exemplo para identificar isto -> "FUNÇÃO DE COMPARAÇÃO"

// Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.

// Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação
// a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, 
// nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.

// Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.

// funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como 
// seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.

// Então, a função de comparação tem a seguinte forma:

// function comparar(a, b) {
//    if (a é menor que b em algum critério de ordenação) {
//      return -1;
//    }
//    if (a é maior que b em algum critério de ordenação) {
//      return 1;
//    }
//    // a deve ser igual a b
//    return 0;
//  }

function compararNumeros(a, b) {
    return a - b;
  }

// O método de ordenação pode convenientemente ser usada com funções anônimas (e closures):  

  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);

  // this return [ 1, 2, 3, 4, 5 ] -> ordenou o array em ordem crescente
  
