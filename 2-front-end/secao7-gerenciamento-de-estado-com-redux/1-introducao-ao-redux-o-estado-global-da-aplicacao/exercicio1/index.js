import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return { index: state.index + 1 };
    case "PREVIOUS_COLOR":
      return { index: state.index - 1 };
    default:
      return state;
  };
};

const store = createStore(reducer, composeWithDevTools());

const actionPrevious = { type: "PREVIOUS_COLOR" };

const actionNext = { type: "NEXT_COLOR" };

const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", () => {
  store.dispatch(actionPrevious);
});

const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
  store.dispatch(actionNext);
});
