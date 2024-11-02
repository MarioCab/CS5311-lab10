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

// Event listener to check input for the cost field.
document
  .getElementById("price-button")
  .addEventListener("click", calculateCosts);

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

/**
 * Checks to see if the nights and the guests input are both valid
 */
function validateAllInputs() {
  let priceResult = document.getElementById("price-result").value;

  if (validateNightInput() == false || validateGuestInput() == false) {
    priceResult.classList.add("display-none");
    return;
  } else return true;
}

/**
 * Checks if dinner is added for the guests
 */
function isDinnerAdded() {
  let isDinnerChecked = document.getElementById("dinner").checked;

  if (isDinnerChecked) {
    return Number.parseInt(document.getElementById("num-guests").value);
  } else return 0;
}

/**
 * Checks if breakfast is added for the guests
 */
function isBreakfastAdded() {
  let isBreakfastChecked = document.getElementById("breakfast").checked;

  if (isBreakfastChecked) {
    return Number.parseInt(document.getElementById("num-guests").value);
  } else return 0;
}

/**
 * Calculates the total costs of the stay
 */
function calculateCosts() {
  let numGuests = document.getElementById("num-guests").value;
  let personPerNight = Number.parseInt(numGuests) * 30;
  let breakfastPerPerson = isBreakfastAdded() * 10;
  let dinnerPerPerson = isDinnerAdded() * 20;
  let preTaxTotal = personPerNight + breakfastPerPerson + dinnerPerPerson;
  let taxes = preTaxTotal * 0.21;
  let total = preTaxTotal + taxes;

  if (validateAllInputs() == true) {
    document.getElementById("price-value").innerHTML = preTaxTotal.toFixed(2);

    document.getElementById("taxes-value").innerHTML = taxes.toFixed(2);

    document.getElementById("total-value").innerHTML = total.toFixed(2);

    document.getElementById("price-result").classList.remove("display-none");
  }
}
