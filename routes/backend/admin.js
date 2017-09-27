const express = require('express')
const router = express.Router()
const user = require('../../models/user.js')
const mongoose = require('mongoose')


const url='mongodb://localhost:27017'
mongoose.connect(url)

router.use((req,res,next)=>{
    if(!req.session['admin_id']&&req.url !='/login'){
        res.redirect('/admin/login')
    }else{
        next()
    }
})
//登录模块，仅获取登录页面
router.get('/login',(req,res)=>{
     res.render('login.ejs',{})
})

//登出模块
router.get('/logout',(req,res)=>{
    req.session['admin_id']=''
    res.json({
        status:'0',
        msg:'',
        result:''
    }).end()
})

//登录模块，ajax提交登录数据
router.post('/login',(req,res)=>{
    var param = {
        name:req.body.username
    }
    
    user.findOne(param,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500),send('database error').end()
        }else{
            if(!data){
                res.status(400).send('user is not exist').end()    
            }else{
                if(data.password!==req.body.password){
                     res.status(400).send('wrong password').end()      
                }else{
                     req.session['admin_id']=1,
               
                   res.status(200).send('success').end()
                } 
            }
        }
    })
})
/*文章管理页面 */
router.use('/article',require('./article.js'))

router.use('/',(req,res)=>{
        res.sendfile('./static/cms/index.html')
})



module.exports = router

