const nomes = ['joão', 'juliana', 'Ana', 'Caio', 'Laura', 'Marjorie', 'Andre', 'Leandro', 'Elaine', 'Alessandro'  ];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.lentght/2);

console.log(`Alunos da Sala 01 ${sala1}`);
console.log(`Alunos da Sala 02 ${sala2}`);
console.log(`Quantidade de Nomes ${nomes.length}`);
