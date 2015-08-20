angular.module("ToDoList",["LocalStorageModule"])

.controller("ToDoController",function($scope,localStorageService){

  $scope.FBLogin = function(){
    FB.login(function(response) {
   if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 });
 };

  if (localStorageService.get("todolist-angular")){
      $scope.todo = localStorageService.get("todolist-angular");
  }
  else {
      $scope.todo = [];
  }

  $scope.addActv = function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
    localStorageService.set("todolist-angular",$scope.todo);
  }

  $scope.clean = function(){
    $scope.todo = [];
    localStorageService.set("todolist-angular",$scope.todo);
  }

});
