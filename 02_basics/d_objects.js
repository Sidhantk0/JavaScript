//In this we learn about Objects of constructor types


//they both are correct ways to intialize an Object
const tinderUser = new Object();
const tinderUser1 = {};

tinderUser.id = "123abc";
tinderUser.name = "shivaJi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


//we can have nested Objects also
const nestedObject = {
    email: "asd@gmail.com",
    userFullName: {
        firstName: "Shiva",
        lastName: "Ji"
    }
}

// console.log(nestedObject);

//if you want to merge two objects together then it can be done as we did in array
// using spread method of three dots
// one using objects.assign({target object}, source object)

const obj1= {1:"a", 2:"b"};
const obj2= {3:"c", 4:"d"};

const mergedObject = Object.assign({},obj1, obj2);
const mergedObject2 = {...obj1, ...obj2};
// const mergedObject3= {obj1, obj2}  this isn't used because it will create object inside object
console.log(mergedObject2);


//During calls from backend the data will come in form of array storing objects
const users = [
    {
        name: "sid",
        Rollno: 3
    },
    {
        name: "siid",
        Rollno: 2
    },
    {
        name: "sidd",
        Rollno: 1
    }
]

users[1].Rollno //this is how you access data inside that

// if you want to do a loop through the coming data 
//first we will transform the keys in Array or values to array
console.log(Object.keys(tinderUser));
 const keysOfTinderUser = Object.keys(tinderUser);
 console.log(keysOfTinderUser[2]);

 console.log(Object.entries(tinderUser));    // This will create multidimensional array 
 // which will contain Arrays of Key and values and all those contained inside in an array


// To check whether any certain key is available in Object we do
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course ={
    coursename: "js",
    price: "999",
    Instructor: "Sid",
};

// course.Instructor

const {coursename: CN} = course;
//console.log(coursename);
console.log(CN);
// this is when you have to access the key many times we can use these names
// this is called de-structing of objects whenever you see {} used to access data 
// from objects then know de-structuring is being done.