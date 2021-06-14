import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import{Link}from 'react-router-dom'
import {getPokemons} from '../../actions/index.js'
import {PokemonCard} from '../PokemonCard/PokemonCard'
import {Pagination} from '../Pagination/Pagination.js'

export function Home (){
    const statePokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)
    
    
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!statePokemons)dispatch(getPokemons())
    },[dispatch, statePokemons])


    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    if(statePokemons){
        const currentPokemons = statePokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
        return (
            <div>
                <PokemonCard  actualList={currentPokemons}/>
                <Pagination 
                    pokemonPerPage={pokemonPerPage}
                    totalPokemons ={statePokemons.length}
                    paginate={paginate}
                />
                <Link to='/pokemon/input'>
                   <button>Agrega tu Pokemon</button>    
                </Link>
            </div>
            )
        }
        return (
            <div>
                <h1>Cargando ...</h1>
            </div>
        )
}
            
export default Home;
            
            
    







