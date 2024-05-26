const originalColor = "rgb(59,57,53)";

function changeBackgroundColor() {
    const colors = [
        "rgba(200,194,172,255)",
        "rgba(146,156,145,255)", 
        "rgba(159,139,130,255)", 
        "rgba(92,98,110,255)", 
        "rgba(56,56,56,255)"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = originalColor;
}

// Event listeners for the buttons
document.getElementById('change-background').addEventListener('click', changeBackgroundColor);
document.getElementById('reset-background').addEventListener('click', resetBackgroundColor);
