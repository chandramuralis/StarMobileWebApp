angular.module('starMobileWebApp')
  .service('RESTService', ['$http', '$q', function($http, $q) {
      var service = {};
      var apiURL =  'http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview';

      service.getData = function() {

        var deferred = $q.defer();
        $http({
            method:'GET',
            //url:'http://localhost:3090'
            url:apiURL
        })
        .success(function(data, status, headers, config){
          deferred.resolve(data);
        })
        .error( function(data, status, headers, config) {
          deferred.reject(data);
        })

        return deferred.promise;
      };

    return service;

   }]);
