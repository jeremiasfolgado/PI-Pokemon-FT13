import React, {useEffect, useState} from 'react';
import axios from 'axios'
import{Link}from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../actions';
import './PostNewPokemon.css'


export function PostPokemon(){
    const typeList = useSelector(state => state.types)
    const [pokemonState, setPokemonState] = useState({
       name:'',
       id:0,
       hp:0,
       attack:0,
       defense:0,
       speed:0,
       weight:0,
       height:0,
       typeOne:'',
       typeTwo:''

    })
    const dispatch = useDispatch()
    useEffect(()=>{
        return ()=> {
            dispatch(getPokemons())
            
        }

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
            if(pokemonState.name === '' || pokemonState.typeOne === '') return alert("This value is required")
            const call = await axios.post('http://localhost:3001/pokemons', pokemonState)

        }callPost()
       
        setPokemonState({
            name:'',
            hp:0,
            attack:0,
            defense:0,
            weight:0,
            speed:0,
            height:0,
            typeOne:'',
            typeTwo:''
           
        })
       
        
    }

    return (
        <div className="flex-container">
            <div className="render-container">
                <div  className="main-description-container">
                    <div className="post-container" >
                        <form onSubmit={handleSubmit} className="inputs-container">
                            <div className="row-input-container">
                                <label className="title" type='text'>name: </label>
                                <input className="input-post" placeholder="insert name" name='name' onChange={handleChange}></input>
                                
                                <label className="title" type='number'>hp: </label>
                                <input className="input-post" name='hp' placeholder="insert value" onChange={handleChange}></input>
                            </div>

                            <div className="row-input-container">
                                <label className="title" type='number'>attack: </label>
                                <input className="input-post" name='attack' placeholder="insert value" onChange={handleChange}></input>
                                
                                <label className="title" type='number'>defense: </label>
                                <input className="input-post" name='defense' placeholder="insert value" onChange={handleChange}></input>
                            </div>

                            <div className="row-input-container">
                                <label className="title" type='number'>speed: </label>
                                <input className="input-post" name='speed' placeholder="insert value" onChange={handleChange}></input>
                                
                                <label className="title" type='number'>weight: </label>
                                <input className="input-post" name='weight' placeholder="insert value" onChange={handleChange}></input>
                                
                                <label className="title" type='number'>height: </label>
                                <input className="input-post" name='height' placeholder="insert value" onChange={handleChange}></input>
                            </div>

                            <div className="row-input-container">
                                <label className="title" type='text'>first type: </label>
                                <select className="select-type" name='typeOne' onChange={handleChange}> 
                                    {typeList && typeList.map(type =>  (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                
                                
                                <label className="title" type='text'>second type: </label>
                                <select className="select-type" name='typeTwo' onChange={handleChange}> 
                                    {typeList && typeList.map(type =>  (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>


                                

                            
                            
                            
                            
                            <button className="btn-submit" type='submit'>CREATE POKEMON</button>

                        </form>
                    </div>

                </div>
                
                <div className="rigth-options-container">
                    <div className="btn-container">
                    <Link className="btn" to= '/pokemon'>HOME</Link>
                    </div>
                </div>
                

            </div>

        </div>
    )
} 

export default PostPokemon