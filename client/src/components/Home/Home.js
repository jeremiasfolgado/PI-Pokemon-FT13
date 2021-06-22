import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import{Link}from 'react-router-dom'
import {getPokemons} from '../../actions/index.js'
import {PokemonCard} from '../PokemonCard/PokemonCard'
import {Pagination} from '../Pagination/Pagination.js'
import {OrderByName} from '../OrderByName/OrderByName.js'
import {OrderByAttack} from '../OrderByAttack/OrderByAttack.js'
import {OrderByLocation} from '../OrderByLocation/OrderByLocation.js'
import{OrderByType}from '../OrderByType/OrderByType.js'
import{SearchBar} from '../SearchBar/SearchBar.js'
import './Home.css'


export function Home (){
    const statePokemons = useSelector(state => state.pokemons)
    const filterTypePokemon =useSelector(state => state.pokemonsFiltered)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)
   
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        if(!statePokemons){
            dispatch(getPokemons())
        }
        
    },[dispatch, statePokemons])


    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    

    
    
    
    if(statePokemons){
        
        
        //const currentPokemons = filterTypePokemon.length > 0 ? filterTypePokemon.slice(indexOfFirstPokemon, indexOfLastPokemon) : statePokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
        const currentPokemons = !!filterTypePokemon ? filterTypePokemon.slice(indexOfFirstPokemon, indexOfLastPokemon) : statePokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
        
        return (
            <div className="flex-container">
                <div className="render-container">
                    <div className="left-options-container">
                        <OrderByAttack></OrderByAttack>
                        <OrderByName></OrderByName> 
                        <OrderByLocation></OrderByLocation>
                        <OrderByType ></OrderByType>
                    </div>
                    <div className="cards-container">
                        <PokemonCard  actualList={currentPokemons.length !== 0 ? currentPokemons : alert("No pokemons of that type were found")}/>
                    </div>
                    <div className="rigth-options-container">
                        <SearchBar/>
                        
                        <div className="btn-container">
                            <Link to='/pokemon/input/form' >
                            <button className="btn">
                                Add Pokemon   
                            </button>

                            </Link>
                        </div>

                        <Pagination 
                            pokemonPerPage={pokemonPerPage}
                            totalPokemons ={ !!filterTypePokemon ? filterTypePokemon.length : statePokemons.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>

            </div>


            )
    }
    return (
            <div className="loading-msg">
                <h1>Loading ...</h1>
            </div>
    )
}
            
export default Home;
            
            
    







