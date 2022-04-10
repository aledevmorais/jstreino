class pessoa {
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }


// a class define os atributos (caracteristicas) e os métodos (comportamentos) de uma objeto
// programação funcional ou orientada a objeto entre outras

// objetos literais ou usando construtores para criar

// as classes são modelos usados para criação de objetos

// exemplos de comportamento do objeto pessoa

    exibirNomeCompleto(){
        console.log(`Este é o meu ${this.nome} de ${this.sobrenome}`)
    }
}

// atraves da heranca a gente já define todas as caracteristicas

// como trabalhar como herança dentro do javascript

class Programador extends pessoa{
    constructor (nome, sobrenome, cpf, email, linguagem){
        super (nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}
// callback -> this. linguagem = linguagem
// nós adicionamos no modo constructor mais um indice a classe pessoa -> atraves do extends "linguagem"


// extendes -> está herdando todas as caracteristicas de "Pessoa" que é outra classe 
// herança entre classes

// o objeto é uma instância de uma classe quando uso o new então estou criando um objeto na memoria

const nonoDev = new Programador ("Alessandro", "Morais", "79969959967", 
"alessandro@controllermorais.com.br", "JavaScript");
// a maioria das linguagens implementam a orientação a objeto
// um paradigma de programação é orientada a objeto

// o objeto é uma instancia de classe na memoria

// as classes surgiram no javascript no ES6 elas não existiam antes disso

// a forma que se digitava com funções era o paradigma usado antigamente

// class -> até hoje o javascrpt utiliza funções para gerenciar classes

// foi acrescentado em 2015 as classes



