//telling about functions and one if condition is done here

function addTwoNumber(n1, n2){
    return (n1 + n2);
}

console.log(addTwoNumber(5,6));

//function with if statement 

function greet(s1){
    if(s1 === undefined){
        console.log("please enter something in this");
    }
    else{
        console.log(`${s1} just logged in`);
    }
}

greet("ram");


//Creating Functions with passing objects and also array

// ... these dots are called rest operator and will take in any number of values
// you don't have to think how many values you have to paas
function calculatePrice(...p1){
    return p1;
}
console.log(calculatePrice(200,400,500));

//object passing
const user= {
    userName: "sid",
    Price: 500
}

function tellPrice(data){
    console.log(`${data.Price} is the price`);
}

tellPrice(user);

//and in the same way you can pass on the arrays with their name