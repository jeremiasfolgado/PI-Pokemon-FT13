import axios from 'axios';
//import {} from 'react'
import GET_URL from '../constants.js'

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const CLEAR_POKEMON_DETAIL = 'CLEAR_POKEMON_DETAIL'

//

export function getPokemons() {
    return function(dispatch) {
      axios.get('http://localhost:3001/pokemons')
        .then(response =>{
          dispatch({type:GET_POKEMONS, payload: response.data})
        })
    };
}
export function getPokemonDetail(id) {
    return function(dispatch) {
      axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(response =>{
          dispatch({type:GET_POKEMON_DETAIL, payload: response.data})
        })
        .catch(error => {
          if(error.response?.status !== 404) return alert("El ID es incorrecto")
          dispatch({type:GET_POKEMON_DETAIL, payload: null})
        })
    };
}
export function clearPokemonDetail() {
    return {
      type: CLEAR_POKEMON_DETAIL,
      payload: undefined
    };
}

      
      
      
      
      

//  