import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import{useParams} from 'react-router-dom'
import { clearPokemonDetail, getPokemonDetail } from '../../actions/index.js';

function PokemonDetail(){
    const dispatch = useDispatch()
    const pokemonDetail = useSelector(state => state.pokemonDetail)
    const {id} = useParams()
    //console.log(typeof id)
    useEffect(()=>{
        dispatch(getPokemonDetail(id))
        return ()=> dispatch(clearPokemonDetail())
    },[dispatch, id])
    //console.log("Hola soy un detalle",pokemonDetail)
    return (
        <div>
            {typeof pokemonDetail === 'object' && (<div>
                <span>Nombre </span>
                <span>{pokemonDetail.name}</span>
            </div>
            )}
            {pokemonDetail === null && <h1>pokemon no existe pero create el tuyo careta</h1>}
            {pokemonDetail === undefined && (<h1>El pokemon no existe</h1>)}
        </div>
    )
}
export default PokemonDetail


                
