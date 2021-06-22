import React from 'react';
import {Link} from 'react-router-dom'
import './PokemonCard.css'
import profileDefault from '../../resources/profile-default.png'


export function  PokemonCard({actualList}){
    
   
    return (
       <div className="pokemons-cards-cotainer">
           {
              actualList && actualList.map(pokemon => (
                  
                  <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id} className="link card-container">
                           <div  className="picture-container">
                               <img src={pokemon.img !== undefined ? pokemon.img : profileDefault} className="profile-image"></img>   
                            
                           </div>
                              
                           <div className="description-container">
                                <span className="card-title">{pokemon.name}</span>
                                <span className="types">Types</span>
                                <span className="pokemon-types">{pokemon.types.join(" - ")}</span>
                           </div>
                  </Link>

                                
                               
                      
                  

                   ))
                }

                   
  
           
       </div>
    )
}

export default PokemonCard;




/*
 <div className="card-container" >
                           <div className="id-picture-container">
                               <div className="img-container">
                                    <img src={pokemon.img} className="profile-image"></img>   
                               </div>
                               <div className="shadow"></div>
                           </div>
                           <div className="description-container">
                                <ul>
                                    <li key= {pokemon.id}>
                                        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                                    </li>
                                    <li>{pokemon.types.join(" ")}</li>
                                </ul>
                           </div>
                               
                       </div>
*/