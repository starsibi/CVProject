angular.module("myapp",[]).controller("projectviewcontroller",function($scope,$http){
	$http.get("data.json")
	.then(function(response){
		$scope.employee=response.data;
		$scope.emplcareerBrief=$scope.employee.cv.careerBrief;
		console.log("employee+",$scope.employee.cv.careerBrief);
	})
})