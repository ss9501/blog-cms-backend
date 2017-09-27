var mongoose = require('mongoose')



var counterSchema =new mongoose.Schema({
    '_id': String,
    "sequence_value": Number
})


module.exports = mongoose.model('Counter',counterSchema)