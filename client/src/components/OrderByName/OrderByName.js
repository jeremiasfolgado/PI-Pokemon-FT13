import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {orderPokemonsByNameAsc, orderPokemonsByNameDesc}from '../../actions/index.js'


export function OrderByName(){
    const dispatch = useDispatch()
    //const statePokemons = useSelector(state => state.pokemons)
    

    return (
        <nav>
            <button onClick={()=> dispatch(orderPokemonsByNameAsc)} >Order by Name</button>
            <button onClick={()=> dispatch(orderPokemonsByNameDesc)} >Desc</button>
            <button onClick={()=> dispatch(orderPokemonsByNameAsc)} >Asc</button>
            
        </nav>
    )
}

export default OrderByName;