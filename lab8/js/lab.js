// index.js - Anon Functions and Callbacks
// Author: Madison Grace
// Date: October 31, 2024

function isEven(x){
    return (x % 2==0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isEven);
    // should return [true , false, true, true, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
    // should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array:", result);





 