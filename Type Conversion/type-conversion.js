// converting different JavaScript values to Number, String, and Boolean

var boolFalse = false;
console.log("false Boolean to Number",Number(boolFalse)); // 0
console.log("false Boolean to String",String(boolFalse)); // "false"
console.log("false Boolean to Boolean",Boolean(boolFalse)); // false


var boolTrue  = true;
console.log("true Boolean to Number",Number(boolTrue)); // 1
console.log("true Boolean to String",String(boolTrue)); // "true"
console.log("true Boolean to Boolean",Boolean(boolTrue)); // true


var zeroNumber = 0;
console.log("0 Number to Number",Number(zeroNumber)); // 0
console.log("0 Number to String",String(zeroNumber)); // 0
console.log("0 Number to Boolean",Boolean(zeroNumber)); // false


var oneNumber = 1;
console.log("1 Number to Number",Number(oneNumber)); // 1
console.log("1 Number to String",String(oneNumber)); // 1
console.log("1 Number to Boolean",Boolean(oneNumber)); // true


var zeroString = "0";
console.log("0 String to Number",Number(zeroString)); // 0
console.log("0 String to String",String(zeroString)); // 0
console.log("0 String to Boolean",Boolean(zeroString)); // true 


var oneString = "1";
console.log("1 String to Number",Number(oneString)); // 1
console.log("1 String to String",String(oneString)); // 1
console.log("1 String to Boolean",Boolean(oneString)); // true


var notANumber = NaN;
console.log("notANumber to Number",Number(notANumber)); // NaN
console.log("notANumber to String",String(notANumber)); // NaN
console.log("notANumber to Boolean",Boolean(notANumber)); // false


var infinity = Infinity;
console.log("infinity to Number",Number(infinity)); // Infinity
console.log("infinity to String",String(infinity)); // Infinity
console.log("infinity to Boolean",Boolean(infinity)); // true


var negativeInfinity = -Infinity;
console.log("negativeInfinity to Number",Number(negativeInfinity)); // -Infinity
console.log("negativeInfinity to String",String(negativeInfinity)); // -Infinity
console.log("negativeInfinity to Boolean",Boolean(negativeInfinity)); // true


var emptyString = "";
console.log("emptyString to Number",Number(emptyString)); // 0
console.log("emptyString to String",String(emptyString)); // 
console.log("emptyString to Boolean",Boolean(emptyString)); // false


var string = "twenty";
console.log("string to Number",Number(string)); // NaN
console.log("string to String",String(string)); // twenty
console.log("string to Boolean",Boolean(string)); // true


var emptyArray = [];
console.log("emptyArray to Number",Number(emptyArray)); // 0
console.log("emptyArray to String",String(emptyArray)); // 
console.log("emptyArray to Boolean",Boolean(emptyArray)); // true 


var numberArray = [20];
console.log("numberArray to Number",Number(numberArray)); // 20
console.log("numberArray to String",String(numberArray)); // 20
console.log("numberArray to Boolean",Boolean(numberArray)); // true


var twoElementNumberArray = [10,20];
console.log("twoElementNumberArray to Number",Number(twoElementNumberArray)); // NaN
console.log("twoElementNumberArray to String",String(twoElementNumberArray)); // 10,20
console.log("twoElementNumberArray to Boolean",Boolean(twoElementNumberArray)); // true


var stringArray = ["twenty"];
console.log("stringArray to Number",Number(stringArray)); // NaN
console.log("stringArray to String",String(stringArray)); // twenty
console.log("stringArray to Boolean",Boolean(stringArray)); // true


var twoElementStringArray = ["ten","twenty"];
console.log("twoElementStringArray to Number",Number(twoElementStringArray)); // NaN
console.log("twoElementStringArray to String",String(twoElementStringArray)); // ten,twenty
console.log("twoElementStringArray to Boolean",Boolean(twoElementStringArray)); // true


var func = function(){};
console.log("function to Number",Number(func)); // NaN
console.log("function to String",String(func)); // function(){}
console.log("function to Boolean",Boolean(func)); // true


var obj = {};
console.log("object to Number",Number(obj)); // NaN
console.log("object to String",String(obj)); // [object Object]
console.log("object to Boolean",Boolean(obj)); // true


var nullVar = null;
console.log("null to Number",Number(nullVar)); // 0
console.log("null to String",String(nullVar)); // "null"
console.log("null to Boolean",Boolean(nullVar)); // false


var undefinedVar = undefined;
console.log("undefined to Number",Number(undefinedVar)); // NaN
console.log("undefined to String",String(undefinedVar)); // undeined
console.log("undefined to Boolean",Boolean(undefinedVar)); // false