import React from 'react'
import { useDispatch } from 'react-redux';
import { getPokemonByLocation } from '../../actions/index.js'

export function OrderByLocation(){
    const dispatch = useDispatch();
    
 
    return (
        <div className="btn-container">
            <button className="btn" onClick={()=> dispatch(getPokemonByLocation("api"))}>From Api</button>
            <button className="btn" onClick={()=> dispatch(getPokemonByLocation("database"))}>From Database</button>
            <button className="btn" onClick={()=> dispatch(getPokemonByLocation(""))}>Get All</button>
        </div>
       
 )
}

export default OrderByLocation;

//EL DISPATCH DE ACTION PARA REALIZAR EL FILTRO DESDE EL BACK

// {/* <div className="btn-container">
// <a className="btn" onClick={()=> dispatch(getPokemonInApiOrDb("api"))}>From Api</a>
// <a className="btn" onClick={()=> dispatch(getPokemonInApiOrDb("database"))}>From Database</a>
// <a className="btn" onClick={()=> dispatch(getPokemons())}>Get All</a>
// </div> */}