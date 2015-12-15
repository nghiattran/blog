'use strict';

angular.module('myblogApp')
  .controller('ArticleController', function ($scope) {
  
  	$scope.posts = [
  		{
  			'title': 'First Post',
  			'link': 'https://github.com/nghiattran/blog',
  			'snippet': 'snippet snippet snippet snippet snippet snippet snippet snippet '
  		},{
  			'title': 'Second Post',
  			'link': 'https://nodejs.org/en/foundation/',
  			'snippet': 'snippet snippet snippet snippet snippet snippet snippet snippet '
  		},{
  			'title': 'Third Post',
  			'link': 'https://nodejs.org/en/foundation/',
  			'snippet': 'snippet snippet snippet snippet snippet snippet snippet snippet '
  		}];
  });
