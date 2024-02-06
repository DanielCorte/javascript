// NaN = Not a Number
const num1 = 10;
const num2 = 'Jessica';
console.log(num1 * num2); // NaN

const num3 = '5';
console.log(num1 * num3); // 50
/* Por conta própria o JavaScript tenta corrigir o erro, quando a string pode
ser um número ele converte automaticamente*/

const num4 = 'L7';
console.log(num1 * num4); // NaN
/* Mesmo tendo um numero dentro da string, a letra o impossibilita de ser
convertido */

// CONVERTENDO MANUALMENTE STRINGS EM NUMEROS

const num5 = 10;
const num6 = parseInt('5.2');
console.log(num5 + num6); // 15
console.log(typeof num6); // number
/*parseInt ignora qualquer número flutuante e arredonda ele para um número
inteiro. */

const num7 = 10;
const num8 = parseFloat('5.2');
console.log(num7 + num8); // 15.2
console.log(typeof num8); // number
/*parseFloat fez a conversão completa da string para number, dessa forma foi
possível o resultado total de 15.2 */

const num9 = 10;
const num10 = Number('5.2');
console.log(num9 + num10); // 15.2
console.log(typeof num10); // number
/*Melhor forma para converter um número, mais simples e sem precisar
declarar se será Int ou Float, o próprio JavaScript fara isso */
