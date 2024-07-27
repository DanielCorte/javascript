let umaString = 'Um "texto"';
console.log(umaString); // --> Um "texto"
// ou let umaString = "Um \"texto\""; --> Um "texto"
// let umaString = "Um \\texto"; --> Um \texto

//                01234567
let uma1String = "Um texto";
console.log(uma1String[4]) // --> e
console.log(uma1String[8]) // --> undefined
console.log(uma1String[-1]) // --> undefined

console.log(uma1String.charAt(6)); // --> t
console.log(uma1String.charCodeAt(6)); // --> 116

console.log(uma1String.concat(' ', 'em', ' ', 'um lindo', ' ','dia'));
//                                                --> Um texto em um lindo dia 
console.log(uma1String + ' em um lindo dia.'); // --> Um texto em um lindo dia
console.log(`${uma1String} em um lindo dia.`); // --> Um texto em um lindo dia

console.log(uma1String.indexOf('t')); // --> 3
console.log(uma1String.lastIndexOf('t')); // --> 6
console.log(uma1String.lastIndexOf('t', 5)); // --> 3

console.log(uma1String.match(/[a-z]/g)); // --> [ 'm', 't', 'e', 'x', 't', 'o' ]

console.log(uma1String.match(/[a-z]/)); // [ 'm', index: 1, input: 'Um texto', groups: undefined ]

console.log(uma1String.search(/x/)); // 5

console.log(uma1String.replace('Um', 'Outro')); // Outro texto




