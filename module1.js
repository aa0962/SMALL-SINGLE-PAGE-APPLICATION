var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/teacher",{
		templateUrl:'views/teachers.html',
		controller:'teacher_ctr'
	}).
	when("/student",{
		templateUrl:'views/students.html',
		controller:'student_ctr'
	}).
	when("/course",{
		templateUrl:'views/courses.html',
		controller:'course_ctr'
	}).
	when("/gallery",{
		templateUrl:'views/gallery.html',
		controller:'gallery_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("teacher_ctr",function($scope){
	
	$scope.teachers = [
		{name:'Aryan',age:27,qualification:'Btech'},
		{name:'Parshva',age:28,qualification:'Mtech'},
		{name:'Arpit',age:26,qualification:'MBA'},
		{name:'Aniket',age:33,qualification:'MBA'},
		{name:'Vaibhav',age:28,qualification:'MS'},
	];
	
});

app.controller("student_ctr",function($scope){
	
	$scope.students = ["Aryan","Parshva","Mayank","Arpit","Aniket","Zoya","Rohit","Virat","Vaibhav","Nasir"];
	
});

app.controller("course_ctr",function($scope){
	
	$scope.courses = ["Web Desigining","Web Development","Php","Asp.Net","Sql Server","Mysql","JQuery","Javascript","Android Development"];
	
});

app.controller("gallery_ctr",function($scope){
	
	$scope.pic1 = "images/Koala.jpg";
	$scope.pic2 = "images/Penguins.jpg";
	$scope.pic3 = "images/Tulips.jpg";
	
});




