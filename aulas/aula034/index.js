        // // Differences between let and var

        // const truth = true;

        // // Let tem escopo de bloco { ... bloco }
        // // Var só tem escopo de função

        // let name = 'Luiz' // creating
        // var name2 = 'Luiz' // creating


        // if (truth) {
        //     let name = 'Otavio'; // creating
        //     var name2 = 'Roger'; // redeclaring

        //     if (truth) {
        //         var name2 = 'Ronaldo'; // redeclaring
        //         let name = 'Something else';
        //     }
        // }

        // console.log(name, name2) // Luiz Ronaldo

// -----------------------------------------------------------------------------

// var surname = 'Miranda';

// function sayHi () {
//     console.log(surname); // Miranda

// }


// function sayHi () {
//     var surname = 'Miranda';
    
// }
// console.log(surname); // surname is not defined

/*This shows that function can borrow from outside your function but on the other hand he doesn´t lend outside of his hole, he's selfish */

// -----------------------------------------------------------------------------

// const truth = true;
// function sayHi  () {

//     if (truth) {
//         let name = 'Luiz';
//         var surname = 'Miranda'
//     }

//     console.log(surname); // Miranda
// }

/*How is everything inside this function, we can use a console outside the if because of being a var */

// sayHi();

// -----------------------------------------------------------------------------
// HOISTING VAR E LET
console.log(surname); // undefined

var surname = 'Miranda';

/*O var quando uma variável é utilizada antes de ser declarada, a engine do javascript quando inicializa o programa, reconhece ela e a declara no começo do código sem valor para o programa não dar erro */

console.log(surname); // surname is not defined

let surname = 'Miranda';

/*Isso não ocorre com o var, ele da erro */