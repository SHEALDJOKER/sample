

// Absolutely. In JavaScript, Map and Set are special built-in data structures. They are different from normal objects and arrays and are very useful when working with collections of data.

// 1. Map in JavaScript

// A Map is a collection of key-value pairs.
let student = new Map();

student.set("name", "Rahul");
student.set("age", 20);
student.set("city", "Kochi");

console.log(student);

student.set("age",19)
console.log(student);
console.log(student.get("age"));

console.log(student.has("city"));
console.log(student.has("town"));

// student.delete("city")
console.log(student);
console.log(student.size)

// student.clear()
console.log(student);

student.set(100,"one hundred")
console.log(student);

for(let [key,value] of student){
    console.log(key,value);
    
}
for(let value of student.values()){
    console.log(value);
    
}



// map() built a new key value pairs
// set() add key and value in that map
// get() for find the value of specified key
// has() for check the key are exist
// delete() for delete specified pair
// size find the sie of map
// clear() delete all paires


//    set we can use is arrays

// imp note in this set "S" is capital not small case
let nums = new Set ([1,2,3,6,"okey",5,8,7,"done",4,1,])
console.log(nums);// set collection of unique values

let numbers=new Set()

numbers.add(1)
numbers.add(1)// dup is ignored
numbers.add(2)
numbers.add(3)
// numbers.delete(2)
// nums.delete("done")

console.log(numbers.has(2))
console.log(nums.has("done"))
console.log(nums.has("not okey"))


console.log(nums.size);
console.log(numbers.size);

// nums.clear()
// numbers.clear()

console.log(numbers);
console.log(nums);

for(let fruit of nums ){
    console.log(fruit);
    
}

// const numbers = [10, 20, 20, 30, 30, 40, 40];

// const uniqueNumbers = new Set(numbers);

// console.log(uniqueNumbers);

//8888888888888888888888888888888888888888888888888888

// const numbers = [10, 20, 20, 30, 30, 40, 40];

// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);