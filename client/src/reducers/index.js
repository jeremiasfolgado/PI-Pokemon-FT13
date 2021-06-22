import 
{
    GET_POKEMONS,GET_POKEMON_DETAIL, 
    CLEAR_POKEMON_DETAIL, 
    SET_NULL_POKEMON_DETAIL, 
    GET_POKEMON_BY_NAME, 
    ORDER_BY_NAME_ASC, 
    ORDER_BY_NAME_DESC,
    ORDER_BY_ATTACK_ASC,
    ORDER_BY_ATTACK_DESC,
    ORDER_BY_TYPE, 
    GET_BY_LOCATION,
    GET_TYPES
} 
from '../actions/index.js'
const initialState = {
    pokemons: undefined,
    pokemonDetail: undefined,
    pokemonsFiltered: undefined,
    types: []
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
                pokemons: [...state.pokemons.sort((a,b) => a.name.localeCompare(b.name))],
                pokemonsFiltered: !!state.pokemonsFiltered && [...state.pokemonsFiltered.sort((a,b) => a.name.localeCompare(b.name))] 
            }
        }
        case ORDER_BY_NAME_DESC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => b.name.localeCompare(a.name))], 
                pokemonsFiltered: !!state.pokemonsFiltered && [...state.pokemonsFiltered.sort((a,b) => b.name.localeCompare(a.name))]
            }
        }
        case ORDER_BY_ATTACK_ASC:{
            
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => a.attack - b.attack)], 
                pokemonsFiltered: !!state.pokemonsFiltered ? [...state.pokemonsFiltered.sort((a,b) => a.attack - b.attack)] : undefined
            }
        }
        case ORDER_BY_ATTACK_DESC:{
            return {
                ...state,
                pokemons: [...state.pokemons.sort((a,b) => b.attack - a.attack)],
                pokemonsFiltered: !!state.pokemonsFiltered  ? [...state.pokemonsFiltered.sort((a,b) => b.attack - a.attack)] : undefined
            }
        }
        case ORDER_BY_TYPE:{
            return {
                ...state,
                pokemonsFiltered: [...state.pokemons.filter( pokemon => pokemon.types.includes(action.payload))] 
            }
        }
        case GET_BY_LOCATION:{
            switch (action.payload) {
                case "api": {
                    return {
                        ...state,
                        pokemonsFiltered: [...state.pokemons.filter( pokemon => typeof pokemon.id === 'number')] 
                    }
                    
                }
                case "database": {
                    return {
                        ...state,
                        pokemonsFiltered: [...state.pokemons.filter( pokemon =>  pokemon.id.length)] 
                    }
                    
                }
                case "": {
                    return {
                        ...state,
                        pokemonsFiltered: undefined 
                    }
                    
                }
                
                
                default:
                    
                    break;
            }
            
            
        }
        case GET_TYPES:{
            return {
                ...state,
                types: [...action.payload.map(type => type.name)] 
            }
        }
        

            
            
        default:
            return state
           
    }

           

           

           
            
    
    
    
    
}

export default rootReducer;