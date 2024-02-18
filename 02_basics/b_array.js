const arr= ["a","b","c"];
const arr1= ["x","y","z"];

// merging two arrays concat or spread (it's called this)
//they both will give a new array so use a variable to store the output
// note: if you try to assign array2 to array1 directly using equal sign 
//then it array2 will be stored in array1 as Array inside Array

const mergedArray = arr.concat(arr1);

const mergedarray2 = [...arr, ...arr1];

console.log(mergedArray);
console.log(mergedarray2);

// when you have a multidimensional array
//and you want to see all the elements we can use Flat
// this will also give us a new array
const arr2 =[1,2,3,4,[2,3,444, [43,55,66]],5];

const newMergedArray= arr2.flat(Infinity);
console.log(newMergedArray);


// Creating array from String
console.log(Array.isArray("sid"));  //to check for array
console.log(Array.from("sid"));  //convert sid to array

//we can create array by joining various variables
 let a= 1;
 let b=3;
 let c=4;

 console.log(Array.of(a,b,c));

