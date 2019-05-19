const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mern = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }
});

module.exports = mongoose.model('mern', mern);