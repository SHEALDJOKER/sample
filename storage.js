// The main difference is how long the data remains stored.

//              web storage
let username = "Samir";//page refreshed variable not exist
// so we want to store data in the browser

localStorage.setItem("username","samir")
localStorage.setItem("password","123456789")
//Now the browser stores "Samir" even after refreshing the page.
//Local Storage is used to store data in the browser that should remain available for a long time.
// setItem() for methods used to store


// Refresh the page ✅
// Close the tab ✅
// Open the website again later ✅

let user = localStorage.getItem("username")
console.log(user);

// remove items


// localStorage.removeItem("username")
// localStorage.clear()

console.log(localStorage)
console.log(localStorage.getItem("password"))

console.log(localStorage.getItem("address"));// not exist


//************************session storage */
// Refresh the page ✅
// Navigate around the same tab ✅
// Close the tab ❌ → session data is normally removed

sessionStorage.setItem("pass",546213)
sessionStorage.setItem("user","abhi")

console.log(sessionStorage);
console.log(sessionStorage.getItem("user"));
// sessionStorage.removeItem("pass")
// sessionStorage.clear()
console.log(sessionStorage);


