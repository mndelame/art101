
/*
  Sorting Hat Program
  This program assigns a Hogwarts house based on the length of the input string.
  Created by: Madison Grace
  Date: November 14, 2024
*/

function sortingHat(str) {
    // Count the letters in the string
    let length = str.length;

    // Use modulus to determine the house
    let mod = length % 4;

    // Assign the house based on mod value
    if (mod === 0) {
        return "Gryffindor";
    } else if (mod === 1) {
        return "Ravenclaw";
    } else if (mod === 2) {
        return "Slytherin";
    } else if (mod === 3) {
        return "Hufflepuff";
    }
}

// Attach click listener to the button
document.getElementById("button").addEventListener("click", function () {
    // Get the value of the input field
    let name = document.getElementById("input").value;

    // Determine the house using sortingHat function
    let house = sortingHat(name);

    // Clear any previous output (optional)
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // This clears all existing content in the output div

    // Create a new paragraph element
    let output = document.createElement("p");
    output.textContent = "The Sorting Hat has sorted you into " + house + "!";

    // Style the paragraph
    output.style.fontWeight = "bold";
    output.style.color = "purple";

    // Append the paragraph to the output div
    outputDiv.appendChild(output);
});






