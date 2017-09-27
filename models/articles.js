var mongoose = require('mongoose')


var articleSchema =new mongoose.Schema({
    _id:Number,
    title:String,
    author:String,
      content:String,
      describe:String,
      create_time:String,
      label:String,
      alter_time:String,
      type:String,
      access_time:Number
})


module.exports = mongoose.model('Article',articleSchema)