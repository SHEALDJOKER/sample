let aboutme ={
    name:"samir",
    age:19,
    batch:"b79",
    country:"india",

    greet:function(){
        console.log(aboutme.age)
    },
    greet1:function(){
        console.log(this.age)
    },
    greet2:function(){
        console.log(this.name+" age is "+this.age);
        
    }
}

let detail={
    name:"abhi",

    greet:aboutme.greet
}
aboutme.greet()
aboutme.greet1()
aboutme.greet2()
detail.greet()

// this refers to the object that is currently calling the method in a normal object-method

//              call()
function greet6() {
    console.log("Hello " + this.name);
}

const person = {
    name: "brother"
};

greet6.call(person);

// with arguments
function samir (age,nation){
    console.log("my name is " +this.name+" and you can call me "+this.sname + " my age is "+age+" ,my nationality is "+nation+"n")
}


let me={
    name:"samir",
    sname:"BOSS"
}

samir(19,"india")// this function not work bcz its not connected my function

samir.call(me,19,"india")

//                apply
// apply same as call()deff is argument give as aray
samir.apply(me,[19,"india"])


//                bind()
// for create newbinded function
let newsamir=samir.bind(me)
// let newsamir=samir.bind(me,19,"india")


newsamir(19,"india")
// arrow function
    // greet () => {
    //     console.log(this.name);
    // }

    //            Recursion
    //  is a programming technique where a function calls itself to solve a problem.

// In simple words:

// A function calling itself is called recursion.

function countdown(n){
    console.log(n);
    if(n>1){
        countdown(n-1)
    }
    
}
countdown(9)
// here the function printing n,  that function recalled in that if

function hello() {
    console.log("Hello");
    hello();
}
// hello()//this funcion not stop why first run the code"hello"
// and then again called this function so this function doesnot stop
function numsprint(num){
    console.log(num)
    if(num<5){
        numsprint(num+1)
    }
}
numsprint()

function factoria(n){
    if(n===1){
        return 1
    }
    return n*factoria(n-1)
}
console.log(factoria(5))
// string
function printCharacters(str, index) {
    if (index === str.length) {
        return;
    }

    console.log(str[index]);

    printCharacters(str, index + 1);
}

printCharacters("HELLO", 0);