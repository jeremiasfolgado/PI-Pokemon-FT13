import {
    GET_POKEMONS,GET_POKEMON_DETAIL, 
    CLEAR_POKEMON_DETAIL, 
    SET_NULL_POKEMON_DETAIL, 
    GET_POKEMON_BY_NAME, 
    ORDER_BY_NAME_ASC, 
    ORDER_BY_NAME_DESC,
    ORDER_BY_ATTACK_ASC,
    ORDER_BY_ATTACK_DESC
} from '../actions/index.js'
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
        case ORDER_BY_NAME_ASC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => a.name.localeCompare(b.name))] 
            }
        }
        case ORDER_BY_NAME_DESC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => b.name.localeCompare(a.name))] 
            }
        }
        case ORDER_BY_ATTACK_ASC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => a.attack - b.attack)] 
            }
        }
        case ORDER_BY_ATTACK_DESC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => b.attack - a.attack)] 
            }
        }
            
            
        default:
            return state
           
    }

           

           

           
            
    
    
    
    
}

export default rootReducer;