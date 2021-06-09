import './App.css';
import React , {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  
  return (
    <div className="App">
      {pokemonData}
    </div>
  );
}

export default App;
// PRUEBA PARA TRAER LOS POKE POKE
// const [pokemons, setPokemons] = useState([])
// useEffect(()=>{
//   axios.get('http://localhost:3001/pokemons')
//     .then(pokemon => setPokemons(pokemon.data))
// },[])
// let pokemonData = pokemons.map(pokemon => {
//   return(
//     <div>
//       <span>{pokemon.name}</span>
//     </div>
//   )
// })