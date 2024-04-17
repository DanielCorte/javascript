const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

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

function getMonthName(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 0:
            monthName = 'Janeiro';
            return monthName;
        case 1:
            monthName = 'Fevereiro';
            return monthName;
        case 2:
            monthName = 'Março';
            return monthName;
        case 3:
            monthName = 'Abril';
            return monthName;
        case 4:
            monthName = 'Maio';
            return monthName;
        case 5:
            monthName = 'Junho';
            return monthName;
        case 6:
            monthName = 'Julho';
            return monthName;
        case 7:
            monthName = 'Agosto';
            return monthName;
        case 8:
            monthName = 'Setembro';
            return monthName;
        case 9:
            monthName = 'Outubro';
            return monthName;
        case 10:
            monthName = 'Novembro';
            return monthName;
        case 11:
            monthName = 'Dezembro';
            return monthName;
    }
}

function ZeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function createDate(data) {
    const weekDay = data.getDay();
    const monthNumber = data.getMonth();

    const dayName = getWeekDayText(weekDay);
    const monthName = getMonthName(monthNumber);

    return `${dayName}, ${data.getDate()} de ${monthName}` + 
    ` de ${data.getFullYear()} ` + 
    `${ZeroAEsquerda(data.getHours())}:${ZeroAEsquerda(data.getMinutes())}` 
}

h1.innerHTML = createDate(data);
