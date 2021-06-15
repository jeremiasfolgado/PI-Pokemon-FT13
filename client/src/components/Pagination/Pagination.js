import React from "react";


export function Pagination({pokemonPerPage, totalPokemons, paginate }){
    const pageNumbers = [];
    for(let i= 1; i<= Math.ceil(totalPokemons / pokemonPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul>
                {pageNumbers.map( number =>(
                    <li key={number}>
                        <button onClick={()=> paginate(number)} >{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagination;