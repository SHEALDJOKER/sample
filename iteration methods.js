let numbers=[7,3,6,4,9,2,5]
let boys=["samir","salim","uvais","abhi","","rashi"]
//                                          map() 
// 
    // takes each element one by one:
    // returs as a new array
    //                   *map with nums*
// let result=numbers.map((num)=>{
//     return num*3
// })
// console.log(result);
// let nw=numbers.map((num4)=>{
//     return num4 /2
// })
// console.log(nw);
// console.log(numbers)
// let newr = numbers.map((nums)=>{
    // return nums*2
// })
// console.log(newr);
// //                      '*map with strings// never changes the og array

let newt=boys.map((boy)=>{
    return boy.toUpperCase();
});
console.log(newt);
//             name,index,array
//               x    y    z
let bow=boys.map((x,y,z)=>{
    return `${y}  : ${x} * ${z}`
})
console.log(bow);


// let up= boys.map((name)=>{
//     return name.toUpperCase()
// })
// console.log(up);


// let op=boys.map((abc,index)=>{
//     return index + "--"+abc
// })
// console.log(op);
//                                         filter()// doesnt affect og array
// let gow=numbers.filter((num)=>{
//     return num>3

// })
// console.log(gow);
// console.log(gow.sort());


// let hor=numbers.filter((num)=>{
//     return num %2===0
// })
// console.log(hor);
// console.log(hor.sort());
 
// //           using string
// let more=boys.filter((name)=>{
//     return name.length>4
// })
// console.log(more);

//           reduce()the main concept accumulator*******************

// let sum=numbers.reduce((sam,num)=>{
//     return sam +num
// })
// console.log(sum);
// let mult=numbers.reduce((sam,num)=>{
//     return sam*num 
// })
// console.log(mult)
// //     with string
// let tor=boys.reduce((text,name)=>{
//     return text +" "+name
// })
// console.log(tor);
// console.log(typeof(tor));
 
//                  forEach() 
// its for using doing something never create new array
// just make action like just print console answer 
// numbers.forEach((num)=>{
//     console.log(num*2)
//  //   //  or/ console.log(num)
// })

