/**
 * En este archivo se crea el store de redux con sus reducers
 */

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// importar nuestros reductores o rootReducer
import { rootReducer } from "../ducks";

// se crea logger midleware
const loggerMidleware = createLogger();

/**
 * Se crea store de redux para configurarlo con react
 */
export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMidleware)
)

