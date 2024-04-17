const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getWeekDayText(weekDay) {
    const WeeksDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']

    return WeeksDay[weekDay];
}

function getMonthName(monthNumber) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return months[monthNumber];
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