angular.module("kB")

.controller('ArtistsCtrl', ['$scope', '$http', function($scope,$http){

	$http.get('/artists').success(function(data){

		$scope.artists = data;

		console.log('! artists', $scope.artists);

	})

	// going to have to add filter by location, automatically
	// then provide additional search params 
	// drop down list populated by all styles 
	// DDL subject matter
	// experience?   I guess 

}]);