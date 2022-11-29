import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return (
        state.index >= state.colors.length - 1 ? ({ ...state, index: state.colors.length - 1 }) : ({ ...state, index: state.index + 1 })
      );
    case "PREVIOUS_COLOR":
      return (
        state.index <= 0 ? ({ ...state, index: 0 }) : ({ ...state, index: state.index - 1 })
      );
    case "RANDOM_COLOR":
      return (
        {
          colors: [...state.colors, criarCor()],
          index: state.colors.length,
        }
      );
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

const actionPrevious = { type: "PREVIOUS_COLOR" };

const actionNext = { type: "NEXT_COLOR" };

const actionRandom = { type: "RANDOM_COLOR" };

const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", () => {
  store.dispatch(actionPrevious);
});

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
  store.dispatch(actionNext);
});

const randomButton = document.querySelector("#random");
randomButton.addEventListener("click", () => {
  store.dispatch(actionRandom);
});

store.subscribe(() => {
  const globalState = store.getState();

  const colorElement = document.querySelector("#value");
  colorElement.innerHTML = globalState.colors[globalState.index];
  const containerElement = document.querySelector("#container");
  containerElement.style.backgroundColor = globalState.colors[globalState.index];
});
