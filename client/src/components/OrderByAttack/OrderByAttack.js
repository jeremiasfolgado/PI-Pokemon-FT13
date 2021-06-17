import React from 'react'
import{useDispatch}from 'react-redux'
import { orderPokemonsByAttackAsc, orderPokemonsByAttackDesc }from '../../actions/index.js'
import './OrderByAttack.css'
export function OrderByAttack (){
    const dispatch = useDispatch();
    return (
        <div className="btn-container">
           <a href="#" className="btn" onClick={()=>dispatch(orderPokemonsByAttackAsc)}>Order by Attack</a>
           <a href="#" className="btn-sec" onClick={()=> dispatch(orderPokemonsByAttackDesc)}>Desc</a>
           <a href="#" className="btn-sec" onClick={()=> dispatch(orderPokemonsByAttackAsc)}>Asc</a>
        </div>

    )
}

export default OrderByAttack;

