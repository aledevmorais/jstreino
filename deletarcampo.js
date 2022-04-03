const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   // para remover a propriedade "aliado" 

   delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

// deletar via colchetes

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

// o delete remove do  objeto o valor da sua propriedade

console.log(objPersonagem);

// return  nome: "Gandalf", 
//   classe: "mago",
//    nivel: "20",
// o delete removeu tudo - > o retorno do delete é sempre "true" or "false"

// o operador "delete" -> guardar essa informação o delete é um operador ok

// o operador delete não remove propriedades herdadas de outro objeto, ai sim neste caso, return false

// heranças