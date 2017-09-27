var express = require('express');
var router = express.Router();
const util = require('util');
const Articles = require('../../../models/articles.js')
const counters = require('../../../models/counters.js')

/* post article to the backend*/
router.post('/',(req,res)=>{
  
  /*存储||更新数据 */
  function saveArticle(obj,collection){
    if(!obj._id){
      counters.findByIdAndUpdate('articleid', {$inc:{sequence_value:1}}, function (err, data) {
            if (err) return handleError(err);
            obj._id=data.sequence_value
            console.log(obj)
            var articles = new collection(obj)
            articles.save(function(err){
                if(err){
                  console.log(err);
                }else{
                  console.log('成功插入数据');
                }
              })
          });
    }else{
      // collection.findOne({_id:obj._id},function(err,doc){
      //   console.log(doc) 
      // })
      //更新已存在的数据
      collection.update({_id:obj._id},{$set:obj},function(err){
        if(err){
          console.log(err)
        }else{
          console.log('ok')
        }
      })
    }
  }
  
  
    //console.log(util.inspect(JSON.parse(chunk), true))
  
    saveArticle(req.body,Articles)

  res.status(200).send('ok')
});

module.exports = router


 /*_id自增 */
  // function setId(collection,id,){
  //         counters.findByIdAndUpdate('articleid', {$inc:{sequence_value:1}}, function (err, data) {
  //           if (err) return handleError(err);
  //           autoId=data.sequence_value
  //           console.log(autoId)
  //         });   
  // }