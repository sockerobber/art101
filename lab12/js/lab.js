//Title: Lab 12 - Conditionals
//Author: Brandon Vindel (bvindelf@ucsc.edu)
//Date: 05/22/23

//Create a function sortingHat()
//that takes a string as an argument: function sortingHat(str)
//counts the letters in str and assigns it to a variable length
//uses modulus (% operator) to get the remainder with 4: mod = length % 4;
//mod will now be a value between 0 and 3
//create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }

    else if (mod == 1) {
        return "Ravenclaw"
    }

    else if (mod == 2) {
        return "Slytherin"
    }

    else if (mod == 3) {
        return "Hufflepuff"
    }
}

//Create an click listener attached to #button
//that gets the value of #input and assigns it to a variable name
//runs sortingHat(name) and stores the result in a variable house
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has placed you in house " + house + "</p>";
    document.getElementById("output").innerHTML = newText;

})