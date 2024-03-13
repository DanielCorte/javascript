function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

// Para executarmos a ação colocamos () na frente da function
saudacao('Daniel') // Bom dia Daniel!
saudacao('Maria') // Bom dia Maria!

// --------------------------------------------------------------------------
function saudacao1(nome) {
    console.log(`Bom dia ${nome}!`)
    return 123456;
}

const variavel = saudacao1('Luiz'); // Bom dia Luiz!
console.log(variavel); // 123456

/*Para fazermos uma função retornar um valor usamos o parâmetro return dentro
dela e ai alienamos algum valor a esse return */

function saudacao2(nome) {
    return `Bom dia ${nome}!`;
}

const variavel2 = saudacao2('Luiz');
console.log(variavel); // Bom dia Luiz!

/*Exemplo prático e correto da function */

// --------------------------------------------------------------------------
function soma(x, y) {
    const resultado = x + y;
    return resultado;
    /*RETURN é o ponto final de uma function nada abaixo dela é executado, ela
    é "como se fosse" o break do python */
}

console.log(soma(2, 3))
console.log(soma(4, 2))
console.log(soma(1, 3))

// Podemos atrelar valores pré-difinidos a nossas funções, por exemplo:
function soma1(x = 0, y = 0) {
    const resultado1 = x + y;
    return resultado1;
}

// --------------------------------------------------------------------------
// FUNÇÕES ANÔNIMAS

const raiz = function (n) {
    return n ** 0.5;
};
/*ALERT: Em funções normais não é obrigatório o uso de ";" porém em funções
anônimas é sim obrigado a usar. */

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5

// --------------------------------------------------------------------------
// ARROW FUNCTIONS => Maneira moderna

const raiz1 = (n) => {
    return n ** 0.5;
}

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5

/*Basicamente as Arrow Functions são formas mais simples de se executar uma
função, o nome Arrow = flecha vem da semelhança da semântica => de uma flecha */

// ABREVIAÇÃO DA ARROW FUNCTION:
const raiz2 = n => n ** 0.5;

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5

// Exatamente o mesmo resultado de 3 linhas para apenas 1.
// --------------------------------------------------------------------------

/*É interessante criar várias pequenas funções que executem apenas uma tarefa
do que uma só função que execute várias tarefas */