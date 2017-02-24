angular.module("myapp",[]).controller("viewcontroller",function($scope,$http){
	$http.get("data.json")
	.then(function(response){
		$scope.employee=response.data;
		console.log("employee+",$scope.employee.cv.qualifications[0]);
	})
})