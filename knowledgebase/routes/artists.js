var express = require('express');
var router = express.Router();
var Artist = require('../models/artist');


router.get('/', function(req, res, next) {

	Artist.getArtists(function(err, artists){

		if(err){
			console.log("err getArtists", err);
		}

		res.json(artists);

	});

});


module.exports = router;