import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import  {Link}  from 'react-router-dom'
import {getPokemons} from '../actions/index.js' 

export function Test(props) {
  //const [state, setState] = useState([])
  const dispatch = useDispatch()
  const statePokemons = useSelector(state => state.pokemons)
  useEffect(()=>{
    dispatch(getPokemons())
    
    
  },[dispatch])
  //console.log(state)
  console.log("este seria el estado redux", statePokemons)

  return (
    <Link to= '/'>
      <div >
        <span>Hola puede que la este pegando en una</span>
      </div>
    </Link>

  );
}



export default Test