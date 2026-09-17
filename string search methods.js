let text="hi everyone Good morning"

// console.log("        [1]indexof()")
// console.log(text.indexOf("everyone"))
// console.log(text.indexOf("every"))
// console.log(text.indexOf("samir"))

/*
if(text.indexOf("goodsdfghj") >0){
    console.log("sting is available")
}else{
    console.log("sting is not available")
}
// */

// console.log("        [2]lastIndexOf()")

// this mainly used to if the same stings stored in same variable

// let same="hello javascript hello"
// console.log(same.lastIndexOf("hello"))
// console.log(same.lastIndexOf("java"))
// console.log(same.indexOf("java"))
// console.log(same.lastIndexOf("dasassa"))


// console.log("        [3]search()")
// // same as index of like return index and string found aayillenkil -1 but 
// // in case of use seach we can use regex (we cant use in regex in indexof)
// // regex means check case sensitive
 /*
console.log(text.search("good"))
console.log(text.search("GOOD"))
console.log(text.search(/GOOD/i))
*/

// console.log("         [4]match")
// // there is no value are there return null

// let sentence="good is good is good"
// console.log(sentence.match("good"))
// console.log(sentence.match(/good/g))
// console.log(sentence.match(/GOOD/i))
// console.log(sentence.match(/GOOD/ig))



// console.log("         [5]includes")
// /*
// console.log(text.includes("good"))
// console.log(text.includes("GOOD"))//false
// console.log(text.includes("bad"))//false
// console.log(text.toLowerCase().includes("good"))
// */

// console.log("         [6]startswith")
// /*
// console.log(text.startsWith("hi"))
// console.log(text.startsWith("everyone"))
// console.log(text.startsWith("bad"))
// */
// // next topic

// let name="sheald"
// let age=18;

// let message = "My name is " + name + " and I am " + age + " years old.";
// console.log(message)
// let nmessage =`my name is ${name} .and iam ${age}years old ,and iam ${age >= 18 ? "Adult" : "Minor"} `
// console.log(nmessage)
// //  ${name}      JavaScript takes the value of name and puts it inside the string.

// console.log(`${age >= 18 ? "Adult" : "Minor"}`)

// let customer = "Arjun";
// let product = "Mobile";
// let price = 25000;
// let quantity = 2;

// console.log(`Total Amount: ₹${price * quantity}`)


// let bill = `
// Customer: ${customer}
// Product: ${product}
// Price: ₹${price}
// Quantity: ${quantity}

// Total Amount: ₹${price * quantity}`;
// console.log(bill)

// // with function

// function greet() {
//     return "Hello!";
// }

// console.log(`Message for ${name}: ${greet()}`);