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
