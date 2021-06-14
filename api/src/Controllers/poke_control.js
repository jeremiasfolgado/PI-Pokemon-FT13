
const {Pokemon} = require('../db.js')
const axios = require('axios')
const {BASE_URL} = require('../../constants.js')
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");
//const { response } = require('express');


//traer los primero doce pokemons





//LISTO VIEJA EL GET POKEMON




async function getAllPokemons (req, res, next){
    const result = [];
    const pokemonsDb = await Pokemon.findAll()
    
    let name = req.query.name
    
    if(name){
        try {
            name = name.toLowerCase()
            const callDb = await Pokemon.findOne({where: {name: {[Op.iLike]:name}}})
            if(callDb) return res.json(callDb)   
            const callQuery = await axios.get(`${BASE_URL}/${name}`)
            const pokemon = {
                name: callQuery.data.name,
                 id: callQuery.data.id, 
                 hp: callQuery.data.stats[0].base_stat,
                 attack: callQuery.data.stats[1].base_stat,
                 defense: callQuery.data.stats[2].base_stat,
                 speed: callQuery.data.stats[5].base_stat,
                 weight: callQuery.data.weight,
                 height: callQuery.data.height
            }
            return res.json(pokemon)
        } catch (error) {
            next(error)
        }
    }
    try {
        const callOne = await axios.get(`${BASE_URL}?limit=40`)
        const listCallOne = callOne.data.results
        for(let i = 0; i < listCallOne.length; i++){
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
        if(error.response?.status === 404){
            return res.sendStatus(404)
        }
        res.status(500).json({error: 'Error grave'})
      }
      return res.json(result.concat(pokemonsDb))
}
            
      

//Trae un solo pokemon por id

//COMPLETA LA RUTA BY ID

async function getPokemonById (req, res, next){
    const id = req.params.id
    if(isNaN(id)){
        const callDb = await Pokemon.findOne({where: {id: id}})
        if(callDb) return res.json(callDb)
    }
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
            if(error.response?.status === 404){
                return res.sendStatus(404)
            }
            res.status(500).json({error: 'Error grave'})
            //console.log('estoy en el back',error)
            //res.status(404).send('Sorry cant find that!');
        }
    }
}

    
    
    
    

           
            
// Agrega pokemones con la indo que trae body
            


function addPokemon(req, res, next){
    const newId = uuidv4()
    
    const newPokemon = {...req.body, id: newId, name: req.body.name.toLowerCase() };
    console.log(newPokemon)
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
    
    
    





    
    





