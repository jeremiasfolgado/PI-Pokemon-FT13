const {Router} = require('express');
const {getAllPokemons, addPokemon, getPokemonById} = require('../Controllers/poke_control')
const router = Router();


router.get('/', getAllPokemons)
router.get('/:id', getPokemonById)

router.post('/', addPokemon )


/*

GET /pokemons:
Obtener un listado de los primeros 12 pokemons desde pokeapi
Debe devolver solo los datos necesarios para la ruta principal

----------------------

GET /pokemons/{idPokemon}:
Obtener el detalle de un pokemon en particular
Debe traer solo los datos pedidos en la ruta de detalle de pokemon
Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

------------------

GET /pokemons?name="...":
Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
Si no existe ningún pokemon mostrar un mensaje adecuado

--------------
POST /pokemons:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
Crea un pokemon en la base de datos

*/

module.exports = router;