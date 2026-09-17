//     dom methods

let heading =document.getElementById("samir");
let head =document.getElementsByClassName("salim")[0]
let b1=document.getElementsByTagName("p")[0]
let b2=document.querySelector(".samir")// take first matching element
let b3=document.querySelector("p")// take first matching element
let b4=document.querySelectorAll(".samir") // take all matching element
let boxer=document.getElementById("box")
let image=document.getElementById("img")
let link=document.getElementsByName("a")


console.log(head);
console.log(b3.textContent);
console.log(document.title);


document.title="my webpage"

// console.log(document.body);

document.body.style.backgroundColor="yellow"// change bg color


let newp=document.createElement("h5")
newp.innerHTML="iam the boss"

newp.style.color="red"
newp.style.textAlign="center"
document.body.appendChild(newp)

boxer.innerText="i bought BMW car"
document.body.appendChild(boxer)

image.src="asd.jpg"
document.body.appendChild(image)

let btn=document.getElementById("btn")
btn.addEventListener("click", function(){
    alert("hi looser")
})


// 88888
heading.innerHTML="samir is ******"
let img=document.getElementById("img")
img.style.width="400px"
img.style.height="200px"
img.style.textAlign="center"
document.body.style.textAlign="center"

link.href+"https://chromewebstore.google.com/"


heading.innerHTML="Samir Is Pure Man"
heading.style.color="green"
heading.style.textDecoration="underline"

Document.body.appendChild(heading)


function reaction(){
    alert("you are brillient")
}

