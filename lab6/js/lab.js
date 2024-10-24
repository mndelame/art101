// index.js - Arrays and Objects
// Author: Madison Grace
// Date: October 24, 2024

// Define Variables
myTransport = ["Bus", "Uber's", "rides from friends"];

// create an object for my main ride
myMainRide = {
  make: "Bus",
  model: "ZX5 40'",
  color: "white",
  year: 2020,
    // we can define a function within our object (called a method)
    // that uses the value of the year above (using this.year)
  age: function() {
      return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// this little trick allows us to write an abject to the document
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");






// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
