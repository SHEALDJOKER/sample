let b79=["samir","salim","abhi","fashan","abhi","uvais",55]

//*******************************************************************
// indexof()
console.log(b79.indexOf("abhi"))
console.log(b79.indexOf("abhi",3))  // start search from 3rd index
console.log(b79.indexOf("H"))       // if there is not value there return -1

if(b79.indexOf("fashan")){
    console.log("fashan is exist");
}

//*******************************************************************
//lastindexof()

console.log(b79.lastIndexOf("abhi"));
console.log(b79.lastIndexOf("abhi",3));
// exact bases of index of check backwards thts deff
// indexOf() → Finds the first occurrence
// lastIndexOf() → Finds the last occurrence


//*******************************************************************
//includes()

console.log(b79.includes("abhi"));
console.log(b79.includes("salim",2));//start search from 3rd index

console.log(b79.includes("azzam"));

if(b79.includes("fashan")){
    console.log("fashan is exist");
}
//*******************************************************************
// find()
// find use fulll for seach by condition
////////find the first element matching condition
let nums=[1,2,3,4,5,6,7,8,9]
console.log(nums.find(x => x>7))
console.log(nums.find(x => x>5))
console.log(nums.find(x => x>4))
console.log(nums.find(x => x>0));


console.log("samir");
let num1=[10,2,3,4,5,6,7,8,9]
console.log(num1.find(x => x>7))
console.log(num1.find(x => x>5))
console.log(num1.find(x => x>4))
console.log(num1.find(x => x>0));


//Finding an object

//This is one of the most useful applications of find().

let users = [
    { name: "Ali", age: 20 },
    { name: "John", age: 25 },
    { name: "Sara", age: 22 }]


console.log(users.find(obj => obj.age>23))

