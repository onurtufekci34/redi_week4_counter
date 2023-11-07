// Step 2 - Get the elements by id and store them in a variable with a logical name.
const countInput = document.getElementById("countInput");
const startButton = document.getElementById("startButton");
const countOutput = document.getElementById("countOutput");

// Step 3 - Add an Event Listener on the button.
startButton.addEventListener("click", startCounting);

// Step 4 - Create a JavaScript function named startCounting() that reads the user input.
function startCounting() {
  // 4.1 - Save the input value in Local Storage with the key "lastInput".
  const userInput = countInput.value;
  localStorage.setItem("lastInput", userInput);

  // 4.2 - Display the user input in the countOutput element.
  countOutput.innerHTML = userInput;

  // Check if the input is a valid number
  if (!isNaN(userInput) && userInput > 0) {
    // Convert the input to a number and use it as the initial count.
    let count = parseInt(userInput);

    // 4.3 - Use setInterval to start the countdown and update the UI every 1 second.
    const intervalId = setInterval(function () {
      if (count === 0) {
        // 4.3.1 - Countdown complete.
        countOutput.innerHTML = "Countdown complete!";
        clearInterval(intervalId); // Stop the countdown when it reaches 0.
      } else {
        // Update the count and display it in the countOutput element.
        countOutput.innerHTML = count;
        count -= 1;
      }
    }, 1000);
  } else {
    // Handle invalid input (not a number or less than or equal to 0).
    countOutput.innerHTML = "Invalid input. Please enter a valid positive number.";
  }
}

// Check if there's a last input in Local Storage and pre-fill the input field.
const lastInput = localStorage.getItem("lastInput");
if (lastInput) {
  countInput.value = lastInput;
}
