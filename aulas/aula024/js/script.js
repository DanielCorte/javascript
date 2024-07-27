// IIFE = Immediately invoked function expression
/*
IIFE é uma função em JavaScript que é executada assim que definida. É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses

Design Pattern: soluções típicas para problemas comuns em projetos de software
*/
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1)
    //    console.log('Foi enviado.');
    // };

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} | ${peso.value}KG. | ${altura.value}cm</p>`
    }
    
    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();