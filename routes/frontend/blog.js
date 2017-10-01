const express = require('express')
const router = express.Router()


router.get('/article',require('./blog/articlePage.js'))

router.get('/',require('./blog/homePage.js'))

module.exports = router