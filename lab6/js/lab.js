// index.js - Creating Arrays and Objects
// Author: Brandon Vindel (bvindelf@ucsc.edu)
// Date: 05/01/2023

//Define Variable
var myTransport = ["Walking", "Running", "Bus", "Driving"];

// Objects
var myMainRide = {
  make: 'Honda',
  model: 'Accord',
  color: 'Grey',
  year: 2010,
  age: function() {
      return 2023 - this.year;
  }
};
// Output
document.writeln("I mainly get around by: " + myTransport, "</br>");

document.writeln("My main source of transportation is: <pre>",
    JSON.stringify(myMainRide,null, '\t'), "<pre>");