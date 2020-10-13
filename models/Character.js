const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    img: String,
    moves: [{
        name: String,
        damage: Number,
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);