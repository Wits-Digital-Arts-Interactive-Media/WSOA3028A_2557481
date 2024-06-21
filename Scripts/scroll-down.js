// Wait for the entire DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the class 'scroll-down-button' and add a click event listener to it
    document.querySelector(".scroll-down-button").addEventListener("click", function() {
        // When the 'scroll-down-button' is clicked, smoothly scroll the window to the height of the viewport
        window.scrollTo({
            top: window.innerHeight, // Scroll to the position equal to the height of the viewport
            behavior: "smooth" 
        });
    });
});

