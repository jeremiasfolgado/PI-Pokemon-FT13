
const {Pokemon} = require('../db.js')
const axios = require('axios')
const {BASE_URL} = require('../../constants.js')
const { v4: uuidv4 } = require('uuid');


//traer los primero doce pokemons

function getAllPokemons (req, res, next){
    const pokemonsApi = axios.get(`${BASE_URL}`)
    const pokemosDb = Pokemon.findAll()
    Promise.all([pokemonsApi, pokemosDb])
    
            .then(response =>{
                let [pokemonApiResponse, pokemonDbResponse] = response
                
                return res.send(pokemonDbResponse.concat(pokemonApiResponse.data.results.slice(0,12)))
            })
            .catch(error => next(error))
}

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
    addPokemon
}