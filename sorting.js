let boys=["samir","salim","afshan","abhi","rashik","uvais","nizah","fashan"]
// console.log(boys.sort())// og array is changed
// let result=boys.sort()
// console.log(result)


let girls=[4,6,2,8,7,3,300,9,1,5,10]
// girls.sort()
// console.log(girls)
// console.log(boys.reverse())// changes the og array
// girls.sort((a,b)=>a-b)
// console.log(girls);
// console.log(Math.min(...girls))
// console.log(Math.max(...girls))// ... do the data seperate
// console.log(Math.min(7,5,9,8,2,54,6,5,8,))
// console.log(Math.max(7,5,9,8,2,54,6,5,8));








    //                    reveresd number****************

    girls.reverse()
// console.log(girls);
//                    reveresd string****************

    let name="SAMIR"
    // console.log(name.split("").reverse().join())


    //                    sorting object****************

let students = [
    { name: "Rahul", age: 22 },
    { name: "Akhil", age: 19 },
    { name: "John", age: 21 }]

    // students.sort(function(a,b){
    //     return a.name - b.name
    // })
    //                    *or

    // another way to write function
    //  students.sort((a,b)=> a.age-b.age)// single line function

     // object string sorting
     students.sort((a,b)=>a.name.localeCompare(b.name))

// console.log(students);





