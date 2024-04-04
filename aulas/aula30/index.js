// ? :
const pontuacaoUsuario = 999;

//if (pontuacaoUsuario >= 1000) {
//    console.log("Usuário VIP");
//} else {
//    console.log("Usuário normal");
//}

// OPERAÇÃO TERNÁRIA
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

// (condicao) ? "Valor para verdadeiro" : "Valor para falso";

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao) // Usuário normal Preta

const corUsuario1 = "Branca";
const corPadrao1 = corUsuario1 || 'Preta';

console.log(nivelUsuario, corPadrao1) // Usuário normal Branca

// Operador "||" = Ou and