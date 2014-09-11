'use strict';

angular.module('starMobileWebApp')
  .factory('GetScreenElements', ['$resource',  function ($resource) {
    // Service logic
    // ...

    var apiURL =  'http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview';

    return $resource(apiURL, {}, {
      getData: { method: 'GET' }
    });
  }]);
