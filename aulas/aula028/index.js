const numero = 4;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não, faça isso {codigo}

if (numero >= 0 && numero <= 4) {
    console.log("O número está entre 0 e 4.")
} else if (numero >= 5 && numero <= 7) {
    console.log("O número está entre 5 e 7.")

} else if (numero >= 8 && numero <= 10) {
    console.log("O número está entre 8 e 10.")

} else {
    console.log("O número NÃO está entre 0 e 11.")
}

if (1 === 1) {
    console.log("LITERAL");
}

console.log("...Aqui vai o restante do código, ele é executado independente dos ifs")