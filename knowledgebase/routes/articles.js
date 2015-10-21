var express = require('express');
var router = express.Router();
var Article = require('../models/article');
//requiring MODEL for article... gives us access to the Article object you created in article.js(model folder)

/* GET users listing. */
//don't need to specify articles because we are in articles route

  //############ READ ONLY ROUTE##################
router.get('/', function(req, res, next) {
  //we want to call Get Articles for list of articles.
  Article.getArticles(function(err,articles){
  		if(err){
  			console.log('errr',err);
  			//if there is an error, we log it out instead of outputting anything
  			}

  			res.json(articles);
  });
});

//req = the request
//res = the result
// next = ?   .... still waiting for answer.

  //############ READ ONLY ROUTE##################
router.get('/:id', function(req, res, next) {
  //we want to call Get Articles for list of articles.
  Article.getArticleById(req.params.id, function(err,article){
  		if(err){
  			console.log('errr',err);
  			//if there is an error, we log it out instead of outputting anything
  			}

  			res.json(article);
  });
});

//have to specify category route.. 

  //############ READ ONLY ROUTE##################
router.get('/category/:category', function(req,res,next){

	Article.getArticlesByCategory(req.params.category, function(err,articles){

		if(err){
			console.log('errrrr', err);
			//if there is an error, we log it out
		}

		res.json(articles);
	});
});

////END OF GET REQUESTS

///// POST REQUESTS


router.post('/', function(req, res, next){
	//get Form Values (cause it'll be in a form)
	var title = req.body.title;
	var category = req.body.category;
	var body = req.body.body;

	//construct new article object
	//making new array (new Article)
	var newArticle = new Article({
		title: title,
		category:category,
		body:body
	});

	//need to call createArticle that we made in model

	Article.createArticle(newArticle,function(err, article){

		if(err){
			console.log(err);
		}
		//now doing redirect.
		res.location('/articles');

		//another redirect.. not quire sure what this be for yet
		res.redirect('/articles');
	});

});

//dealing with routes therefore need REQUEST, RESULT and NEXT(action) for parameters
// send in put request, it catches it..
//id comes form hidden form field
router.put('/',function(req,res,next){

	//using req object here because we are MAKING request here
	var id = req.body.id;
	var data = {
		title: req.body.title,
		category: req.body.category,
		body: req.body.body
	};

	//need id/data parameters because that's what the updateArticle uses.
	Article.updateArticle(id,data, function(err, article){
		//now use RESULT object because we are handling the results.
		//
		// still not sure what next is for..... 
		if(err){
			console.log('errrrU', err);
		}
		res.location('/articles');
		res.redirect('/articles');
	});
});

router.delete('/:id',function(req,res,next){
	//rout is id so it grabs it by id and deletes right one
	// basically, passing the id to this function 
	
	var id = req.params.id;

	//Remove article
	//call article object, connect it to remove function from article.js

	Article.removeArticle(id, function(err,article){
		if(err){
			console.log(err);
		}
		res.location('/articles');
		res.redirect('/articles');
	})
})

module.exports = router;

