import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPokemons} from '../../actions/index.js'

export function Home (){
    const dispatch = useDispatch()
    const statePokemons = useSelector(state => state.pokemons)
    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    console.log("Hola aca estan los potemones", statePokemons)
    
    return (
        <div>
            <ul>
                {
                    statePokemons ? statePokemons.map(pokemon => (
                        <li key= {pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                        </li>
                    )) : <h1>Cargando ...</h1>
                }
            </ul>
        </div>

    )
}

export default Home;