/*
OPERADORES DE COMPARAÇÃO
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) *NÃO RECOMENDADO PELO PROFESSOR*
=== igualdade estrita (valor e tipo)
!= diferente (valor) *NÃO RECOMENDADO PELO PROFESSOR*
!== diferente estrito (valor e tipo)
*/
const comp = 10 > 5; // Retorna valor boolean e atribui a variável comp
console.log(comp); // True -> valor boolean

const comp1 = 10 >= 10; // (10>10: false) (10=10: true) 
console.log(comp1); // True

const comp2 = 10 >= 11; // (10>11: false) (10=11: false) 
console.log(comp2); // False 

const num1 = 10; // number
const num2 = '10'; // string
const comp3 = num1 == num2;
console.log(comp3); // True
/*O sistema considerou verdadeiro pois ele ta avaliando apenas o valor e não
o tipo também */

const comp4 = num1 === num2;
console.log(comp4); // False
/*Deu falso pois agora o sistema não está apenas comparando o valor como o 
tipo do valor também, por um ser string e o outro number, eles não são iguais
portanto, False */

// O mesmo vale para != e !==
// Por isso se usa apenas as comparações estritas