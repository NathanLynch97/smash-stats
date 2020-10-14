const Character = require('../models/Character');

module.exports = {
    create,
    delete: deleteOne,
    update,
}

async function create(req, res) {
    const character = await Character.findById(req.params.id);
    character.notes.push(req.body);
    await character.save();
    res.status(201).json(character);
}

async function deleteOne(req, res) {
    let character = await Character.findById(req.params.id);
    const noteIndex = character.notes.findIndex(
        (note) => String(note._id) === req.params.nid
    );
    character.notes.splice(noteIndex, 1);
    character = await character.save();
    res.status(200).json(character);
}

async function update(req, res) {
    let character = await Character.findById(req.params.id);
    const noteIndex = character.notes.findIndex(
        (note) => String(note._id) === req.params.nid
    );
    character.notes.splice(noteIndex, 1, req.body);
    character = await character.save();
    res.status(200).json(character);
}