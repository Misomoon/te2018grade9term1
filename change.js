const READLINE = require('readline-sync');



// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for

//let userInput = READLINE.question("Type anything and I'll repeat it back!");
// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for


let penniesTotal = READLINE.question('OwO whats this? Pennies? Pwease Insert (>w<)');

console.log(penniesTotal)
// declare, assign, and print how many quarters you can make out of the pennies
let quarters = Math.floor(penniesTotal/25);
console.log(quarters,'QUARTERS');




// declare, assign, and print how many dimes you can make out of the pennies


let dimes = Math.floor(penniesTotal%25/10);
console.log(dimes,'DIMES');


// declare, assign, and print how many nickels you can make out of the pennies


let nickels = Math.floor(penniesTotal%25%10/5);
console.log(nickels,'NICKELS');



// declare, assign, and print how many pennies are left over
let pennies = Math.floor(penniesTotal%25%10%5);
console.log(pennies,'PENNIES')



// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
 
