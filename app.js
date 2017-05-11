var app = angular.module('mralbelo', []);


app.controller('FeedController', function FeedController($scope,$http) {
  
        $http.get().then(function(response){
            $scope.feed = result;
        });
    console.log("feed controller was initialize");

});