// 1. Create a variable that is equal to an empty array and push the values 1-10 into the array using a For Loop.

// Setup
var myArray = [];

for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray)

// 2. Repeat the same steps as above, but you're going to use a While Loop instead, push the values 1-10(inclusive) in descending order.

// Setup
var myArray = [];

var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray)

//3. Again set a Variable to an empty array but this time push a set of odd numbers 11-21 into the array using a For Loop.

// Setup
var myArray = [];

for (var i = 11; i <= 21; i += 2) {
  myArray.push(i);
}

console.log(myArray)

// 4. This time around you'll be pushing values onto an array but you will be counting backwards instead! Same set up as the other three questions, but use the numbers 15-1 and count backwards by 2.

// Setup
var myArray = [];

for (var i = 15; i >= 1; i -= 2) {
  myArray.push(i);
}

console.log(myArray)