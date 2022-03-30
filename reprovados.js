const alunos = ['alessandro', 'daniel', 'elaine', 'leandro'];
const notas = [7, 4.5, 8, 7.5];

// metodo filter precisa de uma funçao chama um callback

const reprovados = alunos.filter( (aluno, indice ) => notas [indice] < 5 )

console.log(`Reprovados ${reprovados}`);
// filter selecionou o retorno do nome de quem foi reprovado
// metodo filter dentro dos parenteses primeiro parametro é uma função, o primeiro indice
// da array que esta filtrando
// e na sequencia parametrizamos como reprovado quando o indice apontar < que cinco
// retornou Daniel obedecendo a função true e false quando true inclui a resposta de "reprovados"
