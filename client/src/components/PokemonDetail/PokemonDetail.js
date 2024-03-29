import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import{useParams} from 'react-router-dom'
import { clearPokemonDetail, getPokemonDetail } from '../../actions/index.js';
import profileDefault from '../../resources/profile-default.png'
import './PokemonDetail.css'


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
                <h1>The pokemon does not exist</h1>
            </Link>

        )
    }
    else if(pokemonDetail === undefined){
        return (
            <h1>Loading...</h1>
        )
    }
    else{
        return (
            <div className="flex-container">
                <div className="render-container">
                    <div className="main-description-container">
                        <div className="detail-description-container">
                            <div className="name-detail">
                                <span className="title">name</span>
                                <span className="pokemon-name">{pokemonDetail.name}</span>
                            </div>
                            <div className="group-detail-container">
                                <div className="stats">
                                    <span className="title">attack</span>
                                    <span className="pokemon-name">{pokemonDetail.attack}</span>
                                </div>
                                <div className="stats">
                                    <span className="title">defense</span>
                                    <span className="pokemon-name">{pokemonDetail.defense}</span>
                                </div>
                                <div className="stats">
                                    <span className="title">speed</span>
                                    <span className="pokemon-name">{pokemonDetail.speed}</span>
                                </div>
                                <div className="stats">
                                    <span className="title">health points</span>
                                    <span className="pokemon-name">{pokemonDetail.hp}</span>
                                </div>

                            </div>
                            <div className="group-detail-container">
                                <div className="stats">
                                    <span className="title">ID</span>
                                    <span className="pokemon-name">{typeof pokemonDetail.id === 'string' ? pokemonDetail.id.slice(0,4) : pokemonDetail.id}</span>
                                </div>
                                <div className="stats">
                                    <span className="title">Height</span>
                                    <span className="pokemon-name">{pokemonDetail.height}</span>
                                </div>
                                <div className="stats">
                                    <span className="title">weight</span>
                                    <span className="pokemon-name">{pokemonDetail.weight}</span>
                                </div>
                            </div>
                            <div className="type-detail-container">
                                <span className="title">type/s</span>
                                <span className="pokemon-name">{pokemonDetail.types.join(" - ")}</span>
                            </div>
                                
                               
                                
                        </div>
                        <div className="image-detail-container">
                            <img className="img-profile" src={pokemonDetail.imgProfile !== undefined ? pokemonDetail.imgProfile : profileDefault}></img>
                        </div>
                    </div>

                   
                    <div className="rigth-options-container">
                        <div className="btn-container">
                            <Link className="btn" to='/pokemon'>home </Link>
                        </div>
                    </div>



                </div>

            </div>
        )
    }

    
}
export default PokemonDetail


                
