import {nanoid} from "nanoid"
import copy from 'clipboard-copy';
import "./style.css"

const passwordBtnEl = document.querySelector('button');
const displayPasswordEL = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEL.innerHTML = randomPassword;
});

displayPasswordEL.addEventListener('click', () => {
  copy(event.target.innerHTML);
  alert("Senha copiada!");
});