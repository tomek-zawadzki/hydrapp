import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const addGlass = document.querySelector(".add--js");
const removeGlass = document.querySelector(".remove--js");
const amount = document.querySelector(".amount--js");
const key = new Date().toLocaleString().slice(0, 10);
console.log(key);

let counter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  counter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

amount.innerHTML = counter;

addGlass.addEventListener("click", () => {
  counter++;
  amount.innerHTML = counter;
  localStorage.setItem(key, counter);
});

removeGlass.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  amount.innerHTML = counter;
  localStorage.setItem(key, counter);
});


// parseInt() - zamiana stringa na number