/*
Daniel Corte tem 18 anos, pesa 90 kg
tem 1.81 de altura e seu IMC é de 
Daniel Corte nasceu em 2006 

*/ 

const nome = 'Daniel';
const sobrenome = 'Corte';
const idade = 18;
const peso = 90;
const alturaEmM = 1.81;


let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;


indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - idade


/*console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);*/


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso + 'kg'}`);
console.log(`tem ${alturaEmM + 'm'} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento + '.'}`);