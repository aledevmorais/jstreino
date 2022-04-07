const clientes = 
[{nome: "Alessandro",
  cpf: "13113213334",
  dependentes:
   [{ nome: "Isabella Morais",
      parentesco: "filha",
      dataNasc: "21/06/2021",},
     {
      nome: "Isadora Morais",
      parentesco: "filha",
      dataNasc:"21/02/2022",},
   ],
  },
  {nome: "juliana Machado",
   cpf: "33123248854",
   dependentes:
    [{ nome: "Andressa Machado",
       parentesco: "filha",
       dataNasc: "19/08/02",},
    ]}
]

const listadependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
//... -> operador de espalhamento dentro dessa array
// o  operador (...) vai tirar os elementos e espalhar dentro de uma unica array
console.log(listadependentes);

// para exemplificar de uma outra maneira usa o console.table o js desenha uma tabela
// para visualizar dados o console.table é melhor para visualização

console.table(listadependentes);

// ┌─────────┬────────────────────┬────────────┬──────────────┐
// │ (index) │        nome        │ parentesco │   dataNasc   │
// ├─────────┼────────────────────┼────────────┼──────────────┤
// │    0    │ 'Isabella Morais'  │  'filha'   │ '21/06/2021' │
// │    1    │  'Isadora Morais'  │  'filha'   │ '21/02/2022' │
// │    2    │ 'Andressa Machado' │  'filha'   │  '19/08/02'  │
// └─────────┴────────────────────┴────────────┴──────────────┘

// spread operator (...)

