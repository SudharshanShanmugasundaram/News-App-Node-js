const request = require('request-promise');

const API_KEY = "077f01873d5c45a8a47d54a5b16c645c";
var url;
var news =[];

module.exports = function(app){
app.get('/',function(req,res){
  url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
  request({
    url:url,
    json:true
  },function(err,res,body){
    if(body.status === 'ok'){
      news = [];
      for(var i=0;i<body.articles.length;i++){
        article = {
          title : body.articles[i].title,
          description : body.articles[i].description,
          link : body.articles[i].url
        }
        news.push(article);
      }
    }
  }).then(function(){
    res.render('index',{news:news});
  });
  });

  app.get('/:company',function(req,res){
      url = `https://newsapi.org/v2/everything?q=${req.params.company}&from=2018-07-27&to=2018-07-27&sortBy=popularity&apiKey=${API_KEY}`;
      request({
        url:url,
        json:true
      },function(err,res,body){
        if(body.status === 'ok'){
          news = [];
          for(var i=0;i<body.articles.length;i++){
            article = {
              title : body.articles[i].title,
              description : body.articles[i].description,
              link : body.articles[i].url
            }
            news.push(article);
          }
        }
      }).then(function(){
        res.render('index',{news:news});
      });
    });

}
