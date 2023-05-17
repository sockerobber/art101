//Title: Lab 11 - Libraries and jQuery
//Author: Brandon Vindel (bvindelf@ucsc.edu)
//Date: 05/16/23

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenge").append("<button id='c-button'>Change background</button>");
$("#problem").append("<button id='p-button'>Change background</button>");
$("#reflection").append("<button id='r-button'>Change Background</button>");

// Add to your previous JavaScript file:
// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
$("#c-button").click(function(){
  $(this).parent().toggleClass("color-back");
})

$("#p-button").click(function(){
  $(this).parent().toggleClass("color-back");
})

$("#r-button").click(function(){
  $(this).parent().toggleClass("color-back");
})

//Make a button that changes another button's color and vice versa. 
//Pressing the button should make the color change back to default.

$("#button1").click(function() {
    $("#button2").toggleClass("button-color");
 });
  
$("#button2").click(function() {
    $("#button1").toggleClass("button-color");
});