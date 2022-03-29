const notas = [10, 6.5, 8 ,7.5]
let media = 0

for (let i = 0; i < notas.length; i++) {
  media += notas[i]/notas.length;
}

console.log(media)

// foreach para cada um da array de nota executar uma função

// Substituir o for por métodos de array mais modernos do JavaScript, como forEach()