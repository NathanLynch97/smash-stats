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
    let user = req.user._id;
    let name = req.body.name.replace(/ |&|and/g, '');
    const characterData = await fetch(`${rootURL}/name/${name}`).then(res => res.json());
    const moveData = await fetch(`${rootURL}/name/${name}/moves`).then(res => res.json());
    let movesArray = [];
    moveData.forEach(function(move) {
        let obj = {
            name: move.Name,
            damage: move.BaseDamage,
        }
        movesArray.push(obj);
    })
    let characterObj = {
        name: characterData.DisplayName,
        img: characterData.MainImageUrl,
        moves: movesArray,
        user: user,
    }
    const character = await Character.create(characterObj);
    res.status(201).json(character);
}