import axios from 'axios';
//import {} from 'react'
import GET_URL from '../constants.js'

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
 
 
 
  // return async (dispatch) => {
  //   try {
  //     const call = await axios.get(`http://localhost:3001/pokemons/${id}`)
  //     call &&  dispatch({type:GET_POKEMON_DETAIL, payload: call.data})
  //   } catch (error) {
  //     console.log(error)
  //     if(error.response?.status === 404) dispatch({type:GET_POKEMON_DETAIL, payload: null})
  //     //dispatch({type:GET_POKEMON_DETAIL, payload: null})
  //   }
    
  //}  
  
  return function(dispatch) {
      axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(response =>{
          dispatch({type:GET_POKEMON_DETAIL, payload: response.data})
        })
        .catch(error => {
          //console.log("hola soy el error", typeof error.response.status)
          // if(error.response?.status !== 404) return alert("El ID es incorrecto")
          if(error.response.status === 404) {
            //console.log("entre al error")
            dispatch({type:SET_NULL_POKEMON_DETAIL, payload: null})
          }else{
            return alert("El ID es incorrecto")
          }
        })
    };
}
export function getPokemonByName(name){
  return function(dispatch){
    axios.get(`http://localhost:3001/pokemons?name=${name}`)
      .then(response => {
        console.log(response.data)
        dispatch({type:GET_POKEMON_BY_NAME, payload: response.data})
      })
      .catch(error => {
        console.log("hola soy el error", typeof error.response.status)
        // if(error.response?.status !== 404) return alert("El ID es incorrecto")
        if(error.response.status === 404) {
          console.log("entre al error")
          dispatch({type:SET_NULL_POKEMON_DETAIL, payload: null})
        }else{
          return alert("El ID es incorrecto")
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