const express = require('express');
const request = require('request');
var newsController = require('./controllers/newsController');

const app =express();

app.set('view engine','ejs');
app.use(express.static('./public'));

newsController(app);

app.listen(5000);
console.log("This is port 5000");
