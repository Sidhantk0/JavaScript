let name1 = "rahu";
console.log(typeof name1);

let scoreinString = Number(name1);
console.log(typeof scoreinString);
console.log(scoreinString);

/*
Output of the above: 
string
string
number
NaN

"33" => 33 when string to number conversion is done
"33sfs" => NaN Because trying to convert string to Number
true => 1, false => 0

*/

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn); // output will be 0
console.log(booleanIsLoggedIn); // output will be false

let a=3;
let b= a++;

let x=3;
let y= ++x;
console.log(b + " - " + y + " - " + a);
