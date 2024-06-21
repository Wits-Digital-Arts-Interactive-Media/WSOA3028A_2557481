// Define original background color of the document body
const originalColor = "rgb(59,57,53)";

// Function to change the background color to a random color from a predefined list
function changeBackgroundColor() {
    const colors = [
        "rgba(200,194,172,255)", 
        "rgba(146,156,145,255)", 
        "rgba(159,139,130,255)", 
        "rgba(92,98,110,255)", 
        "rgba(56,56,56,255)"    
    ];

    // Select a random color 
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Set the document body's background color to the randomly selected color
    document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color to the original color
function resetBackgroundColor() {
    // Set the document body's background color to the original color
    document.body.style.backgroundColor = originalColor;
}

// Add an event listener to the button to change the background color when clicked
document.getElementById('change-background').addEventListener('click', changeBackgroundColor);
// Add an event listener to the button  to reset the background color when clicked
document.getElementById('reset-background').addEventListener('click', resetBackgroundColor);

