let name1="sid";
let countrepo= 20;

// console.log(name1 + countrepo); not preferred
// console.log(name1.length);
// console.log(name1.toUpperCase());
// //String interpolation
// console.log(`Hello my name is ${name1} and my countRepo is ${countrepo}`);
// //more preferred

let newString = new String("answered");
//another way of defining string it will still be stored in stack
let a= newString.charAt(4);
console.log(a);
let b = newString.slice(3,5);  //there is also substring works same but in substring we can't give negative values 
console.log(b);
console.log(newString.replace('w','ww'));
console.log(newString.split('r'));

//There is also a trim option start and end trim which removes spaces from front and back
