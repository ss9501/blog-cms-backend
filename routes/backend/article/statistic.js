var express = require('express');
var router = express.Router();
const util = require('util');
const Articles = require('../../../models/articles.js')

router.get('/',(req,res)=>{
    console.log(req.query)
    Articles.count({},(err,count)=>{
        if(err){
            res.json({
            status:'1',
            msg:err.message
            });
        }else{
            res.json({
            status:'0',
            msg:'',
            result:count
            })
        }
    })
})
module.exports = router