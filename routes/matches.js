const express = require('express');
const router = express.Router();
const matchesCtrl = require('../controllers/matches');

router.post('/:id/matches', matchesCtrl.create);
router.delete('/:id/matches/:nid', matchesCtrl.delete);
router.put('/:id/matches/:nid', matchesCtrl.update);


/*---------- Protected Routes ----------*/




module.exports = router;