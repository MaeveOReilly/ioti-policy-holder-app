/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('main.components.mail', {
          url: 'mail',
          abstract: true,
          templateUrl: 'pages/components/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Mail',
          sidebarMeta: {
            order: 0,
          },
        }).state('main.components.mail.label', {
          url: ':label',
          templateUrl: 'pages/components/mail/list/mailList.html',
          title: 'Mail',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('main.components.mail.detail', {
          url: ':label/:id',
          templateUrl: 'pages/components/mail/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/components/mail','/components/mail/inbox');
  }

})();