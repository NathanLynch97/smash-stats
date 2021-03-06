const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    description: String,
}, {
    timestamps: true
})

const matchSchema = new Schema({
    enemy: String,
    yourStocks: Number,
    enemyStocks: Number,
}, {
    timestamps: true
})

const characterSchema = new Schema({
    name: String,
    img: String,
    moves: [{
        name: String,
        damage: String,
    }],
    notes: [noteSchema],
    matches: [matchSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);