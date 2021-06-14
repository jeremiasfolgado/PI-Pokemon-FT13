import React, {useState} from 'react';
import axios from 'axios'


export function PostPokemon(){
    const [pokemonState, setPokemonState] = useState({
       name:'',
       id:0,
       hp:0,
       attack:0,
       defense:0,
       weight:0,
       height:0

    })

    const handleChange = e =>{
        setPokemonState({
            ...pokemonState,
            [e.target.name] : e.target.value
        })
    }
    
     const handleSubmit = e =>{
        e.preventDefault();
        //async ()=> await axios.post('http://localhost:3001/pokemons', pokemonState)()
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
            height:0
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
                <button type='submit'>Agregar</button>

            </form>
        </div>
    )
} 

export default PostPokemon