// let add=(a,b)=>{
//     return a+b
// }
// console.log(add(5,6));
// //    simplified we can remove "{}","return"

// let add1=(a,b)=>a+b;

// console.log(add1(5,6));

// // to find square 
// let sqre=(a)=>a*a

// console.log(sqre(5));

// function greet(name, callback) {
//     console.log("Hello " + name);

// callback()
// }

// function message() {
//     console.log("Welcome to JavaScript");
// }

// greet("sam",message);

// const numbers = [1, 2, 3, 4];
// let newe3=numbers.map((num)=>num*3)

// console.log(newe3);




// let incr=0;
// function adding(){
//     incr++
//     return incr
// }
// // console.log(adding());
// // console.log(adding());
// // console.log(adding());
// // console.log(adding());
// // console.log(adding());
// // console.log(adding());
// // console.log(adding());


// function sum(a,b){
//     return a+b
// }

// console.log( sum(5,4));
// // *******************

// function adtotal(a,b){
    
// }



// (()=>{console.log("hello");
// })();

// function create(){
//     let count=0;


    
//     return function(){
//         count++
//         return count;
//     }
// }
//      call back function

function greet (name,callback){
    console.log(name);
    callback()
}

function greet2(){
    console.log("hello");
}
greet("samir",greet2)
//Something should happen after another operation

//       pure function

function add(a, b) {
    console.log(a + b);
}

add(3,6)
add(3,6)
add(3,6)
add(3,6)

// impure dfunction
let count4=0
function count(){
    console.log(count4++);
}
count()
count()
count()

//  function declaration means declare the function with name like normal function
// hoisting support
function add(a, b) {
    console.log(a + b);
}
// function expression meanss store in a variable a function
// hoisting not support
let add4 =function (a, b) {
    console.log(a + b);
}
// IIFE (immediatly invoked function expression)
     // normal function
function addee(){
    console.log("hello")
}
addee()
      // iife function

{}


(function (){
    console.log("hi");
})(); 
