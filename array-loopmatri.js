const notas = [10, 6.5, 8 ,7.5]
let media = 0

for (let i = 0; i < notas.length; i++) {
  media += notas[i]/notas.length;
}

console.log(media)

// return 8

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let medianovo = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      medianovo += notasGerais[i][j]/notasGerais[i].length;
    }
  }

// i=0, i=1, i=2 "tres notas" let i j a definida
// j é o valor das notas dentro de de notas 123

console.log(medianovo)

// dicas 
// Utilizar mais métodos, tais quais indexOf() e includes() para percorrer arrays e comparar resultados;
// Utilizar a estrutura for e entender seu funcionamento;a

