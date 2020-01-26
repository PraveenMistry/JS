 ###JavaScript allows to use objects, arrays, null or undefined as operands. Let's try to demystify the general rule of conversion.

 ##Conversion rules 
 
    ###Use following scheme to see how JavaScript converts types in addition operation:
    ###operand + operand = result 

    1. If at least one operand is an object, it is converted to a primitive value (string, number or boolean);  
	    After conversion, if at least one operand is string type, the second operand is converted to string and the concatenation is executed;  
        
    2. In other case both operands are converted to numbers and arithmetic addition is executed.  
      
    3. If both operands are primitive types, then operator checks if at least one is string and executes the concatenation.   
    In other case it just transforms everything to numbers and sum.  
    


  ### Strings concatenation:
	var sa = "Hello, " + "World!";  

	### Numbers arithmetic addition:
	var naa = 10 + 5;  

	### Number and string
	var ns = 1 + "5"; ### "15"  

	### Number and array
	var na = [1, 3, 5] + 1; ###"1,3,51"

	### Number and boolean
	var nb = 10 + true; ###11  

	### Number and object
	var no = 15 + {}; ### "15[object Object]"  

	### Number and null
	var nn = 8 + null; ### 8

	### String and null
	var sn = "queen" + null; ### "queennull" 

	### Number and undefined
	var nd = 12 + undefined; ### NaN 

	console.log(1 +  "2" + "2");
	console.log(1 +  +"2" + "2");
	console.log(1 +  -"1" + "2");
	console.log(+"1" +  "1" + "2");
	console.log( "A" - "B" + "2");
	console.log( "A" - "B" + 2);
