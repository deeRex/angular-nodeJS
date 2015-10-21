var app = angular.module('kB',['ngRoute']);

//need to set routes

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/artists',{

		templateUrl: 'views/artists.view.html',
		controller: 'ArtistsCtrl'
	}).
	when('/categories',{

		templateUrl: 'views/categories.view.html',
		controller: 'CategoriesCtrl'

	})
	.
	when('/articles',{

		templateUrl: 'views/articles.view.html',
		controller: 'ArticlesCtrl'

	}).
	when('/articles/details/:id',{

		templateUrl: 'views/articles_details.view.html',
		controller: 'ArticlesDetailsCtrl'

	}).
	when('/articles/category/:category',{

		templateUrl: 'views/cat_articles.view.html',
		controller: 'ArticlesCategoryCtrl'

	}).
	when('/categories',{

		templateUrl: 'views/categories.view.html',
		controller: 'CategoriesCtrl'

	}).
	when('/articles/add',{

		templateUrl: 'views/add_article.view.html',
		controller: 'ArticlesCreateCtrl'

	}).
	when('/articles/edit/:id',{

		templateUrl: 'views/edit_article.view.html',
		controller: 'ArticlesEditCtrl'

	}).
	otherwise({redirectTo:'/categories'})
}]);