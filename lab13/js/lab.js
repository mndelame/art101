/*
  FizzBuzz Program
  This program loops through numbers from 1 to 200 and checks the following conditions:
- If the number is divisible by 3, it prints "Fizz!"
- If the number is divisible by 5, it prints "Buzz!"
- If the number is divisible by 7, it prints "Boom!"
- If the number is divisible by more than one of 3, 5, or 7, it combines the words "Fizz", "Buzz", and "Boom" accordingly.
The results are outputted to a div with id 'output'.
  Created by: Madison Grace
  Date: November 18, 2024
*/


function fizzBuzz() {
    let oneLongString = ""; // This will hold the accumulated output string
    
    for (let num = 1; num <= 200; num++) {
        let str = ""; // Reset the string for each number
        
        // Check divisibility for 3, 5, and 7
        if (num % 3 === 0) {
            str += "Fizz";
        }
        if (num % 5 === 0) {
            str += "Buzz";
        }
        if (num % 7 === 0) {
            str += "Boom";
        }
        
        // If no conditions are met, just show the number
        if (str === "") {
            str = num;
        } else {
            str += "!"; // Add exclamation mark for "Fizz", "Buzz", or "Boom"
        }

        // Append the result to the oneLongString with line breaks
        oneLongString += "<p>" + str + "</p>";
    }

    // After the loop, output the accumulated string to the output div
    $("#output").html(oneLongString);
}

// Call the fizzBuzz function to execute the logic
fizzBuzz();
