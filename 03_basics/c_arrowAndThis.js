// in this we are learning about this keyword in functions and objects


//given below whenever a this keyword is used it will return the whole object as it's instance
//and when used specifically with other key of object it will return the instance of that key at that given time
const user= {
    userName: "sid",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome back`);
        console.log(this);
    }
}

user.welcomeMessage();

//when we try to take instance of global using this it will return empty object
console.log(this);


//but when introduced inside function which is not object it will give something but not of any use to us
function chai(){
    let userName = "sid";
    console.log(this);
    console.log(this.userName); // when we try to do so it wil return undefined
}

//do the function with variable or arrow function it will return nothing
//'this' is only loyal to the instance of objects

const arrow = () => {
    console.log(this);  //return empty object
}




// +++++++++++++++ arrow function


//one way of defining 
const addTwo = () => {
    return 5;
}
console.log(addTwo());

//second way of defining
const addThree = () => 8     //no need to type return or curly braces
console.log(addThree());

//third way of defining
const addSeven = () => ({userName: "sid"})  //to return objects in arrow function wrap it in braces
console.log(addSeven());

