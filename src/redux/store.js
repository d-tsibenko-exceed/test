import {combineReducers, createStore} from "redux";
import {moviesReducer} from "./reducers/moviesReducer";


const rootReducer = combineReducers({movies: moviesReducer})
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())