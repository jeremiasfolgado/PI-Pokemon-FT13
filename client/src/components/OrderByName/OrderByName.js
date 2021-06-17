import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {orderPokemonsByNameAsc, orderPokemonsByNameDesc}from '../../actions/index.js'


export function OrderByName(){
    const dispatch = useDispatch()
    //const statePokemons = useSelector(state => state.pokemons)
    

    return (
        <div className="btn-container">
           <a href="#" className="btn" onClick={()=> dispatch(orderPokemonsByNameAsc)}>Order by Name</a>
           <a href="#" className="btn-sec" onClick={()=> dispatch(orderPokemonsByNameDesc)}>Desc</a>
           <a href="#" className="btn-sec" onClick={()=> dispatch(orderPokemonsByNameAsc)}>Asc</a>
        </div>
       
    )
}

export default OrderByName;