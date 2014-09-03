'use strict';

angular.module('starMobileWebApp')
.controller('MainCtrl', ['$scope', 'RESTService', function ($scope, RESTService) {
      $scope.data = {};
      $scope.onError = false;
      $scope.errorMessage='';
      $scope.showData = false;
      $scope.receivedData = [];

      $scope.getDataFromRest = function() {
        RESTService.getData()
          .then( function(data) {

            if(data !== null && data !== '') {
              try {
                $scope.data = data;
                $scope.clearError();

                $scope.receivedData = [];
                angular.forEach(data, function(value, key) {
                  this.push(value);
                }, $scope.receivedData);
                console.log('Data Received');
              }
              catch(e) {
                $scope.errorHandler(e);
              }
            }
            else {
              $scope.errorHandler({message:'Nothing returned from REST API'});
            }
          },
          function(error) {
            $scope.errorHandler(error);
          });
      };

      $scope.clearError = function() {
        $scope.onError = false;
        $scope.errorMessage = '';
      };

      $scope.errorHandler = function(error) {
        $scope.onError = true;
        $scope.errorMessage = (error && error.message ? error.message : error);
      };

      $scope.getDataFromRest();
    }
]);
