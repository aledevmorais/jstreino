// conversao implicita 
// == === comparação 

const numero = 567;
const numeroString = "567";

console.log (numero === numeroString);

// return false pois o js identificou a variavel type number difrente da variavel type string

// outra comparação

const numero1 = 567;
const numeroString1 = "567";

console.log (numero1 == numeroString1);

// return true pois o js converteu numero1 type number em string ai comparando string com string é true

// mais uma comparação

const numero2 = 567;
const numeroString2 = "567";

console.log(numero2 + numeroString2);

// retune 567567 pois está somando strings sendo numero2 convertida em string pelo js "concatenação de textos"

// and now CONVERSÃO EXPLICITA

 const numero3 = 567;
 const numeroString3 = "567";

console.log(numero3 + Number (numeroString3));

//return sum entre numbers 
//outra forma é incluir number direito na const
// o resultado será o mesmo ai não precisara atribuir em log a conversão

const numero4 = 567;
 const numeroString4 = Number ("567");

console.log(numero4 + numeroString4);

//nova situação adicionado number and string dentro da mesma const

const numero5 = 567;
 const numeroString5 = Number ("567a");

console.log(numero5 + numeroString5);

// return NaN -> not a number
