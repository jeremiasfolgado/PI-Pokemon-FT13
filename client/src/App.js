import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';

function App() {
  
  return (
    <React.Fragment>
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