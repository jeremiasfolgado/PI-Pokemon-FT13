import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {connect} from 'react-redux'
import  {Link}  from 'react-router-dom'
import {getPokemons} from '../actions/index.js' 

export function Test(props) {
  const [state, setState] = useState([])
  const dispatch = useDispatch()
  const nameRedux = useSelector(state => state.pokemons)
  useEffect(()=>{
    dispatch(getPokemons())
    
    
  },[dispatch])
  console.log(state)
  console.log("este seria el estado redux", nameRedux)

  return (
    <Link to= '/'>
      <div >
        <span>Hola puede que la este pegando en una</span>
      </div>
    </Link>

  );
}

// function mapStateToProps(state){
//   return {
//     pokemons: state
//   }
// }


export default Test