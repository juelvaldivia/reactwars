/**
 * Aqui se unen TODOS los reductores para pasarlos 
 * al store del Provider
 * de nuestra App
 */
import { combineReducers } from "redux";
import starwars from './starwars.ducks';

/**
 * Une todos los reductores en un sólo objeto
 */
export const rootReducer = combineReducers(
    {
        starwars: starwars
    }
)