import {  legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(composeWithDevTools());

export default store;