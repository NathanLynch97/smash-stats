const fetch = require('node-fetch');
const Character = require('../models/Character');

const rootURL = "https://api.kuroganehammer.com/api/characters";

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const characters = await Character.find({});
    res.status(200).json(characters);
}

async function create(req, res) {
    let name = req.body.name.replace(/ |&|and/g, '');
    const character = await fetch(`${rootURL}/name/${name}`).then(res => res.json())
    console.log(character);
}