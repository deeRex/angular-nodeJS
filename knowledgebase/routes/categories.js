var express = require('express');
var router = express.Router();
var Category = require('../models/category');
//requiring MODEL for category... gives us access to the Article object you created in category.js(model folder)

/* GET users listing. */
//don't need to specify categories because we are in categories route
router.get('/', function(req, res, next) {
  //we want to call Get Articles for list of categories.


  //############ READ ONLY ROUTE##################
  Category.getCategories(function(err,categories){
  		if(err){
  			console.log('errr',err);
  			//if there is an error, we log it out instead of outputting anything
  			}

  			res.json(categories);
  });
});

//req = the request
//res = the result
// next = ?   .... still waiting for answer.

  //############ READ ONLY ROUTE##################
router.get('/:id', function(req, res, next) {
  //we want to call Get Articles for list of categories.
  Category.getCategoryById(req.params.id, function(err,category){
  		if(err){
  			console.log('errr',err);
  			//if there is an error, we log it out instead of outputting anything
  			}

  			res.json(category);
  });
});

module.exports = router;
