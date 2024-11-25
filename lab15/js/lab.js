/**
 * Lab 15: Fetching data from an API using AJAX
 * Author: Madison Grace
 * Date: November 25, 2024
 * Description: This script uses jQuery to handle button clicks and fetch data from an external API.
 */

$(document).ready(function () {
    // Add a click event listener to the button
    $('#activate').click(function () {
        // Add content to the output div
        $('#output').html('<p>Button activated! Fetching data...</p>');

        // Fetch data from the Chuck Norris API
        $.ajax({
            url: 'https://api.chucknorris.io/jokes/random', // API endpoint
            method: 'GET', // HTTP method
            success: function (data) {
                // Output the joke to the div
                $('#output').html(`<p>${data.value}</p>`);
            },
            error: function (xhr, status, error) {
                // Handle any errors
                $('#output').html(`<p>An error occurred: ${error}</p>`);
            }
        });
    });
});
