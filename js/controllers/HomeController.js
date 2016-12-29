	app.controller("HomeController",function($scope,CalculateService){
		$scope.title="Angular Project";
		$scope.x=0;
		$scope.y=0;
		$scope.result=0;
		$scope.calculate=function(param){
			$scope.result=CalculateService.calculate(param,$scope.x,$scope.y);
			alert($scope.result);
		}
	});