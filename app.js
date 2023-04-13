(function() {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope){
    $scope.name = "Nikola";
    $scope.sayHello = function() {
    return "Hello world!";
    };
});

})();