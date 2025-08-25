import {nanoid} from "nanoid"

const passwordBtnEl = document.querySelector('button');
const displayPasswordEL = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEL.innerHTML = randomPassword;
});