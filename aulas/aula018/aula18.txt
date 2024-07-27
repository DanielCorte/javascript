let num1 = 9.54578;

// floor: ARREDONDA PRA BAIXO
let num2 = Math.floor(num1);
console.log(num2); // 9

// ceil: ARREDONDA PRA CIMA
let num3 = Math.ceil(num1);
console.log(num3); // 10

num4 = 9.49
num5 = 9.50

// round: ARREDONDA PARA O MAIS PROXIMO
let num6 = Math.round(num4);
console.log(num6); // 9

let num7 = Math.round(num5);
console.log(num7); // 10

// max: MAIOR NÚMERO DA SEQUÊNCIA
console.log(Math.max(10, 45, 3, -24, 7)); // 45

// min: MENOR NÚMERO DA SEQUÊNCIA
console.log(Math.min(10, 45, 3, -24, 7)); // -24

// random: GERANDO NÚMERO ALEATÓRIO
const aleatorio = Math.random();
console.log(aleatorio); // 0.341001671580629

// GERANDO NÚMERO ALEATÓRIO COM LIMITADOR
// Gere um número entre 5 e 10
const aleatorio1 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio1); // 5 ou 6 ou 7 ou 9 ou 10

// PI: VALOR DE PI
console.log(Math.PI); // 3.141592653589793

// pow: Potenciação
console.log(Math.pow(2, 10)); // 2 elevado a 10 --> 1024
// mesmo resultado de (2 ** 10) --> 1024

// RAIZ QUADRADA DO NÚMERO
num8 = 9;
console.log(num8 ** 0.5); // 3
// ou (num8 ** 1/2)

// DIVIDINDO NÚMERO POR 0
console.log(100 / 0); // Infinity
console.log(!!(100 / 0)); // true
