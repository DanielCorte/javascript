alert('Mensagem'); // = window.alert('Mensagem')
// Retorna valor undefined

window.confirm('Deseja realmente apagar?') // Retorna valor boolean T or F
// Retorna True or False

window.prompt('Digite o seu nome:')
// Retorna valor digitado pelo usuário
// Sempre retorna uma string


/* Funções dentro de objetos chamamos de métodos,
 fora deles chamamos de funções normalmente*/

// Exemplos: 

const confirma = confirm('Realmente deseja apagar? ')
console.log(confirma);
