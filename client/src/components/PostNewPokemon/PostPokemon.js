import React, {useEffect, useState} from 'react';
import axios from 'axios'
import{Link}from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../actions';


export function PostPokemon(){
    const [pokemonState, setPokemonState] = useState({
       name:'',
       id:0,
       hp:0,
       attack:0,
       defense:0,
       weight:0,
       height:0,
       typeOne:'',
       typeTwo:''

    })
    const dispatch = useDispatch()
    useEffect(()=>{
        return ()=> dispatch(getPokemons())
    })

    const handleChange = e =>{
        setPokemonState({
            ...pokemonState,
            [e.target.name] : e.target.value
        })
    }
    
     const handleSubmit = e =>{
        e.preventDefault();
       
        async function callPost(){
            if(pokemonState.name === '') return alert("Name ir required")
            const call = await axios.post('http://localhost:3001/pokemons', pokemonState)
        }callPost()
       
        setPokemonState({
            name:'',
            hp:0,
            attack:0,
            defense:0,
            weight:0,
            height:0,
            typeOne:'',
            typeTwo:''
           
        })
        return (<h1>Capaz que todo ok</h1>)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label type='text'>Name</label>
                <input name='name' onChange={handleChange}></input>
                
                <label type='number'>hp</label>
                <input name='hp' onChange={handleChange}></input>
                
                <label type='number'>attack</label>
                <input name='attack' onChange={handleChange}></input>
                
                <label type='number'>defense</label>
                <input name='defense' onChange={handleChange}></input>
                
                <label type='number'>weight</label>
                <input name='weight' onChange={handleChange}></input>
                
                <label type='number'>height</label>
                <input name='height' onChange={handleChange}></input>
                
                <label type='text'>tipo uno</label>
                <input name='typeOne' onChange={handleChange}></input>
                
                <label type='text'>tipo dos</label>
                <input name='typeTwo' onChange={handleChange}></input>
                
                <button type='submit'>Agregar</button>

            </form>
            <Link to= '/'>INICIO</Link>

        </div>
    )
} 

export default PostPokemon