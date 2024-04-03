const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputWeight = event.target.querySelector('#input-weight');
    const inputHeight = event.target.querySelector('#input-height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Invalid weight', false);
        return;
    };

    if (!height) {
        setResult('Invalid height', false);
        return;
    };

    const bmi = getBMI(weight, height);
    const levelBmi = getLevelBmi(bmi);

    const msg = `Your bmi is ${bmi} (${levelBmi}).`
    setResult(msg, true);
    
});

function getLevelBmi(bmi) {
    const level = ['Under weight', 'Normal weight', 'Over weight', 'Obesity grade 1',
    'Obesity grade 2', 'Obesity grade 3'];

    if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
};

function getBMI(weight, height) {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
};

function createParagraph () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('.result_bmi');
    result.innerHTML = '';

    const p = createParagraph();

    if (isValid) {
        p.classList.add('result-paragraph');
    } else {
        p.classList.add('bad-result-paragraph');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
