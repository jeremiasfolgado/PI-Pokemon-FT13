import './App.css';
import React  from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';
// import SearchBar from './components/SearchBar/SearchBar.js';
import PostPokemon from './components/PostNewPokemon/PostPokemon';
import FirstPage from './components/FirstPage/FirstPage';
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header';

function App() {
  
  return (
    <React.Fragment>
      
      {/* <Route path='/pokemon'component={SearchBar}/> */}
      <Route path='/pokemon' component={Header}/>
      <Route exact path='/'component={FirstPage}/>
      <Route exact path='/pokemon/input/form'component={PostPokemon}/>
      <Route exact path='/pokemon' component={Home}/>
      <Route  exact path='/pokemon/:id' component={PokemonDetail}/>
      <Route path='/pokemon'component={Footer}/>
    </React.Fragment>
  );
}

export default App;
