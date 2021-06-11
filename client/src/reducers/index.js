import {GET_POKEMONS} from '../actions/index.js'
const initialState = {
    pokemons: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:{
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload)
            }

           
        }
            
    
        default:
            return state
           
    }
    
    
    
}

export default rootReducer;