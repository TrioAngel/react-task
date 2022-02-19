import { combineReducers, createStore } from "redux";
import hatsReducer from "./hatsReducer";
import categoryReducer from "./categoryReducer";

let reducers = combineReducers({
    hatsPage: hatsReducer,
    categories: categoryReducer
})

let store = createStore(reducers);

export default store;