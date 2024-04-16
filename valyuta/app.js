         
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const select = document.getElementById('select');
const result = document.getElementById('result');

function change() {
    fetch(`https://api.exchangerate-api.com/v4/latest/AZN?apiKey=dd073148369117f5d7d24f86`)
        .then(res => res.json())
        .then(data => {
            const rates = data.rates;
            Object.keys(rates).forEach(x => {
                const option = document.createElement('option');
                option.value = x;
                option.textContent = x;
                select.append(option);
            });
        })
}

function getData() {
    const selected = select.value;
    const amount = parseFloat(input.value);

    fetch(`https://api.exchangerate-api.com/v4/latest/AZN?apiKey=dd073148369117f5d7d24f86`)
        .then(res => res.json())
        .then(data => {
            const basee = data.base;
            const rates = data.rates;

            const amountt = amount * rates[selected];

            result.innerHTML = 
            ` ${amountt} ${basee} = ${amountt.toFixed(2)} ${selected}`;
        })
}
document.addEventListener('DOMContentLoaded', change);

btn.addEventListener('click', getData);

