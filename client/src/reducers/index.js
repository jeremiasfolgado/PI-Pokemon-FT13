import {GET_POKEMONS,GET_POKEMON_DETAIL, CLEAR_POKEMON_DETAIL} from '../actions/index.js'
const initialState = {
    pokemons: undefined,
    pokemonDetail: undefined,
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:{
            return {
                ...state,
                pokemons: action.payload
            }
        }
        case GET_POKEMON_DETAIL:{
            return {
                ...state,
                pokemonDetail: action.payload
            }
        }
        case CLEAR_POKEMON_DETAIL:{
            return {
                ...state,
                pokemonDetail: undefined
            }
        }
        default:
            return state
           
    }

           

           

           
            
    
    
    
    
}

export default rootReducer;