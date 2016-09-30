'use strict';

angular.module('app.common')
  .service('NewestModel', function ($http, ENDPOINT_URI) {
    var service = this;

    function extract(result) {
      return result.data;
    };

    function getUrl() {
      return '/newest' + ENDPOINT_URI;
    };

    function getUrlId(newestId) {
      return '/newest' + ENDPOINT_URI + 'topstories.json?print=pretty';
    };

    service.all = function () {
      return $http.get(getUrl()).then(extract);
    };

  });
