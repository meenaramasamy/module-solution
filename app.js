(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
//$scope.menu="";

$scope.countmenu = function (){
  var items=$scope.menu;

    items = (items.replace(/\s/g,''));
     console.log(items);
     if(items.length >1){
    var nitems=items.split(',');
   nitems=nitems.filter(Boolean);

console.log(nitems);
    if(nitems.length <= 3)
    {
      $scope.message ="Enjoy";
    }else if(nitems.length > 3)
    {
      $scope.message ="Too Much";
    }
  else {
    $scope.message ="";
  }
}else {
  $scope.message ="";
}
};


}

})();
