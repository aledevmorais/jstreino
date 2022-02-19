let inputnovo = null;

if (inputnovo === null) {
 console.log('não há informação');
} else {
 console.log(inputnovo);
}
// para o exemplo acima let definiu "null" mas if set as 'não há informação' e atribuiu em "else" o valor


let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

// o return foi null e "undefined" visto que não atribuido valor algum "ausência de valor"


console.log(null == undefined);
console.log(null === undefined); 

// == indicou como true por nao haver valor definido ok por aqui
// === no entanto ... null no comparador (===) return false por não ter com o que comparar "prestar atenção!"

// undefined "ausência de valor inesperada ou não atribuida" isso é um bug, erro de comando