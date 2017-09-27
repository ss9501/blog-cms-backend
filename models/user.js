var mongoose = require('mongoose')


var adminSchema = mongoose.Schema({
    name: String,
    password:String
})


module.exports = mongoose.model('User',adminSchema)