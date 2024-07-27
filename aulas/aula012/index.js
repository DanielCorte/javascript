// DADOS PRIMITIVOS
// String, numer, undefined, null, boolean, symbol

const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string

const num = 10; // number
const num1 = 10.52; // number

let nomeAluno; // undefined -> não aponta pra local nenhum na memória

/*

A diferença entre NULL e undefined é que o null explicitamente deixa claro que 
aquela variável não é para apontar para nenhum local na memória.
undefined é apenas a forma não explicita de dizer que uma variável não carrega
dados primitivos

*/

const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória

// const boolean = False // Boolean = True or False (lógico)
// const aprovado = False

console.log(typeof num);

const a = [1, 2]; // dado primitivo
const b = a; // dado passado por referência
// = --> Operador de atribuição
console.log(a, b); // [1, 2]

b.push(3);
console.log(a, b); // [1, 2, 3]

/* ambos 'a' e 'b' apontam para o mesmo local na memória
por causa do dado de referência
*/

let a1 = 2;
let b1 = a1;
console.log(a1, b1); // 2 2

a1 = 3;
console.log(a1, b1); // 3 2

// Isto ocorre pois o 'a' um dado primitivo, tem seu próprio espaço na memória
// enquanto 'b' ocupa o espaço do 'a'