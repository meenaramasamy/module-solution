(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
$scope.menu="";
$scope.message="";
$scope.countmenu = function (){
  var items=$scope.menu;

  if(items.trim().length == 0) {
      $scope.message ="please enter data first";
  }else {
    items = (items.replace(/\s/g,''));
    var nitems=items.split(',');
   nitems=nitems.filter(Boolean);

    if(nitems.length <= 3)
    {
      $scope.message ="Enjoy";
    }else if(nitems.length > 3)
    {
      $scope.message ="Too Much";
    }
  else {
    $scope.message ="please enter data first";
  }
}
};
}

})();
