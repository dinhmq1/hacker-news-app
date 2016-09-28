angular.module('app')
  .controller('NewestCtrl', function(){

    console.log('NewestCtrl successfully loaded!');

    var newest = this;

    newest.title = 'Newest!';
  });
