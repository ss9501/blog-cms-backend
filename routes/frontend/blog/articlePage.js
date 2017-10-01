const express = require('express')
const router = express.Router()
const Articles = require('../../../models/articles.js')
const Convert =require('../../../controlers/md2html.js')

router.use('/',(req,res)=>{
    let articlesModel = Articles.find({_id:req.query._id},['title','author','create_time','content'])
    articlesModel.exec((err,doc)=>{
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
                let data = Convert(doc,false)
                res.render('articlePage.ejs',{'data':data})
            }
   });   
})

module.exports = router