import axios from 'axios';


export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const SET_NULL_POKEMON_DETAIL = 'SET_NULL_POKEMON_DETAIL'
export const CLEAR_POKEMON_DETAIL = 'CLEAR_POKEMON_DETAIL'
export const GET_POKEMON_BY_NAME='GET_POKEMON_BY_NAME'

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
          if(error.response.status === 404) {
            dispatch({type:SET_NULL_POKEMON_DETAIL, payload: null})
          }else{
            return alert("This ID does not exist in our database")
          }
        })
    };
}
          
          


export function getPokemonByName(name){
  return function(dispatch){
    axios.get(`http://localhost:3001/pokemons?name=${name}`)
      .then(response => {
        dispatch({type:GET_POKEMON_BY_NAME, payload: response.data})
      })
      .catch(error => {
        if(error.response.status === 404) {
          dispatch({type:SET_NULL_POKEMON_DETAIL, payload: null})
        }else{
          return alert("This Pokemon does not exist in our database")
        }
      })
    }
  }
       
        
          
    
export function clearPokemonDetail() {
    return {
      type: CLEAR_POKEMON_DETAIL,
      payload: undefined
    };
}

      
      
      
      
      

//  