/*
 *      File: ang.js
 *      Created on : Apr 1, 2015
 *      Author     : markfavis
 */

var app = angular.module('myApp', []);
app.controller('personCtrl', function ($scope) {
    $scope.myVar = true;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});