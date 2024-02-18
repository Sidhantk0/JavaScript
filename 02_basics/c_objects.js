// literals and costructors : literals not Singleton
// constructors contain singleton
// Object.create : way to create constructors

const SymVar = Symbol("key1");

//object literals
const juser= {
    name: "sid",
    section: "b",
    Rollno: 20,
    [SymVar]: "adrenaline",   //this is way to show symbols inside objects
    subjects: ["sci", "maths", "bio"],
    "grades": "B"  //this is also a way to assign keys
    //keys in the backend are automatically treated as strings
}


//the main effect to write keys like this is accessing is different for them
console.log(juser["grades"]);  // not majorly used to access...  '.' is majorly used to access
console.log(juser[SymVar]);   // majorly done for interview to ask about using symbol as key in object

//if want to freeze any change to obect we do
// Object.freeze(juser);

//creating functions
juser.judge = function(){
    console.log(`hey ${this.name} your grade is ${this.grades}`);
} //using this will give us access to every property of Object

console.log(juser.judge());