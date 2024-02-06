// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de umaConstantes com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

// Não podemos declarar uma constante sem dar valor a ela
// Não podemos modificar o valor de uma constante 

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplicado = resultaDuplicado + resultado
resultadoTriplicado = resultadoTriplicado + 5 // <= Errado
console.log(resultado)
console.log(resultaDuplicado)
console.log(resultadoTriplicado)

/* Ao invés de substituirmos o valor de uma variável
é mais interessante criar uma nova variável e apenas
evoluir o valor da variável anterior */

console.log(typeof(primeiroNumero));
console.log(typeof(nome));

console.log(typeof(primeiroNumero + nome));

/* Podemos descobrir a classe de uma variável usando
a função typeof dentro do console*/