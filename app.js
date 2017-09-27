var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consolidate  = require('consolidate')
const cookieSession = require('cookie-session')
const expressStatic = require('express-static')
const mongoose = require('mongoose')
const multer = require('multer')
const multerObj = multer({dest:'./static/upload'})


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',consolidate.ejs)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(multerObj.any())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name:'sess',
  keys:['aaa','bbb','ccc'],
  maxAge:2*3600*1000
}))
/*后台入口*/
app.use('/admin',require('./routes/backend/admin.js'))

/*静态资源入口 */
app.use(express.static(path.join(__dirname, 'static')));




app.listen(8080)
