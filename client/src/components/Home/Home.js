import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import{Link}from 'react-router-dom'
import {getPokemons} from '../../actions/index.js'
import {PokemonCard} from '../PokemonCard/PokemonCard'
import {Pagination} from '../Pagination/Pagination.js'
import {OrderByName} from '../OrderByName/OrderByName.js'
import {OrderByAttack} from '../OrderByAttack/OrderByAttack.js'
import {OrderByLocation} from '../OrderByLocation/OrderByLocation.js'


export function Home (){
    const statePokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        if(!statePokemons){
            dispatch(getPokemons())
        }
        //statePokemons.sort((a,b)=> a.name - b.name)
    },[dispatch, statePokemons])


    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    //const orderByPokemonAttackAs = () =>statePokemons.sort((a,b)=> a.attack - b.attack) 
    
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
                <OrderByName></OrderByName> 
                <OrderByAttack></OrderByAttack>
                <OrderByLocation></OrderByLocation>

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
            
            
    







