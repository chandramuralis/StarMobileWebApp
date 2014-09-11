'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('starMobileWebApp'));

  var MainCtrl,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_ ,$controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('http://ec2-54-81-14-120.compute-1.amazonaws.com/api/dummyview')
      .respond([
          {
            "1146753425": {
                "viewType": "editBox",
                "value": "1146753425"
              },
              "Hello": {
                "viewType": "button",
                "value": "Hello"
              }
          }
      ]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should get valid result from RESTService', function(){
    expect(scope.receivedData).toBeDefined();
    $httpBackend.flush();

    expect(scope.receivedData).toEqual([
          {
            "1146753425": {
                "viewType": "editBox",
                "value": "1146753425"
              },
              "Hello": {
                "viewType": "button",
                "value": "Hello"
              }
          }
    ]);

    expect(scope.onError).toBe(false);

    expect(scope.errorMessage).toEqual('');
  });
});
