const cliente = {
    nome: "Alessandro",
    idade:44,
    cpf: "13113213334",
    email: "alessandro@controllermorais.com.br",
    fones: ["1199050505", "1199880505"],
    dependentes: [
        {
        nome: "Isabella Morais",
        parentesco: "filha",
        dataNasc: "21/06/2021" },
        {
        nome: "Isadora Morais",
        parentesco: "filha",
        dataNasc:"21/02/2022",
        }
    ],
    saldo: 100,
    // a gente utiliza funções para dar comportamento a um object
    depositar:function(valor)
    {
        this.saldo += valor
    }
    //add function -> funções estão ligadas a objeto -> metodo
    // criamos uma function(valor)
    // this -> significa isto .saldo  -> receberá um incremente += saldo + um valor = total
    
}

console.log(cliente.saldo) // saldo de 100
cliente.depositar(30)
// depois de criado o metodo depositar poderemos colocar qualquer valor para adicionar ao saldo
console.log(cliente.saldo)
// saldo atualizado 130

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

// este é o um object literal -> aponta sempre para um mesmo local na memória

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
// ele reescreve
// o js acessa os valores deles fazendo referencia ao original, mas não cria uma cópia

// método: Object.create() 

const objPersonagem3 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem4 = Object.create(objPersonagem3)
   objPersonagem4.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem3.nome) //Gandalf
   console.log(objPersonagem4.nome) //Gandalf, o Cinzento

   //O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro
   
   const clientes = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    clientes.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    clientes.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })

console.log(clientes);

// o metodo push adiciona mais um elemento no final da array animalEstimação

//animalEstimacao: [
//    { nome: 'Kripto', 'raça': 'Cão', vacinado: true },
//    { nome: 'Lex', 'raça': 'Gato', vacinado: false }
//  ]
// o que aprendemos
// Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
// Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null),
// arrays ou outros objetos;
// Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.