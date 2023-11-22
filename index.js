// Get the button element
let convertButton = document.getElementById("convertButton");

// Add event listener to the button
convertButton.addEventListener("click", function() {
    convertRGBtoHex();
});

// Function to convert RGB to Hex
function convertRGBtoHex() {
    // Get the values entered by the user for RGB components
    let redInput = document.getElementById("red").value;
    let greenInput = document.getElementById("green").value;
    let blueInput = document.getElementById("blue").value;

    // Validate the inputs
    if (
        isNaN(redInput) || isNaN(greenInput) || isNaN(blueInput) ||
        redInput < 0 || redInput > 255 ||
        greenInput < 0 || greenInput > 255 ||
        blueInput < 0 || blueInput > 255
    ) {
        alert("Please enter valid RGB values (0-255) for red, green, and blue components.");
        return;
    }

    // Call the function to convert RGB to Hex
    let hexColor = convertRGBtoHexColor(parseInt(redInput), parseInt(greenInput), parseInt(blueInput));

    // Display the result in the DOM
    displayResult(hexColor);
}

// Function to convert RGB to Hex
function convertRGBtoHexColor(red, green, blue) {
    // Convert each RGB component to Hex and concatenate them
    let hexRed = red.toString(16).padStart(2, '0');
    let hexGreen = green.toString(16).padStart(2, '0');
    let hexBlue = blue.toString(16).padStart(2, '0');

    return `#${hexRed}${hexGreen}${hexBlue}`;
}

// Function to display the result in the DOM
function displayResult(hexColor) {
    // Get the result element
    let resultElement = document.getElementById("result");

    // Display the result in the DOM
    resultElement.innerHTML = "Hex Color: " + hexColor;
}

 
