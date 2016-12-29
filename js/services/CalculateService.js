	app.service("CalculateService",function(){
		this.add=function(x,y){
			return x+y;
		};
		this.sub=function(x,y){
			return x-y;
		};		
		this.mul=function(x,y){
			return x*y;
		};		
		this.div=function(x,y){
			return x/y;
		};	

		this.calculate=function(param,x,y){
			var result=0;
			switch(param){
				case "+":
					result=this.add(x , y);
					break;
				case "-":
					result=this.sub(x , y);
					break;					
				case "/":
					result=this.div(x , y);
					break;
				case "*":
					result=this.mul(x , y);
					break;					
			}
			return result;
		}
	});