/**
 * @author f.ulusoy
 * created on 26.01.2017
 */
(function () {
'use strict';

angular.module('BlurAdmin.pages.shields', []).config(routeConfig);

function routeConfig($stateProvider) {
  $stateProvider.state('main.shields', {
    url: 'shields',
    templateUrl: 'pages/shields/shield-list.html',
    title: 'Shields',
    sidebarMeta: {
      icon: 'fa fa-shield',
      order: 3,
    }
  });
}

})();
