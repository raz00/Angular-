	app.config(function($routeProvider){
		$routeProvider.when("/",{
			templateUrl:"views/partials/home.html",
			controller:"HomeController"
		}).when("/contact",{
			templateUrl:"views/partials/contact.html",			
		}).when("/student",{
			templateUrl:"views/partials/student/index.html",
			controller:'StudentController'
		}).when("/student/edit/:id",{
			templateUrl:"views/partials/student/edit.html",
			controller:'StudentEditController'
		});

	});