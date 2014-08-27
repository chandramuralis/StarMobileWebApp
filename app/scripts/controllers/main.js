'use strict';

angular.module('starMobileWebApp')
.controller('MainCtrl', ['$scope', 'RESTService', function ($scope, RESTService) {
      $scope.data = {};
      $scope.onError = false;
      $scope.errorMessage='';
      $scope.showData = false;

      $scope.getDataFromRest = function() {
        RESTService.getData()
          .then( function(data) {
            if(data != null) {
              $scope.data = data;
              console.log('Data Received from REST');
            }
            else
              console.log('Nothing returned from REST API');
          },
          function(error) {
            $scope.onError = true;
            $scope.errorMessage = error;
            console.log('Something went wrong on accessing REST API');
          });
      }

      $scope.clearError = function() {
        $scope.onError = false;
        $scope.errorMessage = '';
      }

      $scope.getDataAt = function(index) {
        if($scope.data != null && $scope.data.length > 0 && $scope.data.length >= index)
            return $scope.data;
      }

      $scope.getDataFromRest();
  }
]);
