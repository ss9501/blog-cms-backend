var express = require('express');
var router = express.Router();
const Articles = require('../../../models/articles.js')

/* post article to the backend*/
router.get('/',(req,res)=>{
 let currentPage = parseInt(req.param('currentPage'))
 let pageSize =parseInt(req.param('pageSize')) 
 let skip = (currentPage-1)*pageSize
 let articlesModel = Articles.find().skip(skip).limit(pageSize)
 articlesModel.sort({_id:-1})
 articlesModel.exec((err,data)=>{
   if(err){
     res.json({
       status:'1',
       msg:err.message
     });
   }else{
     res.json({
       status:'0',
       msg:'',
       result:{
         count:data.length,
         list:data
       }
     })
    }
   });
})

module.exports = router