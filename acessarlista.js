// colchetes array

const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
}

// vamos criar uma arrar a partir dos dados acima

const chaves = [ "nome", "idade", "cpf", "email"]

console.log(cliente[chaves[3]])
// chamar da const clientes a const chaves o indice 0 return "alessandro" ou 1,2 e 3 se chamar [3]
// return alessandro@controllemorais.com.br

// usando anotação de colchetes par acessar as chaves lembrar {}, [] e parenteses igual matemática.

// outro exemplo para pegar todos os dados da array é usando o forEach "função callback" loop

chaves.forEach(info =>console.log(cliente[info]))

// info é apenas uma palavra pra chamar - "um parametro criado"

// outra forma de chamar 

// caso for chamar uma chave que não existe o js não retorna erro ele return "UNDEFINED"

console.log(cliente["nome"]);

// no exemplo acima return "alessandro" correto ok

console.log(cliente["conta"]); // a chave a conta não existe
// ao invés do js retornar erro ele retorna undefined, não da erro de sintaxe, ou erro de código
// se fosse no c#, java ou python retorna erro -> mas no javascript não ele retorna undefined 

