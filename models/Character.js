const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    img: String,
    moves: Array,
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);