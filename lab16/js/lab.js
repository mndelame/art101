
/**
 * XKCD Comic Viewer
 * This script fetches the latest XKCD comic using the XKCD API and displays it on the webpage.
 * Created by: Madison Grace
 * Date: November 14, 2024
*/

let endpoint = "";
let comicNumber = 1; // Start from the first comic

// Get the endpoint for the comic number
function getEndpoint(number) {
    endpoint = "https://api.allorigins.win/get?url=" + encodeURIComponent(`https://xkcd.com/${number}/info.0.json`);
    console.log("Generated Endpoint:", endpoint);
}

// Fetch data from the API
function getData(endpoint) {
    $.ajax({
        url: endpoint, // The URL for the request
        type: "GET",   // HTTP method
        dataType: "json", // The type of data expected
        success: function (data) {
            handleData(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Handle the API response
function handleData(data) {
    console.log("Raw response:", data); // Debug raw response
    let comicObj = JSON.parse(data.contents); // Parse wrapped data
    console.log("Parsed Comic Object:", comicObj);

    $("#output").show(); // Make the output container visible
    $("#comic-title").text(comicObj.title); // Update the title
    $("#comic-img").attr("src", comicObj.img); // Update the image
    $("#comic-img").attr("alt", comicObj.alt); // Set alt text
}

// Output the comic
function outputComic(comicNumber) {
    $("#comic-number").text(`Comic Number: ${comicNumber}`); // Show comic number
    getEndpoint(comicNumber); // Generate the endpoint
    getData(endpoint); // Fetch and display data
}

// Handle "Next Comic" button click
$("#next").click(function () {
    comicNumber++;
    outputComic(comicNumber); // Load next comic
});

// Initialize with the first comic
outputComic(comicNumber);
