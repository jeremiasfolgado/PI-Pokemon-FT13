import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link}from 'react-router-dom'
import {getPokemonByName} from '../../actions/index.js'

export function SearchBar (){
const [pokeName, setPokeName] = useState('')
const pokemon = useSelector(state=> state.pokemonDetail)
//console.log(pokeName)
const dispatch = useDispatch()
function handleSubmit(e){
    e.preventDefault();
    console.log("se hizo el submit")
    dispatch(getPokemonByName(pokeName))
    setPokeName('')

}
return (
    // <Link to={`/pokemon/${pokeName}`}>
    //     </Link>
        <form onSubmit={e=>{
                handleSubmit(e)
            }}>
            <input type='text' autoComplete='off' value={pokeName} onChange={e=>setPokeName(e.target.value)} ></input>
            <input type='submit' value='buscar'></input>
        </form>
    
)
}

export default SearchBar;