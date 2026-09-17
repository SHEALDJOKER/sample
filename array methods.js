let boys=["samir","salim","abhi","afshan","uvais"]
console.log(boys)
//         [1]slice
// NEVER CHANGE THE OLD ARRAY
// console.log(boys.slice(0,3))
// console.log(boys.slice(-3))
// console.log(boys.slice(1,3))
// console.log(boys.slice(2,))
// let nboys=boys.slice(0,3)
// console.log(nboys)

//        [2]splice()
//method is used to:

//            Add elements
/*
boys.splice(3,0, "Orange")
console.log(boys)

boys.splice(3,2, "banana")
console.log(boys)
*/
//            Remove elements
/*
boys.splice(1,2)
console.log(boys)

boys.splice(0,1)
console.log(boys)
*/
//            Replace element
// boys.splice(1,1,"raashi")
// console.log(boys);


//      slice()	                               splice()
// Creates a new array	               Changes original array
// Used to copy/extract elements	   Used to add/remove/replace
// Does not modify original	           Modifies original
// End index is used	               Delete count is used
//                  [3] at()
/*
console.log(boys.at(1))
console.log(boys.at(-1))
console.log(boys.at(-2))
*/
//                  [4] join()
/*
console.log(boys.join())
console.log(boys.join(""))
console.log(boys.join(" "))
console.log(boys.join(" - "))
console.log(boys.join(" * "))
console.log(boys.join(" & "))
*/
//                  [5] pop()


// dlt last data // change the og data
// boys.pop()                   
// console.log(boys.pop())

//                  [6] push()
/*
boys.push("raashi","shahid")
console.log(boys)
*/
//                  [7] shift()remove first element
/*
boys.shift()
console.log(boys)
let removed =boys.shift();
console.log(removed);
console.log(boys);
*/
//                  [8] unshift()add element at first
/*
boys.unshift("Apple");
console.log(boys);
boys.unshift("Apple","banana");
console.log(boys);
unshift() ➕  [ Apple, Banana, Mango ] ➕ push()

shift()   ❌  [ Apple, Banana, Mango ] ❌ pop()
*/
//                  [9] delete()// do not use space use the space like(delete boys[1])
                               // dlt create empty string so better is splice
/*
delete boys[1];
console.log(boys);
delete boys[3]
console.log(boys);
console.log(boys.length);
*/
//                  [10] concat()
/*
let girls=["rifa","nizah","nushfwa","shiha"];
let others=["noonu","azzam","anshif"]
let new1= boys.concat(girls)
let new2=boys.concat(girls,others)
console.log(new1);
console.log(new2);
*/





// map(), filter(), reduce(), forEach(), find(), and sort().  topics reefered gpt to learn this