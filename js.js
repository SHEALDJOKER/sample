function hello(){
    return console.log("hello world")
}

hello();

function heello(){
    return "hello world"
}
// heello()
console.log(heello())

// ternary operator
//  short hand property for conditional statement
let age=15
let newone=age>=18?"adult":"minor"
console.log(newone);
let num=60
console.log(num>=10?"largest":"smallest");
console.log(`my number is ${num>=10?"largest":"smallest"}`);
