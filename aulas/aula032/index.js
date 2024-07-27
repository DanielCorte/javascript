const data = new Date();
let diaSemana = data.getDay();


/*if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado'
};*/

function getWeekDayText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        return 'No week day found!'
    }
}

const diaSemanaTexto = getWeekDayText(diaSemana);

console.log(`O dia ${diaSemana} da semana é ${diaSemanaTexto}`);