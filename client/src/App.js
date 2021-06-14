import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';
import SearchBar from './components/searchBar/SearchBar.js';
import PostPokemon from './components/PostNewPokemon/PostPokemon';

function App() {
  
  return (
    <React.Fragment>
      <SearchBar/>
      <Route exact path='/pokemon/input'component={PostPokemon}/>
      <Route exact path='/' component={Home}/>
      <Route  path='/pokemon/:id' component={PokemonDetail}/>
    </React.Fragment>
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