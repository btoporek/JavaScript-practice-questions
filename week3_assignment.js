// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array
// Do not use numbers to reference the last element, find it programmatically,
// ages[7] – ages[0] is not allowed!
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

let subtract = ages.slice(-1) - ages[0];
console.log(subtract); // prints 90

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(100);
console.log(ages); // prints [ 3, 9, 23, 64, 2, 8, 28, 93, 100 ]
subtract = ages.slice(-1) - ages[0]; // subtracts first element from last element
console.log(subtract); // prints 97

// Use a loop to iterate through the array and calculate the average age.
let sum = 0;
ages.forEach((age) => (sum += age)); // creates a sum of all elements
console.log(sum); // prints 330
let averageAge = sum / ages.length; // assigns averageAge to divide the sum by the length of the array
console.log(Math.floor(averageAge)); // prints average age rounded down to integer 36

// ------------------------------------------------------------------------------------------------------------//

// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// Use a loop to iterate through the array and calculate the average number of letters per name.
let totalCharacters = 0;
for (let i = 0; i < names.length; i++) {
  totalCharacters += names[i].length; //adds up the total characters
}
let averageLetters = totalCharacters / names.length; //divide total characters by array length
console.log(averageLetters); // Output: 3.8333333333333335
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log(names.join(" ")); // Not sure if this counts as a loop, but .join concatenates all elements in an array, and I just designate a space in between each.
// Above output: Sam Tommy Tim Sally Buck Bob

// ------------------------------------------------------------------------------------------------------------//

// 3. How do you access the last element of any array?
// You can use the slice method to call the last item of an array, like below:
const petNames = ["Jack", "Stella", "Luna"];

console.log(petNames.slice(-1)); // output: 'Luna'

// ------------------------------------------------------------------------------------------------------------//

// 4. How do you access the first element of any array?
/* You can access the first element in an array by using [] to index the location of the first element, which is always 0.
Below is an example array, where I also make a variable for hotSeason that calls the first element in my array using the index in []. */
let seasons = ["Summer", "Fall", "Winter", "Spring"];
let hotSeason = seasons[0];
console.log(hotSeason);

// ------------------------------------------------------------------------------------------------------------//

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example: namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
const namesArray = ["Mike", "Ashlee", "Sonjia"];
const namesLengths = namesArray.map((namesArray) => namesArray.length); // uses .map method to create new array by calling the function to identify each element's length
console.log(namesLengths); // Output: [ 4, 6, 6 ]

// ------------------------------------------------------------------------------------------------------------//

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfLengths = namesLengths.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // uses /reduce method to add the elements in my array
console.log(sumOfLengths); // Output: 16

// ------------------------------------------------------------------------------------------------------------//

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function twoParameters(word, n) {
  return word.repeat(n);
}
console.log(twoParameters("Hello", 3)); // prints HelloHelloHello

// ------------------------------------------------------------------------------------------------------------//

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Brittni", "Toporek")); // prints Brittni Toporek

// ------------------------------------------------------------------------------------------------------------//

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const arrayOfNumbers = [26, 43, 15, 62];
let sumOfArray = arrayOfNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumOfArray); // Output: 146
function isSumOver100() {
  // Name of function isSumOver100
  if (sumOfArray > 100) {
    // Conditions to state sum of array is over 100
    return true; // statement to return true if it is over 100
  } else {
    return false; // otherwise return false if it isn't
  }
}
console.log(isSumOver100()); // Output: true

// ------------------------------------------------------------------------------------------------------------//

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
const arrayOfTheseNumbers = [26, 43, 62]; // New array of numbers
let sumOfThisArray = arrayOfTheseNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // Adds up all elements in array
console.log(sumOfThisArray); // Output: 131
function averageNumber() {
  // Names function averageNumber
  let average = sumOfThisArray / arrayOfTheseNumbers.length; // names value average by dividing the vaue sumOfThisArray by the length of the array
  return average; // tells function to return the results of above value
}
console.log(averageNumber()); // Output: 43.666666666666664

// ------------------------------------------------------------------------------------------------------------//

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const array1 = [26, 43, 62]; // first array
const array2 = [15, 20, 34]; // second array
let sumOfArray1 = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // adds up first array elements
console.log(sumOfArray1); // Output: 131
let sumOfArray2 = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // adds up second array elements
console.log(sumOfArray2); // Output: 69
function compareAverages() {
  // names function compareAverages
  let average1 = sumOfArray1 / array1.length; // finds average for first array and assigns value
  let average2 = sumOfArray2 / array2.length;
  {
    // finds average for second array and assigns value
    if (average1 > average2) {
      // conditional statement comparing first and second array averages
      return true; // function is told to return true if condition is true
    }
  }
}
console.log(compareAverages()); // Output: true

// ------------------------------------------------------------------------------------------------------------//

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(true, 11)); //prints true

// ------------------------------------------------------------------------------------------------------------//

// 13. Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.
function nextStep(status) {
  if (status === "I got it!") {
    return "Ready for another function.";
  } else {
    return "Keep practicing this one.";
  }
}
console.log(nextStep("I got it!"));
/* The above function was to test my knowledge of writing a multi-line function. 
      When calling the function, it tests to see what status is written, and then returns a string to direct my next steps. */

const areYouSure = (response) => {
  if (response === "Yes, I've got this!") {
    return "Okay, now try a single-line function.";
  } else {
    return "You still need more practice on this one.";
  }
};
console.log(areYouSure("Yes, I've got this!"));
/* The above function was my attempt to practice another type of function suing the arrow syntax, 
    as directed by my previous function. This was to test my ability to write a function
    in alternate ways to see if I understand other elements.
    */

const areYouReallySure = (answer) =>
  answer === "yes" ? "Move on to arrays." : "Keep practicing functions.";

console.log(areYouReallySure("yes"));
/* The above function was my final attempt to practice one last type of function using the arrow syntax 
    and writing it as a single-line function, as directed by my previous function. 
    This was to test my ability to write another alternate function
    to see if I understand these concepts.
    */
