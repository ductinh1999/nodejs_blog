
//Require
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');//Thư viện tìm kiếm đường dẫn thư mục

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'resources/views'));//Set views folder.

app.use(expressLayouts);//Template Engine


const port = 3000;

app.use(morgan('combined'));//HTTP Logger

app.get('/Home',function(req,res){
    res.locals.title = "Trang Chủ";
    res.render('Home');
});



app.listen(port);