//const sum1 = (a+b) => a + b;

//const isEven = (num) => num % 2 === 0 ; 

// console.log (isEven(8))

// const isDividedByFour = (num) => num % 4 === 0 ; 

// console.log (isDividedByFour(8))

// Filter Function 

 
const isEven = (num) => num  % 2 === 0;

let number = [1, 23, 44, 33, 56, 664, 694, 346, 446, 789, 805, 22];

let  evenNumbers = number.filter((data) =>  isEven(data));
let  oddNumbers = number.filter((data) =>  !isEven(data));

console.log ("evenNumbers =>" , evenNumbers);
console.log ("evenNumbers =>" , oddNumbers);


