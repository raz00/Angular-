app.factory("StudentService",function(){

	var obj={};
	obj.studentList=[];

	obj.getAll=function(){
		return obj.studentList;
	};

	obj.insert=function(student){
		obj.studentList.push(student);
	};

	obj.getById=function(id){
		var student;
		angular.forEach(obj.studentList,function(item){
			//console.log(item.id + " " + id);
			if(item.id==id){
				student=item;
				
			}
		})
		return student;
	};

	return obj;

});