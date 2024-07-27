// VALORES PRIMITIVOS E VALORES POR REFERÊNCIA
// ----------------------------------------------------------------------------

/*Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigInt, symbol)
*/

let nome = 'Luiz'
nome = 'Otavio'
console.log(nome); // Otávio

/*Isto é possível pois não estamos alterando o valor da string, e sim substituindo a string Luiz pela string Otavio, é como se let fosse uma caixa
e ao reaplicar um valor a essa caixa, tiramos a string "Luiz" e colocamos a string "Otavio" no lugar */

let nome1 = 'Luiz'
nome1[0] = 'R'
console.log(nome1); // Luiz

/*Neste caso o resultado continua Luiz pois estamos tentando alterar o valor da string, nesse caso por ela ser imutável continua o valor original dela */

let a = 'X';
let b = a; // CÓPIA
console.log(a, b); // X X

a = 'Y'
console.log(a, b); // Y X

/*Neste caso o valor de b continua X pois ele fez uma cópia de A do valor que ele tinha até aquela linha de código, se posteriormente o valor de A for alterado, o valor de B continua tendo o mesmo primeiro valor de A por ser somente uma cópia, e vice versa também com B alterando seu valor, A não se altera também, resumindo: os valores são independentes por serem imutáveis */

// ----------------------------------------------------------------------------

/*
Referência (mutável) - array, object, function - passados por referência
*/

let c = [1, 2, 3];
let d = c; // d referência c, apontando para o mesmo valor na memória
console.log(c, d); // [ 1, 2, 3 ] [ 1, 2, 3 ]

c.push(4);
console.log(c, d); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

/*Neste caso o valor de C altera o valor de D, pois os dois não são apenas cópias com espaços diferentes na memória, nesse caso os valores de C e D apontam para o mesmo lugar na memória, dividindo o mesmo valor */

d.splice(2);
console.log(c, d) // [ 1, 2 ] [ 1, 2 ]

/*Isto é um caso inverso, aonde alteramos o D, que usa o C como ponto de referência na memória, porém por usar o mesmo espaço da memória altera o valor de C */

/*Para darmos a mesma propriedade imutável para os objetos fazemos a seguinte coisa */

const e = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const f = {...e}; // {...x} da a propriedade primitiva para um objeto

e.nome = 'João';
console.log(e, f)
// { nome: 'João', sobrenome: 'Otávio' } { nome: 'Luiz', sobrenome: 'Otávio' }

/*Como visto no exemplo acima, mesmo sendo objetos apenas o valor de E é atualizado, o valor de F não, devido a sua nova propriedade primitiva */