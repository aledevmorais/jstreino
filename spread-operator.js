const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = { fichaGuerreiro, equipoGuerreiro }
   console.log(guerreiro)

   // return {
 // fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
 // equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
 // }

 // o js retorna os objetos separados e nao aglutinados em uma unica array

const guerreiros = {...fichaGuerreiro, ...equipoGuerreiro}
console.log(guerreiros)

//return todos os valores aglutinados em uma unica array

//{
//    nome: 'Aragorn',
//    classe: 'guerreiro',
//    espada: 'Andúril',
//    capa: 'capa élfica +2'
//  }

// ou podemos usar o console.table para exibir uma tabela com uma melhor visualização do terminal

const guerreirosTable = {...fichaGuerreiro, ...equipoGuerreiro};
console.table(guerreirosTable);

// uma tabela será visualizado com "index" ou seja chave da array índice(0) e seu índice (1)
// que são os valores do indice (0) de cada item da array

//┌─────────┬──────────────────┐
//│ (index) │      Values      │
//├─────────┼──────────────────┤
//│  nome   │    'Aragorn'     │
//│ classe  │   'guerreiro'    │
//│ espada  │    'Andúril'     │
//│  capa   │ 'capa élfica +2' │
//└─────────┴──────────────────┘

// Importante! Vale notar que, caso a sintaxe de espalhamento
// seja usada em objetos que tenham chaves/propriedades com o mesmo nome
// o js ira sobreescrever as propriedades destes itens 
// ficar atento a isso

// Apesar de prático, o uso da sintaxe de espalhamento pode gerar
