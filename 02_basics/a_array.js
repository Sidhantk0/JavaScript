//you can define array directly
 const myArr= [0,1,2,3,4,5];
 const car= new Array(1,2,3,4,5);
//two ways to define array
 //console.log(car[0]);

//we use push, pop, slice, splice, unshift, shift
//push- to enter data in arrray
// pop- to pop 
// slice- to get arrray from certain index to certain index
//splice- removes the data from original array from the given range and show it on screen
//unshift- adds any number you want in front of the array
//shift- removes first number from array

// **shift doesn't rquire any value to be passed

car.push("alto");
car.push("tata");
car.push("suzuki");
console.log(car);
car.pop();

console.log(car.slice(5,7));
car.splice(0,5);
console.log(car);

car.unshift("Hyundai");
console.log(car);
