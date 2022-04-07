// JSON é um acrônimo de JavaScript Object Notation
// JSON  “notação de objeto JavaScript”
// JSON é um formato que utiliza a sintaxe de objetos e arrays do JavaScript

// a sua estrutura é facil de compreender a outros formatos de transferencia de dados como o xml

//{
//    "id": 59,
//    "titulo": "ECMAScript 6",
//    "autor": "Diego Martins de Pinho",
//    "categoria": "programação"
//}

//<livro id="59">
// <titulo>ECMAScript 6</titulo>
// <autor>Diego Martins de Pinho</autor>
// <categoria>programação</categoria>
//</livro>

// À primeira vista, um objeto JSON não parece muito diferente de um objeto literal em JavaScript:

{
    "editora"; "Casa do Código",
    "catalogo"; [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    },
    {
      "id": 59,
      "titulo": "ECMAScript 6",
      "autor": "Diego Martins de Pinho",
      "categoria": "programação",
      "versoes": ["ebook"]
    },
    {
    "id": 39,
    "titulo": "Orientação a Objetos",
    "autor": "Thiago Leite",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
    }
   ]}

// As diferenças de sintaxe entre JSON e um objeto JavaScript são:

// No JSON, as chaves sempre devem estar entre aspas duplas ” ”, 
// no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;

// O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null),
// objetos e arrays. Não é possível declarar funções/métodos;

// Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.


// obs.: JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto
// JavaScript para que os dados possam ser utilizados em um programa.

// -> JSON.parse(): converte JSON para um objeto JavaScript;
// -> JSON.stringify(): converte um objeto JavaScript para o formato JSON.

// exemplo de conversão de um objeto livro para o JSON
//const jsonLivro = JSON.stringify({
//    id: 50,
//    titulo: "Primeiros Passos com NodeJS",
//    autor: "João Rubens",
//    categoria: "programação",
//    versoes: ["ebook", "impresso"]
//   })
   
//   console.log(jsonLivro)

// o resultado é uma string JSON

//{"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}

// este é o resultado ok para reverter o processo acima em object javascript:

//const objLivro = JSON.parse(jsonLivro)
//console.log(objLivro)

// o resultado será um objeto javascript

//{
//    id; 50,
//    titulo; 'Primeiros Passos com NodeJS',
//    autor; 'João Rubens',
//    categoria; 'programação',
//    versoes; [ 'ebook', 'impresso' ]
//   }

// estranho tive que adicionar ponto e virgula e criar uma var pois não declarada e js automaticamente
// cria isso com o ";"

