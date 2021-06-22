import axios from 'axios';


export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const SET_NULL_POKEMON_DETAIL = 'SET_NULL_POKEMON_DETAIL'
export const CLEAR_POKEMON_DETAIL = 'CLEAR_POKEMON_DETAIL'
export const GET_POKEMON_BY_NAME='GET_POKEMON_BY_NAME'
export const  ORDER_BY_NAME_ASC= 'ORDER_BY_NAME_ASC'
export const  ORDER_BY_NAME_DESC= 'ORDER_BY_NAME_DESC'
export const  ORDER_BY_ATTACK_ASC= 'ORDER_BY_ATTACK_ASC'
export const  ORDER_BY_ATTACK_DESC= 'ORDER_BY_ATTACK_DESC'
export const ORDER_BY_TYPE = 'ORDER_BY_TYPE'
export const GET_BY_LOCATION = 'GET_BY_LOCATION'
export const GET_TYPES= 'GET_TYPES'

//

export function getPokemons() {
    return function(dispatch) {
      axios.get('http://localhost:3001/pokemons')
        .then(response =>{
          dispatch({type:GET_POKEMONS, payload: response.data})
        })
    };
}

export function getTypes(){
  return async (dispatch)=> {
      const call = await axios.get('http://localhost:3001/types/');
      dispatch({type:GET_TYPES, payload: call.data})
  }
}


export function getPokemonDetail(id) {
  return function(dispatch) {
      axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(response =>{
          console.log(response.data)
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
export function clearPokemonDetail() {
  return {
    type: CLEAR_POKEMON_DETAIL,
    payload: undefined
  };
}          
          


export function getPokemonByName(name){
  // console.log("entre a la funcion", name)
  return async function(dispatch){
    try {
      const call = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
      //console.log(call)
    if(call){
      dispatch({type:GET_POKEMON_BY_NAME, payload: call.data})
    }  
    } catch (error) {
      console.error(error)
    }
  }
}


  
    
   
//FILTRO POR API/DATABASE

// export function getPokemonInApiOrDb(boolean){
//   return function(dispatch){
//     axios.get(`http://localhost:3001/pokemons?from=${boolean}`)
//       .then(response => {
//         dispatch({type:GET_POKEMONS, payload: response.data})
//       })
//       .catch(error => {
//         if(error.response.status === 404) {
//           dispatch({type:SET_NULL_POKEMON_DETAIL, payload: null})
//         }else{
//           return alert("This Pokemon does not exist in our database")
//         }
//       })
//   }
// }  

export function getPokemonByLocation(from){
 
  return function(dispatch){
    dispatch({type: GET_BY_LOCATION, payload: from})

  }

}
        
          
    

export function orderPokemonsByNameAsc(dispatch){
    dispatch({type: ORDER_BY_NAME_ASC})
}
export function orderPokemonsByNameDesc(dispatch){
    dispatch({type: ORDER_BY_NAME_DESC})
}

export function orderPokemonsByAttackAsc(dispatch){
    dispatch({type: ORDER_BY_ATTACK_ASC})
}
export function orderPokemonsByAttackDesc(dispatch){
    dispatch({type: ORDER_BY_ATTACK_DESC})
}

export function orderPokemonsByType(type){
  return function(dispatch){
    dispatch({type: ORDER_BY_TYPE, payload: type})

  }
}
      
      
     
      
      

