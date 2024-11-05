/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
   Requirements: jQuery must be loaded for this script to work.

   Author: Mads De La Merced
   Date: November 2024
*/

// Description

// add button to challenge section

$("#challenge").append("<button id= 'button-challenge'>Make Special</button");
    // add click listener to the section
$("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
});
 
// add button to problems sections

$("#problems").append("<button id= 'button-problems'>Make Special</button");
    // add click listener to the section
$("#button-problems").click(function(){
        $("#problems").toggleClass("special");
});

// add button to reflection section

$("#reflection").append("<button id= 'button-reflection'>Make Special</button");
    // add click listener to the section
$("#button-reflection").click(function(){
        $("#reflection").toggleClass("special");
});

// add button to results section

$("#results").append("<button id= 'button-results'>Make Special</button");
    // add click listener to the section
$("#button-results").click(function(){
        $("#results").toggleClass("special");
});