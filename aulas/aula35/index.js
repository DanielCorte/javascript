// Atribuição via desestruturação

/*let a = 'A'; // A
let b = 'B'; // B
let c = 'C'; // C
console.log(a, b, c); //A B C

[a, b, c] = [1, 2, 3];
// destruturação = array
console.log(a, b , c); //1 2 3

const numeros = [b, c, a];
[a, b, c] = numeros;
console.log(a, b, c); //2 3 1

const letras = [b, c, a];
[a, b, c] = letras; 
console.log(a, b, c); //3 1 2*/

// ------------------------------------------------
/*
//               0  1  2  3  4  5  6  7  8       Índice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //  Valor 
console.log(numeros[0], numeros[1]); // 1 2

const [primeiroNumero, segundoNumero] = numeros;
// desestruturação
console.log(primeiroNumero, segundoNumero); // 1 2*/

// ------------------------------------------------

// ... rest(resto), ... spread(espalhar ou distribuir)
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero); // 1000 2000 3000
console.log(resto); // [ 4000, 5000, 6000, 7000, 8000, 9000 ]*/

/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um,  , tres,  , cinco,  , sete, ...resto] = numeros;
console.log(um, tres, cinco, sete); // 1000 3000 5000 7000
console.log(resto); // [ 8000, 9000 ]*/

// ------------------------------------------------

//                    0           1          2
//                 0  1   2    0  1  2    0  1  2
const numeros = [ [1, 2 , 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][0]); // 4

const [,[,,seis]] = numeros; 
console.log(seis); // 6

const [lista1, lista2, lista3] = numeros;
console.log(lista1[2], lista2[0], lista3[1]); // 3 4 8