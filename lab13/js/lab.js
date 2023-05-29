//Title: Lab 13: Loops
//Author: Brandon Vindel (bvindelf@ucsc.edu)
//Date: 05/24/23

//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, if should print "Fizz!"
//If the number is a multiple of 5, it should print "Buzz!"
//If the number is a multiple of 7, it should print "Boom!"
//If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. 
//For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.

//Make it so the output of your program appears in your output div. 
//One way to do this is to compile one long string as you output numbers. Something like: 
//oneLongString += num + " Fizz!<br>"; 

//Then after you've run through all the numbers, output the str at the end to your output div using:
//$("#output").html(oneLongString);

$(document).ready(function() {
    
    function fizzBuzz() {
        var oneLongString = "";
        
        for (var i = 1; i <= 200; i++) {
            var result = "";
            if (i % 3 === 0) {
                result += "Fizz";
            }
            if (i % 5 === 0) {
                result += "Buzz";
            }
            if (i % 7 === 0) {
                result += "Boom";
            }
            if (result === "") {
                result = i; 
            }
            oneLongString += result + "<br>";
        }
        $("#output").html(oneLongString);
    }

    fizzBuzz();
});


