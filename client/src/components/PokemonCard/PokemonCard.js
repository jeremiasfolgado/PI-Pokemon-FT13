import React from 'react';
import {Link} from 'react-router-dom'

export function  PokemonCard({actualList}){
    return (
        <div>
            <ul>
                {
                   actualList && actualList.map(pokemon => (
                        <li key= {pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PokemonCard;