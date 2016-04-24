var app = angular.module("MTW_2016", ["ngRoute"])

.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/home", {
      templateUrl: "home.html",
      controller: "MainCtrl"
    })
    .when("/artists", {
      templateUrl: "artists.html",
      controller: "GalleryCtrl"
    })
    .when("/gallery", {
      templateUrl: "gallery.html",
      controller: "GalleryCtrl"
    })
    .when("/aboutus", {
      templateUrl: "aboutus.html",
      controller: "AboutCtrl"
    })        
    .otherwise({redirectTo:"/home"});       
}])

.controller("MainCtrl", ["$scope", function($scope){     

}]) 

.controller("GalleryCtrl", ["$scope", "$http", function($scope, $http){
    $http.get("js/gallery.json").success(function(data){
        $scope.gallery = data;
    });
}])
 
.controller("AboutCtrl", ["$scope", "$http", function($scope, $http){
    $http.get("js/aboutus.json").success(function(data){
        $scope.aboutus = data;
    });
}]);