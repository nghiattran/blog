'use strict';

angular.module('myblogApp')
  .controller('FeedController', function ($scope) {
    
    $scope.goodReads = [
    	{
    		'title':'Deal with users authentication in an AngularJS web app',
    		'link': 'http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app/'
    	},
    	{
    		'title':'Creating beautiful REST APIs with Flask',
    		 'link':'http://pycoder.net/bospy/presentation.html',
    	},
    	{
    		'title':'The one side project per year challenge',
    		'link': 'https://medium.com/life-learning/the-one-side-project-per-year-challenge-fa3c64a48da6#.xjowxyhfr'
    	},
    	{
    		'title':'Creating packages with Bower', 
    		'link': 'http://bower.io/docs/creating-packages/',
    	},
    	{
    		'title':'How to submit a package to PyPI', 
    		'link': 'http://peterdowns.com/posts/first-time-with-pypi.html'
    	},
    	{
    		'title':'Assessing employee performance', 
    		'link': 'https://medium.com/javascript-scene/assessing-employee-performance-1a8bdee45c1a#.7svl1312y'
    	},
    	{
    		'title':'Coding is boring, unless…', 
    		'link': 'https://blog.enki.com/coding-is-boring-unless-4e496720d664#.e3myxlaze'
    	}
    ];
  });
