const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('raiz-quadrada');
const numeroInteiro = document.getElementById('numero-inteiro');
const numeroVerdadeiro = document.getElementById('numero-verdadeiro');
const arredondamentoCima = document.getElementById('arredondando-cima');
const arredondamentoBaixo = document.getElementById('arredondando-baixo');
const simplificacaoNumero = document.getElementById('simplificação-numero');
const notNumber = document.getElementById('not-a-number');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `${numero ** 0.5}`;
numeroInteiro.innerHTML = `${numero} é inteiro: ${Number.isSafeInteger(numero)}`;
numeroVerdadeiro.innerHTML = `${Number.isNaN(numero)}</p>`;
arredondamentoBaixo.innerHTML = `${Math.floor(numero)}</p>`;
arredondamentoCima.innerHTML = `${Math.ceil(numero)}`;
simplificacaoNumero.innerHTML = `${numero.toFixed(2)}`;

if (Number.isNaN(numero) == true){
    notNumber.innerHTML = 'NaN = "Not a Number": Você digitou um valor não correspondente a um número'
}
