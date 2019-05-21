

var JSONController = function($scope){
    let student = {
    firstName: "Naveen",
    LastName:"Adusumalli",
    Email : "S533705@nwmissouri.edu",
    message:"hello world"
    }
    $scope.Student = student;  
}

angular.module("myApp").controller("JSONController",JSONController);