let num1 = 10; // Number
let num2 = 2.5; // Number

console.log(num1.toString() + num2); // 102.5
console.log(typeof num1); // Number

// VERSÃO BINÁRIA DO NÚMERO ADICIONAR 2 DENTRO DO toString
console.log(num1.toString(2)); // 1010

// CORREÇÃO DE NÚMEROS GIGANTES
let num3 =  14.99912312124
console.log(num3.toFixed(2)); // 15.00
/* Dentro dos parênteses de toFixed nós colocamos quantas casas decimais
do número queremos que seja exibida, além disso, a função sempre arredonda o 
valor para o número mais próximo */

console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num3)); // false

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // true

let temp1 = num1 * '5';
// NÃO FAÇA CONTA COM STRINGS
console.log(Number.isNaN(temp1)); // false

// PADRÃO: IEEE 754-2008
/*The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision. */

let num4 = 0.7; // number
let num5 = 0.1; // number
console.log(num4 + num5); // 0.7999999999999999 <-- Imprecisão

num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0
console.log(num4); // 0.9999999999999999

/*Podemos tentar resolver esse problema utilizando o toFixed, porém um erro é encontrado */
num4 = num4.toFixed(2);
console.log(num4);

console.log(Number.isSafeInteger(1.00)); // true
console.log(Number.isSafeInteger(num4)); // false

/*Ai está o problema, o erro é concertado apenas visualmente, porém o sistema ainda considera o num4 como um número flutuante, e o num6 como um número inteiro, mesmo visualmente ambos tendo o mesmo valor */

let num6 = 0.9999999999999999
num6 += num5 // 1.1
num6 += num5 // 1.2
num6 += num5 // 1.3
num6 += num5 // 1.4
num6 += num5 // 1.5
num6 += num5 // 1.6
num6 += num5 // 1.7
num6 += num5 // 1.8
num6 += num5 // 1.9
num6 += num5 // 2.0

console.log(num6); // 2.0000000000000004
console.log(Number.isSafeInteger(num6)); // false

// RESOLVENDO COM FUNÇÕES
/*Para resolvermos esse problema é muito simples, basta usar a função Number que automaticamente ele se tranforma em um número inteiro de forma completa */

num6 = Number(num6.toFixed(2));
console.log(Number.isSafeInteger(num6)); // true

// RESOLVENDO COM CONTAS
/*Na forma correta transformamos os números flutuantes em inteiros os multiplicando por 100 para poder fazer a soma sem erros de imprecisão do sistema, e logo após isso retornamos esse resultado para a forma original flutuante fazendo a operação reversa e os dividindo por 100 */

num7 = 0.7;
num8 = 0.1;
// Valor desejado: 0.8

// Forma correta
num7 = ((num7 * 100) + (num8 * 100)) / 100;
console.log(num7) // 0.8 --> CORRETO

num7 = 0.7

// Forma errada
num7 += num8;
console.log(num7) // 0.7999999999999999 --> ERRO
