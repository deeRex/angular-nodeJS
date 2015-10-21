var mongoose = require('mongoose');
//require mongoose module
//require a Schema
var articleSchema =  mongoose.Schema({

	title:{
		type:String,
		index:true,
		required:true
	},
	body: {
		type:String,
		required: true
	},
	category:{
		type:String,
		index: true,
		required: true
	},

	date:{
		type:Date,
		default:Date.now
	}
});

var Article = module.exports = mongoose.model('Article', articleSchema);

//now we can use Article object in any methods we create in the model
// we can access it outside of this file now

//Methods: workflow -> routfiles we call methods in articlejs (model) and in modle we call mongoose functions like find/save/wever

//getAllArticles
module.exports.getArticles = function(callback){
	//function takes call back so we can create and use it in route file and pass it to THIS function/method
	Article.find(callback); //mongoose command
	//will get all articles in db 
}

//get Articles By ID
module.exports.getArticleById = function(id, callback){
	Article.findById(id,callback); // mong command
}

//Get Category articles 

module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	//this just sets query params for mongo.. like when you deleted everything in the typo article section .remove({title = "whatever"})
	//then pass find the QUERY so it returns correct results lol
	Article.find(query, callback);
}


//END OF READ ONLY ROUTE QUERIES


//######### WRITE QUERY ############

module.exports.createArticle = function(newArticle, callback){

	newArticle.save(callback);

}


module.exports.updateArticle = function(id,data,callback)
{

	//we want to get the data and put the fields into variables
	var title = data.title;
	var body = data.body;
	var category = data.category;


	//now we need query
	//want to match id of article to the id that we pass in (function)
	var query = {_id:id};

	//instead of calling 'callback', we are writing the function 
	//because we need to keep going in order to make a successful update
	//so we pass in err and the Article object

	Article.findById(id, function(err, article){
		if(!article){
			return next(new Error('Could not load article'));

		}
		else{
			//these come from variables set up thur ^^^
			article.title = title;
			article.body = body;
			article.category = category;

			article.save(callback);

			//then save it.
			//you could also use the update method.
		}
	});
}

// remove method

module.exports.removeArticle = function(id, callback)
{
	//DON'T FORGET TO FIND THE ARTICLE lol...
	
	Article.find({_id:id}).remove(callback);
}