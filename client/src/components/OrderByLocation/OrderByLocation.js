import React from 'react'
import { useDispatch } from 'react-redux';
import {getPokemonInApiOrDb, getPokemons} from '../../actions/index.js'

export function OrderByLocation(){
    const dispatch = useDispatch();
    
 
    return (
        <div className="btn-container">
            <a href="#" className="btn" onClick={()=> dispatch(getPokemonInApiOrDb("api"))}>From Api</a>
            <a href="#" className="btn" onClick={()=> dispatch(getPokemonInApiOrDb("database"))}>From Database</a>
            <a href="#" className="btn" onClick={()=> dispatch(getPokemons())}>Get All</a>
        </div>
       
 )
}

export default OrderByLocation;