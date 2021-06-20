import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getPokemonByName} from '../../actions/index.js'
import '../OrderByType/OrderByType.css'



export function SearchBar (){
const [pokeName, setPokeName] = useState('')

//console.log(pokeName)
const dispatch = useDispatch()
function handleSubmit(e){
    e.preventDefault();
    
    dispatch(getPokemonByName(pokeName))
    setPokeName('')

}
return (
    <div className="btn-container">
        <form onSubmit={e=>{
                handleSubmit(e)
            }}>
            <input className="input-search" type='text' autoComplete='off' value={pokeName} onChange={e=>setPokeName(e.target.value)} ></input>
            <input type='submit' value='search' className="btn"></input>
        </form>
    </div>

    
    
)
}

export default SearchBar;