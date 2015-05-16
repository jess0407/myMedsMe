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
          medicalData: []
      };

      dataService.socket.onmessage = function (event) {
          displayData(event.data);
      };

      var displayData = function ( data ) {
          // if data does not exisit in the medicalData array, add to it.
          if( $scope.dataset.medicalData.indexOf(data) === -1){
              $scope.dataset.medicalData.push(data);
          }
      };

      // update $scope every 3 seconds
      $interval(function(){},3000);


  });
