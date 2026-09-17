
 let text = "Hello World JavaScript";
 let text1="is a programming language"
// console.log(text.indexOf("JavaScript"));
// console.log(text.length)
 //split
// console.log("                   split")
// console.log(text.split(" "));
// console.log(text.split(","));
// console.log(text.split(""));

// //slice extract part of a string( ⚠️support negative)(start>end  o/p plane text)
// console.log("                   slice")
// console.log(text.slice(0,5))
// console.log(text.slice(-5))

// // substring extract characters of a string( ⚠️didntsupport negative,negative number treated as 0 )
// console.log("                substring")
// console.log(text.substring(0,5))
// console.log(text.substring(-1,8))


// //  substr method extracts a part of a string(⚠️ Note: substr() is deprecated in modern JavaScript. Prefer slice() instead.)

// console.log("                substr")
// console.log(text.substr(0,8))
// console.log(text.substr(-6))


// //The main difference:

// // Method	Parameters
// // slice(start, end)	    Start and end position
// // substring(start, end)	Start and end position
// // substr(start, length)	Start position and length

// console.log("                toUpperCase & toLowerCase")

// console.log(text.toUpperCase())
// console.log(text.toLowerCase())

// console.log("                concat")
// let fulltext= text.concat(text1)
// console.log(fulltext)
// console.log(text.concat(text1))

// let result6 = "Hello".concat(" ","World", "!");

// console.log(result6);

// console.log("               chatAt()")
// // //(⚠️its case sensitive type old data correctly)

// console.log(text.charAt(6))



// console.log("               replace()")
console.log(text.replace("Hello World","hi "))

// // trim() method removes spaces from the beginning and end of a string.(does not remove spaces between words.)

// console.log("               trim()")
// console.log(text.trim())

// // padstart  string nte length(22) ne kkaal koodthal(23) aakki kodthaale work cheyyukayollu
// console.log(text.padStart(25,"*"));
// let result=text.length
// console.log(result)
// let num="5";
// console.log(num.padStart(2, 0));

