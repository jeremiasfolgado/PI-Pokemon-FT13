import React from 'react'
import {useDispatch} from 'react-redux'
import {orderPokemonsByNameAsc, orderPokemonsByNameDesc}from '../../actions/index.js'


export function OrderByName(){
    const dispatch = useDispatch()
    //const statePokemons = useSelector(state => state.pokemons)
    

    return (
        <div className="btn-container">
           <button  className="btn" onClick={()=> dispatch(orderPokemonsByNameAsc)}>Order by Name</button>
           <button  className="btn-sec" onClick={()=> dispatch(orderPokemonsByNameDesc)}>Desc</button>
           <button className="btn-sec" onClick={()=> dispatch(orderPokemonsByNameAsc)}>Asc</button>
        </div>
       
    )
}

export default OrderByName;