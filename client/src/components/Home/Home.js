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
import{SearchBar} from '../searchBar/SearchBar.js'
import './Home.css'


export function Home (){
    const statePokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)
    const [typeToOrder, setTypeToOrder]= useState("")
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        if(!statePokemons){
            dispatch(getPokemons())
        }
        
    },[dispatch, statePokemons])


    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const getTypeToOrder = type => setTypeToOrder(type);
    
    //FILTRO POR TIPO PEDIR AYUDA

    if(typeToOrder){
        const orderType= []
        for(let i=0; i < statePokemons.length;i++){
            if(statePokemons[i].types.includes(typeToOrder)) orderType.push(statePokemons[i])
        }
        const result = orderType.slice(indexOfFirstPokemon, indexOfLastPokemon)  
        setTypeToOrder("")
        
        console.log("el result",result)
        
    }
    
    
    if(statePokemons){
        
        // if(typeToOrder){
        //     for(let i=0; i < statePokemons.length;i++){
        //         if(statePokemons[i].types.includes(typeToOrder)) orderType.push(statePokemons[i])
        //     }
        //     const result = orderType.slice(indexOfFirstPokemon, indexOfLastPokemon)  
        //     setTypeToOrder("")
        //     //console.log("el result",result)
            
        // }

        const currentPokemons = statePokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
        //console.log("sin filttro",orderType)
        return (
            <div className="flex-container">
                <div className="home-container">
                    <div className="left-options-container">
                        <OrderByAttack></OrderByAttack>
                        <OrderByName></OrderByName> 
                        <OrderByLocation></OrderByLocation>
                        <OrderByType getTypeToOrder={getTypeToOrder}></OrderByType>
                    </div>
                    <div className="cards-container">
                        <PokemonCard  actualList={currentPokemons}/>
                    </div>
                    <div className="rigth-options-container">
                        <SearchBar/>
                        <Link to='/pokemon/input'>
                            <button>Agrega tu Pokemon</button>    
                        </Link>
                        <Pagination 
                            pokemonPerPage={pokemonPerPage}
                            totalPokemons ={statePokemons.length}
                            paginate={paginate}
                        />
                    </div>
                </div>

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
            
            
    







