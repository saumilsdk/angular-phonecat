'use strict';

/* Controllers */

var samController = angular.module('SamControllerModule',[]);
samController.controller('MyController',
    [
        '$scope',
        '$http',
        function($scope,$http) {
            var dataLoc = 'phones/phones.json';

            $scope.loadData = function() {
                $http.get(dataLoc).success(
                    function (returnedItems) {
                        $scope.phones = returnedItems;

                    }
                )
            }
        }
    ]
);