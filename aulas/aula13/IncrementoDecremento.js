// Incremento
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

// Pós Incremento
let contador1 = 1;
console.log(contador1++); // 1
console.log(contador1); // 2

// Pre Incremento
let contador2 = 1;
console.log(++contador2); // 2
console.log(contador2); // 2

// Decremento
let contador3 = 10;
contador3--; // 9
contador3--; // 8
contador3--; // 7
contador3--; // 6
console.log(contador3);

// Pós Decremento
let contador4 = 1;
console.log(contador4--); // 0
console.log(contador4); // 0

// Pre Decremento
let contador5 = 1;
console.log(++contador2); // 1
console.log(contador2); // 1

let contador6 = 1;
console.log(contador6++);
// Má pratica de programação, pode causar bugs

let contador7 = 1;
++contador7;
console.log(contador7);
// Boa prática de programação