// OBJETOS
// [] = Array | {} = Objeto

const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

// ----------------------------------------------------------------------------
// CRIAÇÃO DE OBJETOS COM FUNÇÕES

//                   |-----Parâmetros -----|
function criaPessoa (nome, sobrenome, idade) {
    /*return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };*/

    /*Podemos substituir nome:nome, | sobrenome:sobrenome, | idade: idade
    apenas por nome, | sobrenome, | idade pois o javaScript já sabe que é
    dois nomes iguais, dessa forma nosso código fica muito menor*/

    return { nome, sobrenome, idade };
}

//                         |-----Argumento-----|
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);

// Argumento é o valor que é passado para o parâmetro

const pessoa2 = criaPessoa('Maria', 'Oliveira', 15);
const pessoa3 = criaPessoa('João', 'Moreira', 23);
const pessoa4 = criaPessoa('Giovanna', 'Freitas', 17);
const pessoa5 = criaPessoa('Pedro', 'Lara', 41);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade); // Luiz Oliveira 23

// ----------------------------------------------------------------------------
// FUNÇÃO DENTRO DE OBJETO
const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    /*Lembretes: na situação de função dentro de objeto não é necessário 
    escrever function, podemos ir direto ao ponto escrevendo o nome da 
    função.
    
    this: neste contexto, neste objeto
    */

    incrementaIdade() {
        this.idade++;
        console.log(`A minha idade atual é ${this.idade}.`)
    }
};

pessoa6.fala(); // Luiz Miranda está falando oi...
pessoa6.incrementaIdade(); // A minha idade atual é 26.
pessoa6.fala(); // Luiz Miranda está falando oi...
pessoa6.incrementaIdade(); // A minha idade atual é 27.
pessoa6.fala(); // Luiz Miranda está falando oi...
pessoa6.incrementaIdade(); // A minha idade atual é 28.