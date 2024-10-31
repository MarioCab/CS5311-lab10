/**
 * Script to process the submitted form data of the form in file
 * pricing.html
 */

// Event listener to check input for valid number of guests.
document
  .getElementById("num-guests")
  .addEventListener("focusout", validateGuestInput);

// Event listener to check input for valid number of nights.
document
  .getElementById("num-nights")
  .addEventListener("focusout", validateNightInput);

/**
 * Checks to see if the user input for guests is valid, based on the result, different elements are displayed
 */
function validateGuestInput() {
  let numGuests = document.getElementById("num-guests").value;
  let guestsError = document.getElementById("guests-error");

  if (Number.parseInt(numGuests) <= 0 || numGuests === "") {
    guestsError.classList.remove("display-none");
    return false;
  } else {
    guestsError.classList.add("display-none");
    return true;
  }
}

/**
 * Checks to see if the user input for nights is valid, based on the result, different elements are displayed
 */
function validateNightInput() {
  let numNights = document.getElementById("num-nights").value;
  let nightsError = document.getElementById("nights-error");

  if (Number.parseInt(numNights) < 2 || numNights === "") {
    nightsError.classList.remove("display-none");
    return false;
  } else {
    nightsError.classList.add("display-none");
    return true;
  }
}

function validateAllInputs() {
  let priceResult = document.getElementById("price-result").value;

  if (validateNightInput == false || validateGuestInput == false) {
    priceResult.classList.add("display-none");
    return;
  } else return true;
}

function calculateCosts() {
  let x = Number.parseInt(numGuests);
  let personPerNight = x * 30;
  let breakfastPerPerson = x * 10;
  let dinnerPerPerson = x * 20;
  let preTaxTotal = personPerNight + breakfastPerPerson + dinnerPerPerson;
  let taxes = preTaxTotal * 0.21;
  let total = preTaxTotal + taxes;

  while (validateAllInputs() == true) {
    
  }
}
