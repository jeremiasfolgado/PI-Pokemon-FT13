import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getPokemonByName} from '../../actions/index.js'

export function SearchBar (){
const [pokeName, setPokeName] = useState('')
const pokemon = useSelector(state=> state.pokemonDetail)
//console.log(pokeName)
const dispatch = useDispatch()
function handleSubmit(e){
    e.preventDefault();
    
    dispatch(getPokemonByName(pokeName))
    setPokeName('')

}
return (
    
        <form onSubmit={e=>{
                handleSubmit(e)
            }}>
            <input type='text' autoComplete='off' value={pokeName} onChange={e=>setPokeName(e.target.value)} ></input>
            <input type='submit' value='buscar'></input>
        </form>
    
)
}

export default SearchBar;