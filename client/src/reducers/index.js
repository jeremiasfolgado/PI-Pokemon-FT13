import {GET_POKEMONS,GET_POKEMON_DETAIL, CLEAR_POKEMON_DETAIL, SET_NULL_POKEMON_DETAIL, GET_POKEMON_BY_NAME} from '../actions/index.js'
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
        case SET_NULL_POKEMON_DETAIL:{
            return {
                ...state,
                pokemonDetail: null
            }
        }
        case GET_POKEMON_BY_NAME:{
            return {
                ...state,
                pokemons: !!state.pokemons.find(pokemon => pokemon.id === action.payload.id)? [...state.pokemons] : [action.payload, ...state.pokemons ] 
            }
        }
        default:
            return state
           
    }

           

           

           
            
    
    
    
    
}

export default rootReducer;