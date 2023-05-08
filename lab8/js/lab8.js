//index.js - Working with anonymous functions and callbacks
//author : Brandon Vindel (bvindelf@ucsc.edu)
//date : 05/08/2023

//define function
function multNum(x) {
    var results = x * 5;
    return results;
}

//test function
console.log("What is 69 times 5", multNum(69))
console.log("What is 96 times 5", multNum(96))

var array = [1, 5, 7, 10, 69, 96]
console.log("My array", array);

var result = array.map(multNum);
//should return [5, 25, 35, 50, 345, 480]
console.log("Test of products of numbers and 5:", result);

var result = array.map(function(x){
    var results = x ** x;
    return results;
})
//should return [1, 3125, 823543, 10000000000, 7.596040312163298e+126, 1.9862704051982796e+190]
console.log("The squares of all numbers in the array are:", result);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "Original Array: [" + array + "] </br>" +
"Numbers times 5: [" + array.map(multNum) + "] </br>" +
"Array Squared: [" + result + "]";
