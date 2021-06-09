const {Type} = require('../db.js')
const axios = require('axios')
const {TYPE_URL} = require('../../constants.js')




async function getAndCreateTypes (req, res, next){
    try {
        const callExtern = await axios.get(`${TYPE_URL}`)
        const typesArray = callExtern.data.results
        for(let i = 0; i < typesArray.length; i++){
            let callOne = await Type.findOrCreate({where: {
                name: typesArray[i].name
            }})
        }
        const result = await Type.findAll()
        res.json(result)
    } catch (error) {
        next(error)
    }

}


module.exports = {
    getAndCreateTypes
}