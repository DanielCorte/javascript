/*É possível colocar aspas duplas dentro de aspas duplas,
usando \" */

let umaString = "Um \"texto\""
console.log(umaString);

// Strings são indexadas 
//           --> 01234567...
let oneString = "one texto"

// Encontrando índices específicos dentro de strings
console.log(oneString[4]) // t
console.log(oneString.charAt(4)) // t
console.log(oneString.charCodeAt(4)) // 116 --> tabela ASC

// Concatenando com strings
console.log(oneString.concat(' in', ' a', ' beautiful day.'))
console.log(oneString + ' in a beautiful day.')
console.log(`${oneString} in a beatuiful day.`)

// Encontrando índices pt.2
console.log(oneString.indexOf('text')); // 4
console.log(oneString.indexOf('Text')); // -1 (didn't find anything)
console.log(oneString.indexOf('o', 3)); // 8
console.log(oneString.lastIndexOf('o', 3)); // 0

console.log(oneString.search(/x/)); // 6
console.log(oneString.match(/[a-z]/g)); // [ 'o', 'n', 'e', 't', 'e', 'x', 't']
console.log(oneString.match(/[a-z]/)); // [ 'o', index: 0, input: 'one texto', groups: undefined ]

console.log(oneString.replace('one', 'another')) // 'one' or /one/ --> =

//               0123456789 
let twoString = "O rato roeu a roupa do rei de roma.";
console.log(twoString.replace(/r/, '#')) // O #ato roeu a roupa do rei de roma.
console.log(twoString.replace(/r/g, '#'))// O #ato #oeu a #oupa do #ei de #oma.

//                0123456789
let kingString = "o rato roe"
console.log(twoString.length); // 35
console.log(kingString.length); // 10
console.log(twoString.slice(2, 6)); // rato