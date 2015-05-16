'use strict';

/**
 * @ngdoc function
 * @name myMedsMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myMedsMeApp
 */
angular.module('myMedsMeApp')
  .controller('MainCtrl', function ($scope, dataService, $interval) {

      $scope.dataset = {
          imaging: [],
          medications: [],
          labs: []
      };

      dataService.socket.onmessage = function (event) {
          displayData(event.data);
      };

      // To test if an obj is already in an array to handle duplicate objects
      function isObjInArr (obj, arr) {

          for(var i = 0; i < arr.length ; i++) {
              if (angular.equals(obj, arr[i])) {
                  return true;
              }
          }

          return false;
      }


      function displayData ( data ) {
          var json;

          try {
               json = JSON.parse(data);
          } catch (e) {
              console.log(e);
              return;
          }

          // if data does not exisit in the medicalData array, add to it.
          if( json.imaging  && !isObjInArr(json, $scope.dataset.imaging) ) {
              $scope.dataset.imaging.push(json);
          }

          if( json.medications && !isObjInArr(json, $scope.dataset.medications) ){
              $scope.dataset.medications.push(json);
          }

          if( json.labs && !isObjInArr(json, $scope.dataset.labs) ){
              $scope.dataset.labs.push(json);
          }

      }

      // update $scope every 3 seconds
      $interval(function(){},3000);


  });
