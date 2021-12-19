const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const initRouter = require('./server/routes/route')
const mysql = require('mysql')
const connection =require('./configs/DBConnection')

const app = express()
const port = process.env.PORT || 3000;

//Static File
app.use(express.static('public'))

//Templet Engine
app.engine('hbs', exphbs( {extname: '.hbs'}));
app.set('view engine', 'hbs')
//Main Pages Routting
app.use('/', initRouter)


app.listen(port, console.info(`This Port Running at: ${port}`));