const arrayNums = [1, 2, 3, 4]
//amos utilizar o map() para multiplicar cada um dos valores nesse array por 10

function multiplicaPorDez(num) {
    return num * 10
   }

   const arraySomada = arrayNums.map(multiplicaPorDez)

   console.log(arraySomada)

// [ 10, 20, 30, 40 ]

// criamos a função "multiplique por Dez" que precisa receber um parametro (num)
// arrow function que só existe dentro do map
// Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback,
// não apenas em caso de métodos.