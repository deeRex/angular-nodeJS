var mongoose = require('mongoose');
//require mongoose module
//require a Schema
var categorySchema = mongoose.Schema({

	name:{
		type:String,
		index:true,
		required:true
	},
	description:
	{
		type:String
	}
});

var Category = module.exports = mongoose.model('Category',categorySchema);

//now we can use Article object in any methods we create in the model
// we can access it outside of this file now

//Methods: workflow -> routfiles we call methods in categoryjs (model) and in modle we call mongoose functions like find/save/wever

//getAllArticles
module.exports.getCategories = function(callback){
	//function takes call back so we can create and use it in route file and pass it to THIS function/method
	Category.find(callback); //mongoose command
	//will get all categorys in db 
}

//get Category By ID
module.exports.getCategoryById = function(id, callback){
	Category.findById(id,callback); // mong command
}

//Get Category articles 

module.exports.getArticlesByCategory = function(category, callback){
	var query = {category: category};
	//this just sets query params for mongo.. like when you deleted everything in the typo category section .remove({title = "whatever"})
	//then pass find the QUERY so it returns correct results lol
	// Category.find(query,callback);

	Category.find(query,callback);
}

module.exports.createCateogry = function(newCategory, callback){
	newCategory.save(callback); // mong command
}

//END OF READ ONLY ROUTE QUERIES