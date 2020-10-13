const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

/*---------- Public Routes ----------*/
router.get('/', charactersCtrl.index);
router.post('/create', charactersCtrl.create);


/*---------- Protected Routes ----------*/




module.exports = router;