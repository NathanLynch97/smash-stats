const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

/*---------- Public Routes ----------*/
router.get('/', charactersCtrl.index);



/*---------- Protected Routes ----------*/




module.exports = router;