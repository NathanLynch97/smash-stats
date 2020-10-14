const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

/*---------- Public Routes ----------*/
router.get('/', charactersCtrl.index);
router.get('/:id', charactersCtrl.show);
router.post('/', charactersCtrl.create);
router.delete('/:id', charactersCtrl.delete);



/*---------- Protected Routes ----------*/




module.exports = router;