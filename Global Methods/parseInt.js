// parses a string and returns an integer


console.log("parseInt",parseInt("10")); // 10
console.log("parseInt",parseInt("10.00")); // 10
console.log("parseInt",parseInt("10.33")); //10
console.log("parseInt",parseInt("34 45 66")); // 34
console.log("parseInt",parseInt(" 60 ")); // 60
console.log("parseInt",parseInt("40 years")); // 40
console.log("parseInt",parseInt("He was 40")); //NaN


console.log("parseInt",parseInt("10", 10)); // 10
console.log("parseInt",parseInt("010")); // 10
console.log("parseInt",parseInt("10", 8)); // 8
console.log("parseInt",parseInt("0x10")); // 16
console.log("parseInt",parseInt("10", 16)); // 16


/*

If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)

*/