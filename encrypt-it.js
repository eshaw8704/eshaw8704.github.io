/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the page by setting up event listeners for the buttons.
   */
  function init() {
    console.log("Window loaded!");
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * Handles the "Encrypt-It!" button click. Reads the input textarea,
   * applies the selected cipher, and displays the result.
   */
  function handleClick() {
    let text = document.getElementById("input-text").value;
    let cipherType = document.getElementById("cipher-type").value;
    let encrypted = "";
    if (cipherType === "shift") {
      encrypted = shiftCipher(text);
    }
    document.getElementById("result").textContent = encrypted;
  }

  /**
   * Handles the "Reset" button click. Clears the input textarea and result.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where each letter is
   * shifted alphabetically ahead by 1 letter, and 'z' is shifted to 'a'.
   * @param {string} text - The input text to encrypt.
   * @returns {string} The shift-ciphered text.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        result += String.fromCharCode(letter + 1);
      }
    }
    return result;
  }

})();
