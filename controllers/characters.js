const Character = require('../models/Character');

module.exports = {
    index,
}

async function index(req, res) {
    const characters = await Character.find({});
    res.status(200).json(characters);
}