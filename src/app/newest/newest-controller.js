'use strict';

angular.module('app')
  .controller('NewestCtrl', function(ItemsModel, $state){

    console.log('NewestCtrl successfully loaded!');

    var ctrl = this;

    ctrl.title = "Most Recent Tech News";

    ItemsModel.getItems()
      .then(function(items){
        //console.log(items);
        ctrl.items = items;
      })
      .catch(function(error){
        ctrl.error = error;
      })
      .finally(function(){
        ctrl.message = 'FINALLY DONE!';
      });

    ctrl.setCurrentItem = function(item) {
      ctrl.currentItem = item;
    };
  })
  //.constant('ENDPOINT_URI', 'https://hacker-news.firebaseio.com/v0/item/')
  .factory('ItemsModel', function($http, $q, ENDPOINT_URI){

    function extract(result){
      console.log(result.data);
      return result.data;
    }

    function getItems() {
      return $http.get(ENDPOINT_URI + 'item/12606995.json?print=pretty').then(extract);
    }

    return {
      getItems: getItems
    }
  })
;
