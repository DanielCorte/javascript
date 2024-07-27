console.log('Luiz Otavio' && true && 'Maria'); // Maria
/*Quando todos os valores são true, o console retornará o último valor */

console.log('Luiz Otavio' && 0 && 'Maria'); // 0
/*Quando é encontrado um valor false, esse valor é o informado */

/*
FALSY:
false
0
'' | "" | ``
null / undefined
NaN
*/

// Qualquer coisa diferente disto é avaliado em true no javaScript

// Exemplo de AND na prática
function falaOI() {
    return 'oi';

}

let vaiExecutar = false;
console.log(vaiExecutar && falaOI()); // false

let vaiExecutar1 = true;
console.log(vaiExecutar1 && falaOI()); // oi

// Exemplo de OR na prática
console.log(0 || false || "" || undefined || 'Luiz Otavio' || NaN || '' || null || `` || true); // Luiz Otavio

const a = 0
const b = null
const c = false
const d = undefined
const e = NaN

console.log(a || b || c || d || e); // NaN
/*Quando todos os valores forem falsos, o último valor falso é retornado */