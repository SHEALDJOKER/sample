//         rest parameters

function add(a,b){
    console.log( a+b);
 
}
add(5,5)

// if there is costemer gave more than 2 data what will be there happens
add(5,5,9,9,5,5,85,6,3)// only out first two values sum
// so we can this situation rest parameters
// only we place rest parameter in last parameter
function adding(...numbers){
    let sum=0;
    for(let x of numbers){
        
        sum += x
    }
console.log(sum);

}
adding(5,5,5,8,8,8,74,7,8,8,8,)

// another use of rest parameter

function obj(name,age,...subjects){
    console.log(name);
    console.log(age);
    console.log(subjects);
    
}

obj("samir",18,"html","css","java","js")













function large(...data){
    let save =data[0];
    for(let y of data){
        if(y>save){
            save=y
        }
    }
    return save
}

console.log(large(100,1,2,210,26,25,6) );

//             spread operators
let nums=[10,20,30,40]
let nums2=[90,80,70,60,50]
console.log(...nums);// one array into multiple values
let jj=[first,...others]=nums
let kk=jj[jj.length-1]
console.log(kk);


console.log(...nums,...nums2)

//        DESTRUCTRURING
// works position -> index

let collegue=["abhi","samir","salim","ujais","bihar","shafi kollam","nizah","anshif"]
let [k,s,d,f,g,h,j,a]=collegue//let [k,s,,f,g,h,j,a]=collegue// unwanted value skip
let[u,i,o,]=collegue//only wanted the first 3 values
console.log(k);
console.log(s);
console.log(d);
console.log(f);
console.log(g);
console.log(h);
console.log(j);
console.log(a);

let [q,w,e]=[1,2,3,]
console.log(q);
console.log(w);
console.log(e);

        //   swapping value with destructuring
let n = 10;
let m = 20;

[n, m] = [m, n];

console.log(n);
console.log(m);

let numbers = [10, 20, 30, 40, 50];

let [fir, ...rest] = numbers;

let last = rest[rest.length - 1];

console.log(fir);
console.log(last);
//      object destructuring

let aboutme={
    name :"samir",
    age :19,
    batch:79,
    country:"india",
    language:"english"

}
console.log(aboutme

);


// let {name,age}=aboutme;
// console.log(age);
// console.log(name);
                        let {name,...balancedetails}=aboutme
                        console.log(name);
                        console.log(balancedetails)



    //                 DESTRUCTURING
    //                      |
    //          ┌───────────┴───────────┐
    //          ↓                       ↓
    //     ARRAY                       OBJECT
    //       []                          {}
    //       |                           |
    //  Position-based             Property-based
    //       |                           |
    // let [a,b] = arr           let {name,age} = obj

// The most important distinction:
// Array destructuring depends on position; object destructuring depends on property names.