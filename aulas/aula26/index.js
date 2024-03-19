/*

Operadores Lógicos
&& -> AND -> E = Todas as expressões tem que ser verdadeiras para retornar true

|| -> OR -> OU = Apenas uma expressão precisa ser verdadeira para retornar true

! -> NOT -> NÃO = Todas as expressões precisam ser falsas para retornar false

*/

const expressaoAnd = true && true && true && false && true;
console.log(expressaoAnd); // false


const expressaoOr = false || false || true || false || false;
console.log(expressaoOr); // true


const expressaoNot = false && false && true && false && false;
console.log(expressaoNot) // false


usuario = 'Luiz'
senha = '123456'

//                      true                false
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar) // false