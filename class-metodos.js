// this significa -> este, isso 
// metodos para manipular o this: call(), apply() e bind()

const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
   }
   
   pessoa.imprimeNome()
// método .imprimeNome faz referencia ao próprio object pessoa -> 
// em class não ha necessidade de escrever "function" -> mas no exemplo não existe classe declarada ok

// ao inves de pessoa.nome -> chamamos os this

const pessoaa = {
    nomea: "Joana",
    emaila: "joana@email.com",
    imprimeNom: function(){
      console.log(`${this.nomea}`)
    }
   }
   
   pessoaa.imprimeNom()

   // Essa função é executada no contexto de cada um dos objetos e o 
   // this faz com que ela utilize os valores de propriedade desses objetos.

   // No caso de atributos das funções construtoras ou dos construtores de classe, 
   // o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:

   // “execute a função aqui, utilizando este contexto”.

   // call - > esse método permite que a função seja chamada com parametros e valor do this
   // especificos -> esquematizando
   

   function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }
   // criamos uma function -> imprimeNomeEmail que recebe como parametro um dado que demos o
   // nome de (tipoCliente) o qual ira imprimir no terminal(console) um string + duas informações
   // que estão associadas a algum objeto ( ainda não informado) com o this

   imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

// o javascript retrun a classificação do cliente (especial or student) sem a necessidade de adicionar uma 
// function para (cliente1 e cliente2) antes em cada um dos objects

// o apply[] -> mesma coisa que o call só que por arrays: Esquematizando

function imprimeNomeEmaila(tipoClientea, agenciaa){
    console.log(`
      ${tipoClientea} da agência ${agenciaa}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1a = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2a = {
    nome: "Fred",
    email: "f@email.com"
   }

   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmaila.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmaila.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

// importante

// Utilize o método apply() caso você tenha um array de dados e o 
// call() para passar valores individuais como parâmetro. 
// Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.

// agora abaixo o método bind()

// o método bind() -> liga uma função ao contexto do objeto

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
}

// this.nome - liga a propriedade "nome" ao contexto do objeto em que a função está definada
// ou seja liga "a este objeto e não outro"...ok

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

// o método bind(liga a função que atribuimos a "personagemGenerico" ao objeto "personagem" )
// executando a função "personagemDefinido" vai usar o object "personagem" (liga) como contexto
// de execução
// -> Dessa forma o this sempre se refere ao objeto personagem "que é o metodo bind" para acessar
// as suas propriedades