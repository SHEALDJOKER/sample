
// for in mainly used to

let details={
name:"samir",
lname:"ck",

};
for(let key in details){
console.log(key,index);
}



let student={
    name:"samir",
    age:19,
    class:" 8th",
    division:"c"
};
for(let key in student){
    // console.log(key);
    // console.log(student[key]);
    console.log(key+student[key]);
}

// for...in → keys/indexes
// for...of → values

let mandans=["abhi","rinsiya","salim","ujais","fashaan"]

// console.log(mandans.sort())


for (let mandan in mandans){
    console.log(mandans[mandan]+" is biggest mandan than me")
}


//           for ... of

for(let mandan of mandans){
    console.log(mandan+" is biggest mandan than me");
    
}
let mandan="abhinand"
for (let letter of mandan){
    console.log(letter);
    
}