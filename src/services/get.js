


// URL de api para obtener personajes de warstar
const API = 'https://swapi.co/api';

/**
 * Funcion para realizar peticiones GET de Http
 * @param {String} endpoint endpoint de API
 */
export const get = async(endpoint) => {
    // se declaran las opciones de la peticion http
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return await fetch(`${API}${endpoint}`, options)
        .then(
            response => {
                return response.json()
                    .then(
                        json => {
                            if(response.status >= 200 && response.status < 300)
                                return json
                            
                            return Promise.reject(json)
                        }
                    )
            }
        )

}

