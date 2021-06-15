import React from 'react'
import { useDispatch } from 'react-redux';
import {getPokemonInApiOrDb, getPokemons} from '../../actions/index.js'

export function OrderByLocation(){
    const dispatch = useDispatch();
    
 
    return (
        <nav>
            <button onClick={()=> dispatch(getPokemonInApiOrDb("api"))} >From Api</button>
            <button onClick={()=> dispatch(getPokemonInApiOrDb("database"))}>From Database</button>
            <button onClick={()=> dispatch(getPokemons())}>Get All</button>

        </nav>

 )
}

export default OrderByLocation;