//connected to mongoDB
var mongoose = require("mongoose");


//define data schema
var artistSchema = mongoose.Schema({

	fname:{
		type: String,
		required: true,
		index: true
	},
	lname:{

		type:String,
		required: true,

	},
	shop:{

		type:String,
		required: true,
	},

	style:{

		type:String,
		required: true,
		
	},
	subject:{

		type:String,
		required: true,
	},
	experience: {

		type: Number,
		required: true
	}


});

//Db data Object  instance of schema;

var Artist = module.exports = mongoose.model('Artist', artistSchema);

module.exports.getArtists = function(callback){

	Artist.find(callback);

}