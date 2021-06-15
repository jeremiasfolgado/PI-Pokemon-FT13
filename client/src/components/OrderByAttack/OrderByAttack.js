import React from 'react'
import{useDispatch}from 'react-redux'
import { orderPokemonsByAttackAsc, orderPokemonsByAttackDesc }from '../../actions/index.js'

export function OrderByAttack (){
    const dispatch = useDispatch();
    return (
        <nav>
            <button onClick={()=>dispatch(orderPokemonsByAttackAsc)}>Order by Attack</button>
            <button onClick={()=> dispatch(orderPokemonsByAttackDesc)} >Desc</button>
            <button onClick={()=> dispatch(orderPokemonsByAttackAsc)} >Asc</button>
        </nav>
    )
}

export default OrderByAttack;