import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers } from "redux";

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return (
        state.theme === "dark" ? ({ ...state, theme: "light" }) : ({ ...state, theme: "dark" })
      );
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return (
        state.status === "offline" ? ({ ...state, status: "online" }) : ({ ...state, status: "offline" })
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({ theme: themeReducer, status: statusReducer });

const store = createStore(rootReducer, composeWithDevTools());

const actionTheme = { type: "CHANGE_THEME" };

const actionStatus = { type: "CHANGE_STATUS" };

const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener("click", () => {
  store.dispatch(actionTheme);
});

const statusButton = document.getElementById('toggle-status');
statusButton.addEventListener("click", () => {
  store.dispatch(actionStatus);
});