const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
})

module.exports = mongoose.model('menu', Schema)