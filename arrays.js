/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */ 

// Your code here
var q1= ["image1.png", "image2.png", "image3.png"];

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var q2 = q1[0];
//console.log(q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
 var q3 = q1.length;
 //console.log(q3);
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var q4 = q1[2];
// console.log(q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var nums = [1,2,3,4];
// -------------------------------------------------
//                    for loop
// -------------------------------------------------
// var newArray =[];
// for(var i =0; i< nums.length; i++){
//     newArray.push(nums[i] +1);
//   }
// console.log(newArray);

// -------------------------------------------------
//                      MAP
// -------------------------------------------------

// var addOnetoEach = nums.map(function(number){
//   return number + 1;
// });
// console.log(addOnetoEach);

// -------------------------------------------------
//                    FOR EACH
// -------------------------------------------------

var newArray = [];
nums.forEach(function(number){ 
  newArray.push(number + 1);
});
console.log(newArray);

// -------------------------------------------------
// -------------------------------------------------





/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */
 
// Your code here
var sum = 0;
 // console.log(newArray);
 for (var i = 0; i < newArray.length; i++){
   sum += newArray[i];
 }
 console.log("The sum of the array from question 5 is: " + sum);
 var q6= sum/newArray.length;
 console.log("The average is: " + q6);
