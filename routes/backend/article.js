var express = require('express');
var router = express.Router();
// const articles = require('../../models/articles.js')
// const counters = require('../../models/counters.js')


router.use('/statistic',require('./article/statistic.js'))
/* post article to the backend */
router.use('/issue',require('./article/issue.js'))

/*get article data */
router.use('/archive',require('./article/archive.js'))


module.exports = router;
