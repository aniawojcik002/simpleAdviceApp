'use strict'

const adviceP = document.querySelector(".advice-value");
const number = document.querySelector(".advice-slip-id");
const rollDice = document.querySelector(".roll-dice-container");
const loading = document.querySelector('.loading');


async function fetchAdviceHandler() {
  try {
    
    const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    // hide loader spiner 
    loading.classList.add('hidden');
    // load data to divs
    adviceP.innerText = `"${data.slip.advice}"`;
    number.innerText = data.slip.id;
  }
  catch(error) {
    console.error(`Could not get advice: ${error}`);
  }
}

function displayLoading() {
  loading.classList.remove('hidden');
  adviceP.innerHTML ='';
}

rollDice.addEventListener("click", () => {
  displayLoading();
  fetchAdviceHandler();

});
