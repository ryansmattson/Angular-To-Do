angular.module('todoApp', []);

angular.module('todoApp').controller('MainController', function($scope){
  $scope.tasks = [];

  $scope.addTask = function(newTask){
    $scope.tasks.push({task: newTask, complete: false});
    $scope.newTask = '';
    console.log($scope.tasks);
  }

  $scope.completeStatus = function(){

  }


})
