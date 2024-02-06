/* Faça varA receber valor de varB |
   Faça varB receber valor de varC |
   Faça varC receber valor de varA*/ 

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*let varAA = varA
varA = varB
varB = varC
varC = varAA*/

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)