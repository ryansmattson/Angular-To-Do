angular.module('todoApp', []);

angular.module('todoApp').controller('MainController', function($scope) {
    $scope.tasks = [];

    $scope.addTask = function(newTask) {
        if (newTask == '' || newTask == undefined) {
            return;
        } else {
            $scope.tasks.push({
                task: newTask,
                complete: false
            });
            $scope.newTask = '';
            console.log($scope.tasks);
        }
    }

    $scope.removeTask = function(taskToBeRemoved) {
      $scope.tasks.splice(taskToBeRemoved,1);
    }

    // function to remove multiple selected tasks from DOM
    // and $scope.tasks
    $scope.removeBulk = function(){

    }

})
