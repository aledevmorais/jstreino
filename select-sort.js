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