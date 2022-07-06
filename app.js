'use strict'

const adviceP = document.querySelector('.advice-value');
const number = document.querySelector('.advice-slip-id')

async function fetchAdvise() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json()

  adviceP.innerHTML = data.slip.advice;
  number.innerHTML = data.slip.id;
}

fetchAdvise();
