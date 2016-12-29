
app.controller("StudentController",function($scope,StudentService){
	StudentService.insert({id:1,firstName:'Sidhant',lastName:'BC',email:'sidhant@gmail.com',status:true});
	StudentService.insert({id:2,firstName:'Raju',lastName:'Kunwar',email:'raju@gmail.com',status:false});

	$scope.students=StudentService.getAll();
});

app.controller("StudentEditController",function($scope,StudentService,$routeParams){
	StudentService.insert({id:1,firstName:'Sidhant',lastName:'BC',email:'sidhant@gmail.com',status:true});
	StudentService.insert({id:2,firstName:'Raju',lastName:'Kunwar',email:'raju@gmail.com',status:false});

	$scope.id=$routeParams.id;
	$scope.student=StudentService.getById($scope.id);
	console.log($scope.student);
});