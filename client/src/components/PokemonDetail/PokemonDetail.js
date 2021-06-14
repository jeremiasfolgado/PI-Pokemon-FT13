import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import{useParams} from 'react-router-dom'
import { clearPokemonDetail, getPokemonDetail } from '../../actions/index.js';

function PokemonDetail(){
    const dispatch = useDispatch()
    const pokemonDetail = useSelector(state => state.pokemonDetail)
    const {id} = useParams()
    
    useEffect(()=>{
        if(id) dispatch(getPokemonDetail(id))
        return ()=> dispatch(clearPokemonDetail())
    },[dispatch, id])
    if(pokemonDetail === null){
        return (
            <Link to='/'>
                <h1>pokemon no existe pero create el tuyo careta</h1>
            </Link>

        )
    }else if(pokemonDetail === undefined){
        return (
            <h1>Cargando...</h1>
        )
    }
    else{
        return (
            <div>
                <span>Nombre </span>
                <span>{pokemonDetail.name}</span>
                <Link to=''>inicio </Link>
            </div>
        )
    }

    //console.log("Hola soy un detalle",pokemonDetail)
    // return (
    //     <div>
    //         {pokemonDetail === null && <h1>pokemon no existe pero create el tuyo careta</h1>}
    //         {pokemonDetail === undefined && <h1>Cargando...</h1>}
    //         {typeof pokemonDetail === 'object' && (<div>
    //             <span>Nombre </span>
    //             <span>{pokemonDetail.name}</span>
    //         </div>
    //         )}
    //         <Link to= '/'>Inicio </Link>
    //     </div>
    // )
}
export default PokemonDetail


                
