import React from 'react';
import {Link} from 'react-router-dom'
import './PokemonCard.css'

export function  PokemonCard({actualList}){
    
    
    return (
       <div>
           {
              actualList && actualList.map(pokemon => (
                       <div className="card-container">
                           <div className="id-picture-container">
                               <div className="img-container">
                                    <img src={pokemon.img} className="profile-image"></img>   
                               </div>
                               <div className="shadow"></div>
                           </div>
                            <ul>
                                <li key= {pokemon.id}>
                                    <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                                </li>
                                <li>{pokemon.types.join(" ")}</li>
                            </ul>
                       </div>

                   ))
                }

                   
  
           
       </div>
    )
}

export default PokemonCard;