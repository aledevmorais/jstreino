const alunos = [ 'Alessandro', 'Elaine', 'Daniel', 'Leandro' ]
const medias = [ 10, 7, 9, 6];

let listadeNotaseAlunos = [alunos, medias];

const exibeNomeNota = (alunos) => {
    if (listadeNotaseAlunos [0].includes(alunos)){
        let indice = listadeNotaseAlunos[0].indexOf(alunos)
        return  listadeNotaseAlunos[0] [indice] + `, sua média é : `
        + listadeNotaseAlunos[1] [indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}
console.log(exibeNomeNota("Daniel"));
// aerofunction
// método "includes" -> faz uma busca na array pelo valor "Alessandro"]
// includes é método boolean "retorna verdadeiro ou falso" para satisfazer o if
// logo em seguida o indexOf irá retornar da array alunos a posicão na array aonde esta Alessandro ou seja "0"
// return 0 no indexOf
// na linha 10 return [1] nota 10 ok
// teste aluno por aluno para ele dizer a nota do aluno 
// caso o nome do aluno não esteja na lista return "Aluno não cadastrado"
