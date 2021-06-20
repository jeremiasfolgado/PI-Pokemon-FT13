import React from "react";
import './Pagination.css'


export function Pagination({pokemonPerPage, totalPokemons, paginate, currentPage }){
    const pageNumbers = [];
    for(let i= 1; i<= Math.ceil(totalPokemons / pokemonPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className="btn-container">
            <div className="text">
                <span >Page</span>
            </div>

            {pageNumbers.map( number =>(
                <button key={number} className= {currentPage === number ? "btn-sec-active" : "btn-sec"} onClick={()=> paginate(number)} >{number}</button>
                ))}
        </div>
    )
}
                
                

         


export default Pagination;