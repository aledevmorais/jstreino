function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

// função construtora

const alessandro = new Cliente("Alessandro","23756789967", "alessandro@controllermorais.com.br", 100)
// new para adicionar "herança"
console.log(alessandro)

// cadeia de protótipo

// propriedades não usadas o node não mostra ok -> 
