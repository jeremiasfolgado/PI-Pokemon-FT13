const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> {
    res.send('hola esta yendo todo mas o menos bien')
})

module.exports = router;