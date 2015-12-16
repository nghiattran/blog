"use strict";angular.module("myblogApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$routeProvider","$stateProvider","$locationProvider","$urlRouterProvider",function(a,b,c,d){d.otherwise("/"),b.state("main",{url:"/",templateUrl:"views/wall.html",controller:"ArticleController"})}]),angular.module("myblogApp").controller("FeedController",["$scope",function(a){a.goodReads=[{title:"Deal with users authentication in an AngularJS web app",link:"http://blog.brunoscopelliti.com/deal-with-users-authentication-in-an-angularjs-web-app/"},{title:"Creating beautiful REST APIs with Flask",link:"http://pycoder.net/bospy/presentation.html"},{title:"The one side project per year challenge",link:"https://medium.com/life-learning/the-one-side-project-per-year-challenge-fa3c64a48da6#.xjowxyhfr"},{title:"Creating packages with Bower",link:"http://bower.io/docs/creating-packages/"},{title:"How to submit a package to PyPI",link:"http://peterdowns.com/posts/first-time-with-pypi.html"},{title:"Assessing employee performance",link:"https://medium.com/javascript-scene/assessing-employee-performance-1a8bdee45c1a#.7svl1312y"},{title:"Coding is boring, unless…",link:"https://blog.enki.com/coding-is-boring-unless-4e496720d664#.e3myxlaze"}]}]),angular.module("myblogApp").controller("ArticleController",["$scope",function(a){a.posts=[{title:"First Post",link:"https://github.com/nghiattran/blog",snippet:"snippet snippet snippet snippet snippet snippet snippet snippet "},{title:"Second Post",link:"https://nodejs.org/en/foundation/",snippet:"snippet snippet snippet snippet snippet snippet snippet snippet "},{title:"Third Post",link:"https://nodejs.org/en/foundation/",snippet:"snippet snippet snippet snippet snippet snippet snippet snippet "}]}]),angular.module("myblogApp").run(["$templateCache",function(a){a.put("views/feed.html",'<div ng-controller="FeedController"> <p class="good_reads_title">Good reads</p> <ul> <li class="article" ng-repeat="article in goodReads"> <a target="_blank" href="{{article.link}}">{{article.title | limitTo:23}} ...</a> </li> </ul> </div>'),a.put("views/header.html",'<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner"> <div class="container"> <div class="navbar-header"> <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="http://blog.nghiattran.com/" class="navbar-brand">Home</a> </div> <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"> <ul class="nav navbar-nav"> <li> <a target="_blank" href="http://profile.nghiattran.com/">About me</a> </li> <!-- <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">Action</a></li>\n            <li><a href="#">Another action</a></li>\n            <li><a href="#">Something else here</a></li>\n            <li><a href="#">Separated link</a></li>\n            <li><a href="#">One more separated link</a></li>\n          </ul>\n        </li> --> <li> <a target="_blank" href="https://github.com/nghiattran">Github</a> </li> </ul> </nav> </div> </header>'),a.put("views/wall.html",'<div class="wall" ng-repeat="post in posts"> <a href="{{post.link}}"> <div class="post"> <div class="cover_image"> <img class="" src="images/image.0004e081.jpeg"> </div> <div class="title"> {{post.title}} </div> <div class="snippet"> {{post.snippet}} </div> </div> </a> </div>')}]);