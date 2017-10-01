const express = require('express')
const router = express.Router()
const Articles = require('../../../models/articles.js')
const Convert =require('../../../controlers/md2html.js')

router.get('/',(req,res)=>{
    let articlesModel = Articles.find({},['_id','title','author','create_time','content'])
    articlesModel.sort({_id:-1})
    articlesModel.exec((err,doc)=>{
      if(err){
        res.json({
          status:'1',
          msg:err.message
        });
      }else{
        //cut
        let data = Convert(doc,true)
        res.render('homePage.ejs',{'data':data})
      }
   });
})

module.exports = router