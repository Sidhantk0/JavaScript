//basically the scopes are normal as you know of
//but there are interesting ways to declare 
// function 
// 1> normal
// 2> with variable

addOne(2);  // this type of function can be accessed before intialization
function addOne(a){
    console.log(a+1);
}

// this type cannot be accessed before writing the function 
//and can be used only after function
const addtwo = function(b){
    console.log(b+2);
}

addtwo(5);