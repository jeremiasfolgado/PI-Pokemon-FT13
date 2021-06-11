import axios from 'axios';
//import {} from 'react'
import GET_URL from '../constants.js'

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'

//

export function getPokemons() {
    return function(dispatch) {
      axios.get('http://localhost:3001/pokemons')
        .then(response =>{
          dispatch({type:GET_POKEMONS, payload: response.data})
        })
    };
}
      
      
      
      
      

//  