import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom'
import Test from './components/prueba.js'

function App() {
  
  return (
    <React.Fragment>
      <Route component={Test}/>
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