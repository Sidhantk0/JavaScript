let myDate= new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); 

let datetoDay1 = new Date(2024,1,18);
console.log(datetoDay1.toDateString()); //to show only date and week
console.log(datetoDay1.toLocaleString()); //to show date and time both

//to get date month individually we use
let d1 = new Date();
console.log(d1.getHours());
console.log(d1.getMonth()+1);

