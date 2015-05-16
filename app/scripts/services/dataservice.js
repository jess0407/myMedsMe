'use strict';

/**
 * @ngdoc service
 * @name myMedsMeApp.dataService
 * @description
 * # dataService
 * Service in the myMedsMeApp.
 */
angular.module('myMedsMeApp')
  .service('dataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.socket = new WebSocket('wss://websockets-challenge.herokuapp.com');

 });
