import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return { index: state.index + 1 };
    case 'PREVIOUS_COLOR':
      return { index: state.index - 1 };
    default:
      return state;
  };
};

const state = createStore(reducer, composeWithDevTools());