const {Router} = require('express');
const router = Router();
const {getAndCreateTypes} = require('../Controllers/types.js')

router.get('/', getAndCreateTypes)

module.exports = router;