
function fib(x) {
        	var arr = [];
        	if(x == 2){
            	return arr = [1];
        	}else if(x == 3){
            	return arr = [1,1];
        	}else{
          		arr= [1,1];
            	var a=1;
            	var b=1;
            	var c=2;
            	var arrlen =arr.length;
            	for(var i=3;i<x;i++){
                	arr.push(c);
                	a=b;
                	b=c;
                	c=a+b;
            	}
            	return arr;

        	}

    	}	
alert(fib(x));
