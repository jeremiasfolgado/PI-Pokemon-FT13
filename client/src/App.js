import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';
import SearchBar from './components/searchBar/SearchBar.js';
import PostPokemon from './components/PostNewPokemon/PostPokemon';
import FirstPage from './components/FirstPage/FirstPage';

function App() {
  
  return (
    <React.Fragment>
      
      {/* <Route path='/pokemon'component={SearchBar}/> */}
      <Route exact path='/'component={FirstPage}/>
      <Route exact path='/pokemon/input'component={PostPokemon}/>
      <Route exact path='/pokemon' component={Home}/>
      <Route  path='/pokemon/:id' component={PokemonDetail}/>
    </React.Fragment>
  );
}

export default App;
