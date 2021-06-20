import React from 'react'
import{useDispatch}from 'react-redux'
import { orderPokemonsByAttackAsc, orderPokemonsByAttackDesc }from '../../actions/index.js'
import './OrderByAttack.css'
export function OrderByAttack (){
    const dispatch = useDispatch();
    return (
        <div className="btn-container">
           <button className="btn" onClick={()=>dispatch(orderPokemonsByAttackAsc)}>Order by Attack</button>
           <button className="btn-sec" onClick={()=> dispatch(orderPokemonsByAttackDesc)}>Desc</button>
           <button className="btn-sec" onClick={()=> dispatch(orderPokemonsByAttackAsc)}>Asc</button>
        </div>

    )
}

export default OrderByAttack;

