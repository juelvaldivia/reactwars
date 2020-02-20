import { get } from "../services";

/**
 * Constantes de api starwars
 */
export const REQUEST_PEOPLE_STARWARS = 'REQUEST_PEOPLE_STARWARS';
export const REQUEST_PEOPLE_SUCCESS_STARWARS = 'REQUEST_PEOPLE_SUCCESS_STARWARS';
export const REQUEST_PEOPLE_FAILED_STARWARS = 'REQUEST_PEOPLE_FAILED_STARWARS';

/**
 * REDUCTOR PARA OBTENER PERSONAJES DE STARWARS
 * Created by: Daniel el travieso coge venados
 */
const initialState = {
    people: {
        count: 0,
        next: null,
        previous: null,
        results: []
    }
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case REQUEST_PEOPLE_STARWARS:
            return {...state}
        case REQUEST_PEOPLE_SUCCESS_STARWARS:
            return {...state, people: action.payload}
        case REQUEST_PEOPLE_FAILED_STARWARS:
            return {...state }
        default:
            return {...state}
    }
}

/**
 * Funcion para retornar la accion de Request
 */
const request = () => {
    const action = {
        type: REQUEST_PEOPLE_STARWARS
    }
    return action;
}

/**
 * Funcion para retornar la accion de éxito con los datos obtenidos
 * @param {Object} data infomación que regresa la API
 */
const success = (data) => {
    return {
        type: REQUEST_PEOPLE_SUCCESS_STARWARS,
        payload: data
    }
}

/**
 * Funcion para retornar la accion de fracaso con el error obtenido
 * @param {Object} error información erronea que regresa la API
 */
const failed = (error) => {
    return {
        type: REQUEST_PEOPLE_FAILED_STARWARS,
        payload: error
    }
}

/**
 * Funcion para obtener los personajes de warstar
 * @param {Object} dispatch funcion que dispara acciones de Redux
 */
const getPeople = async(dispatch) => {
    dispatch(request());
    try {
        // realiza petición Http
        const peopleStarwars = await get('/people');
        dispatch(success(peopleStarwars));

    } catch ( error) {
        dispatch(failed(error));
    }
}

export const starwarsServiceApi = {
    getPeople
}