const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}

// 0 100
//1 200
//2 300
//3 400
//4 500
//5 600

// criou uma let "i" valor zero fazendo uma comparação de numeros.lenght "tamanho" 100 a 600
// "i" ++ adiciona item a lista em 1 + i. 
// loop laço de repetição enquanto o valor de "i" for menor que 100 ou "numeros.length"

// console (i{lista de itens} e const numeros {100 a 600})

// for laço de repetição enquanrto 1++

// sempre deixar a condição de parada do loop já prevista para não travar a aplicação

for (let ifor = 0; ifor <= 10; ifor++){
    console.log(ifor)
   }

// como colocamento a condição menor que 10 ele parou na dez
// ifor++ vai adicionando 1 item até 10.
// comparação i <= 10 retorna false e isso encerra o loop

// cuidado com loop infinito para destravar ctrl + c