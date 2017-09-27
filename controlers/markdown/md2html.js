const express = require('express')
const router = express.Router()

const md = require('markdown-it')();
router.get('/markdown',(req,res)=>{
    res.send(md.render("# adfad\n## fdsfdsafds\n```\ndfasa\n````\n![李宗盛](https://ooo.0o0.ooo/2017/06/30/5955eae17ede2.jpg)")).end()
})

module.exports = router

