const listaLivros = require('./arraylist');

function busca(arraylist, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate)/2);
    const atual = arraylist[meio];

    if(de > ate){
        return -1;
    }

    if(valorBuscado === atual.preco) {
        return meio;
    }

    if(valorBuscado < atual.preco) {
        return busca(arraylist, de, meio -1, valorBuscado);

    }
    if(valorBuscado > atual.preco) {
        return busca(arraylist, meio +1, ate,valorBuscado);

    }

}
console.log(busca(listaLivros, 0, listaLivros.length -1, 40))

// buscar o elemento sempre do meio do array nesse caso
// recursão II - busca Binária

// divide em 2 duas partes e busca -> novamente divide em 2 parte e faz busca
// até achar a condição

// pilha -> stack

// nodejs -> programação orientada a evento
// nodejs -> gerenciamento de processos atraves do LOOP DE EVENTOS

// o Javascript trabalha com pilha de chamadas

// é importante sempres testar as chamadas de funções recursivas para identificar
// quando deve interromper a sua recursividade
