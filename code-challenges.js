// ASSESSMENT 1: Coding Practical Questions
// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Pseudo coding your process is required.
// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
  //Declare a function that takes two parameters, which will both be strings.
  
  // Determine which string has more characters by using the .length method, which returns the number of characters in a string.

   // Use conditionals to compare the length of the first  string to the length of the second string. 

   // Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// Create a function that takes in a number parameter.

// Evaluate the number with conditionals to determine if it is above, at, or below boiling point.

// Use the provided boiling point temperature of 212 degrees Fahrenheit as the threshold for comparison.

// Return a string with the temperature and its relation to boiling point.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

  // Create a function that takes two arrays as parameters

  // Combine the arrays using the spread operator or concat() method

  // Get the length of the combined array using the length property

  //  Return the length of the combined array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
  
  //Create a function that takes in a string parameter.

  // Declare a variable to hold the reversed string and assign an empty string to it.

  // Using a for loop, start at the end of the input string and iterate backwards until the beginning.
 
  // With each iteration, add the current character to the reversed string variable.

  // Return the reversed string variable.

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

  //Define a function that takes two parameters - an array and a value.
  
  //Use the .lastIndexOf() method to find the last index of the given value in the array.
  
  //Return the last index of the given value.
  
  //Test the function using the given test variables.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]