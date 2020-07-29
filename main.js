/******************
 * YOUR CODE HERE *
 *****************/

 // Make function that will take three arguments
 // Inside the parameters the start argument is equal to zero and end is equal to str.length so that if no argument is made it will default to those values.
 // Make empty string for the result.
 // Loop through the str and add to the results and retrun
const slice = function(str, start = 0, end = str.length ) {
  let result = '';

  for (let i = start; i < end; i++) {
    result = result + str[i];
  }
  return result;
}

// Make function with a str and num inside parameters. Num will be the number of times the string will repeat.
// Loop through the string and set the loop to stop at the num given.
// Add to the result empty string.
// Return result.
const repeat = function(str, num) {
  let result = '';
  
  for (let i = 0; i < num; i++) {
    result = result + str;
  }
  return result
}


// Make function that takes in an arr and item in parameters. Item will be used to check if the array holds the given item.
// Loop through the array.
// Check if the arr[i] is equal to the item and return true.
// Return false
const includes = function(arr, item) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
