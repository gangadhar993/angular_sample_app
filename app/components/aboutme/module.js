

var JSONController = function($scope){
    let student = {
    firstName: "Gangadhar",
    LastName:"Adusumalli",
    Email : "S533705@nwmissouri.edu",
    message:"hello world"
    }
    $scope.Student = student;  
}

angular.module("myApp").controller("JSONController",JSONController);