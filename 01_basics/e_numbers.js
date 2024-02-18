const balance = new Number(1050000);

// console.log(balance.toFixed(2));
// const readableBalance = balance.toFixed(2);
// console.log(readableBalance.toLocaleString('en-IN'));

//++++++++++++Math++++++++++++

// console.log(Math);
// console.log(Math.round(4.6));
// console.log(Math.ceil(5.6));
// console.log(Math.floor(8.2));
// console.log(Math.abs(-55));
// console.log(Math.max(4,5,8,9));
// console.log(Math.min(4,5,8,9));

// a special one called Random
console.log(Math.random()*10);

//to create randoms between a given range
const max =20;
const min =10;
console.log(Math.floor((Math.random() * (max - min + 1 )) + min)); 
