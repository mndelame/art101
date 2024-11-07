/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Madison Grace De La Merced
   Date: November 7, 2024
*/

function generateRandomText() {
    const text = "When my time comes around Lay me gently in the cold, dark earth. No grave can hold my body down I'll crawl home to her";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Hozier text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Hozier-like text
    return text.slice(randStart, randStart + randLen);
  }

  $("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();

    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
