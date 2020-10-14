const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const notes = require('../controllers/notes');

router.post('/:id/notes', notesCtrl.create);
router.delete('/:id/notes/:nid', notesCtrl.delete);
router.put('/:id/notes/:nid', notesCtrl.update);


/*---------- Protected Routes ----------*/




module.exports = router;