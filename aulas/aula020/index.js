// ARRAYS

const dados = ['Luiz', 'Maria', 'João', 1, true, null];
// Isso acima não é uma boa prática de programação, é interessante sempre 
// manter o Array com apenas um tipo de dado (string, number, boolean)

// ----------------------------------------------------------------------------

// Diferença de índices de uma string e um array

//            0123456789...
const nome = 'Luiz Otavio'

//               0         1          2
const alunos = ['Daniel', 'Giovana', 'Gabriel']

// ----------------------------------------------------------------------------

// Acessando os dados de um array

// console.log(alunos); // [ 'Daniel', 'Giovana', 'Gabriel' ]
// console.log(alunos[0]); // Daniel
// console.log(alunos[2]); // Gabriel

// ----------------------------------------------------------------------------

// É possível alterar os dados de um Array

// alunos[0] = 'Eduardo'; 
// console.log(alunos) // [ 'Eduardo', 'Giovana', 'Gabriel' ]

// ----------------------------------------------------------------------------

// Podemos além de editar, adicionar um novo valor ao final da lista, colocando dentro dos colchetes o próximo número do elemento

// alunos[3] = 'Geraldo'
// console.log(alunos) // [ 'Eduardo', 'Giovana', 'Gabriel', 'Geraldo' ]

// ----------------------------------------------------------------------------

// Um problema em adicionar um dado ao final da lista de forma manual é que sempre precisamos saber o valor exato da lista para poder adicioná-lo no final, se não da erro, então podemos fazer o computador ter esse trabalho e fazer de forma automática

 alunos[alunos.length] = 'Luiza'
 alunos.push('Fábio');
 alunos[alunos.length] = 'Luana'
// console.log(alunos) // [ 'Daniel', 'Giovana', 'Gabriel', 'Luiza', 'Fabio', 'Luana' ]

// ----------------------------------------------------------------------------

// Podemos também adicionar um item ao começo da lista

 alunos.unshift('Neymar'); 
// console.log(alunos); // [ 'Neymar',  'Daniel', 'Giovana', 'Gabriel', 'Luiza',  'Fábio', 'Luana' ]

// ----------------------------------------------------------------------------

// Podemos também excluir o último item do nosso array ou transferi-lo para outra variável

// const removido = alunos.pop(); // removeu o item de alunos e adicionou a variável removido
// console.log(removido); // Luana
// console.log(alunos); // [ 'Neymar', 'Daniel', 'Giovana', 'Gabriel', 'Luiza', 'Fábio' ]

// ----------------------------------------------------------------------------

// Podemos também excluir o primeiro item do nosso array ou transferi-lo para outra variável

// const removido = alunos.shift(); // removeu o item de alunos e adicionou a variável removido
// console.log(removido); // Neymar
// console.log(alunos); // [ 'Daniel', 'Giovana', 'Gabriel', 'Luiza', 'Fábio', 'Luana' ]

// ----------------------------------------------------------------------------

// Podemos também excluir um dado de uma lista porém manter seu índice

// delete alunos[1];
// console.log(alunos); // [ 'Daniel', <1 empty item>, 'Gabriel', 'Luiza', 'Fábio', 'Luana' ]
// console.log(alunos[1]); // undefined

// ----------------------------------------------------------------------------

// Fatiando Arrays

// Mostra apenas os três primeiros índices do array
console.log(alunos.slice(0, 3)); // [ 'Neymar', 'Daniel', 'Giovana' ]

// Mostra o array menos os dois últimos
console.log(alunos.slice(0, -2)); //  [ 'Neymar', 'Daniel', 'Giovana', 'Gabriel', 'Luiza' ]

// ----------------------------------------------------------------------------

console.log(typeof alunos); // Object
console.log(alunos instanceof Array); // True of False