
const {Pokemon} = require('../db.js')
const axios = require('axios')
const {BASE_URL} = require('../../constants.js')
const { v4: uuidv4 } = require('uuid');
//const { response } = require('express');


//traer los primero doce pokemons
async function getAllPokemons (req, res, next){
    const result = [];
    const pokemonsDb = await Pokemon.findAll()
    try {
        const callOne = await axios.get(`${BASE_URL}`)
        const listCallOne = callOne.data.results.slice(0,12)
        for(let i = 0; i < listCallOne.length; i++){
            //console.log(listCallOne[i].url)
             let callTwo = await axios.get(`${listCallOne[i].url}`)
             result.push({
                 name: callTwo.data.name,
                 id: callTwo.data.id, 
                 hp: callTwo.data.stats[0].base_stat,
                 attack: callTwo.data.stats[1].base_stat,
                 defense: callTwo.data.stats[2].base_stat,
                 speed: callTwo.data.stats[5].base_stat,
                 weight: callTwo.data.weight,
                 height: callTwo.data.height
                })
           }
       } 
       catch (error) {
           next(error)
       }
       //console.log(pokemonsDb)
       res.json(result.concat(pokemonsDb))
}

//Trae un solo pokemon 
async function getPokemonById (req, res, next){
    const id = req.params.id
    console.log(id)
    
    if(!isNaN(id)){
        try {
            const callExtern = await axios.get(`${BASE_URL}/${id}`)
            const pokemon = {
                name: callExtern.data.name,
                 id: callExtern.data.id, 
                 hp: callExtern.data.stats[0].base_stat,
                 attack: callExtern.data.stats[1].base_stat,
                 defense: callExtern.data.stats[2].base_stat,
                 speed: callExtern.data.stats[5].base_stat,
                 weight: callExtern.data.weight,
                 height: callExtern.data.height
            }
            
            return res.json(pokemon)
        } catch (error) {
            next(error)
            
        }

    }
}


// Agrega pokemones por body
function addPokemon(req, res, next){
    const newId = uuidv4()
    const newPokemon = {...req.body, id: newId};
    if(!newPokemon){
        return res.send({
            error: 500,
            message: 'La info no es correcta'
        })
    }
    Pokemon.create(newPokemon)
        .then(pokemon => res.send(pokemon))
        .catch(err => next(err))
}
        
module.exports = {
    getAllPokemons,
    addPokemon,
    getPokemonById
}
    
    
    





    
    





