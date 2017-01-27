/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.ui.panels', {
          url: 'panels',
          templateUrl: 'pages/ui/panels/panels.html',
          controller: 'NotificationsPageCtrl',
          title: 'Panels',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();