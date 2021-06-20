import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {orderPokemonsByType} from '../../actions/index.js'
import './OrderByType.css'


export function OrderByType ({getTypeToOrder}){
    const typeList = useSelector(state => state.types)
    const[type, setType] = useState("")
    const dispatch = useDispatch()
    const handleChange = e =>{
        setType(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(orderPokemonsByType(type))
        setType("")
    }   

    return (
        <div className="form-container">
             <div className="text">
                <span >Filter by type</span>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <select className="form-select" name='select' onChange={handleChange}>
                   {typeList && typeList.map(type =>  (
                       <option key={type} value={type}>{type}</option>
                   ))}
                </select>

                {type && <button  className="btn" type='submit' >Filter by type</button>}

            </form>

        </div>
       
       
       
    )
}
export default OrderByType;


