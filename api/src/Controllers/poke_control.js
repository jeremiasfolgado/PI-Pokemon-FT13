
const {Pokemon} = require('../db.js')
const {Type} = require('../db.js')
const {pokemon_type} = require('../db.js')
const axios = require('axios')
const {BASE_URL} = require('../../constants.js')
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");





async function getAllPokemons (req, res, next){
    const result = [];
    const pokemonsDb = await Pokemon.findAll()
    const typesDb = await pokemon_type.findAll()
   


    for(let i = 0; i < pokemonsDb.length;i++){
       pokemonsDb[i].dataValues.types = []
       typesDb.filter(pType =>  {
           if(pType.dataValues.pokemonId === pokemonsDb[i].dataValues.id){ 
                let type = pType.dataValues.typeName  
                pokemonsDb[i].dataValues.types.push(type)
            }
        })
    }
                
               
       
    
    let {name, from} = req.query

    
   
    
    if(name){
        try {
            
            name = name.toLowerCase()
            const callDb = await Pokemon.findOne({where: {name: {[Op.iLike]:name}}})
           
            if(callDb) return res.json(callDb)   
            const callQuery = await axios.get(`${BASE_URL}/${name}`)
           
            const pokemon = {
                name: callQuery.data.name,
                id: callQuery.data.id, 
                attack: callQuery.data.data.stats[1].base_stat,
                img: callQuery.data.sprites.other.dream_world.front_default,
                types: callQuery.data.types.map(type => type.type.name)
                 
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
                attack: callTwo.data.stats[1].base_stat,
                img: callTwo.data.sprites.other.dream_world.front_default,
                types: callTwo.data.types.map(type => type.type.name)
               })
          }
      } 
      catch (error) {
        if(error.response?.status === 404){
            return res.sendStatus(404)
        }
        res.status(500).json({error: 'Error grave'})
      }

      if(from){
          if(from === "api") return res.json(result);
          return res.json(pokemonsDb)
      }
     
      return res.json(result.concat(pokemonsDb))
}


            
      

//Trae un solo pokemon por id

//COMPLETA LA RUTA BY ID

async function getPokemonById (req, res, next){
    const id = req.params.id
    if(isNaN(id)){
        const callDb = await Pokemon.findOne({where: {id: id}})
        const typesDb = await pokemon_type.findAll()
        const pokemon = {...callDb.dataValues, types : []}
        
        for(let i = 0; i < typesDb.length; i++){
            if(typesDb[i].dataValues.pokemonId === callDb.dataValues.id){ 
                pokemon.types.push( typesDb[i].dataValues.typeName)
            }
        }
        
        
        if(callDb) return res.json(pokemon)
    }
    if(!isNaN(id)){
        try {
            const callExtern = await axios.get(`${BASE_URL}/${id}`)
            console.log("hola estoy en la llamada", )
            const pokemon = {
                name: callExtern.data.name,
                 id: callExtern.data.id, 
                 hp: callExtern.data.stats[0].base_stat,
                 attack: callExtern.data.stats[1].base_stat,
                 defense: callExtern.data.stats[2].base_stat,
                 speed: callExtern.data.stats[5].base_stat,
                 weight: callExtern.data.weight,
                 height: callExtern.data.height,
                 img: callExtern.data.sprites.other.dream_world.front_default,
                 imgProfile: callExtern.data.sprites.other["official-artwork"].front_default,
                 types: callExtern.data.types.map(type => type.type.name)
            }
            return res.json(pokemon)
        } catch (error) {
            if(error.response?.status === 404){
                return res.sendStatus(404)
            }
            res.status(500).json({error: 'Error grave'})
            
        }
    }
}

    
    
    
    

           
            
// Agrega pokemones con la indo que trae body
            


function addPokemon(req, res, next){
    const newId = uuidv4()
    const newPokemon = {...req.body, id: newId, name: req.body.name.toLowerCase() };
    
    console.log('este seria el que tendria que conectar',newPokemon)
    if(!newPokemon){
        return res.send({
            error: 500,
            message: 'La info no es correcta'
        })
    }
    Pokemon.create(newPokemon)
        .then(async pokemon =>{ 
            if(newPokemon.typeOne){
                console.log("entre", newPokemon.typeOne, newPokemon.typeTwo)
                
                const setTypePokemon = await pokemon.setTypes(newPokemon.typeTwo ? [newPokemon.typeOne, newPokemon.typeTwo] : newPokemon.typeOne )
                console.log("este es types", setTypePokemon[0][0])
            } 
            return res.send(pokemon)
        })
        .catch(err => next(err))

}
        
module.exports = {
    getAllPokemons,
    addPokemon,
    getPokemonById
}
    
    
    





    
    





