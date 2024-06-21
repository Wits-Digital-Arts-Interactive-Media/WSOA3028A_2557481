// Wait for the entire DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the class 'scroll-up-button' and add a click event listener to it
    document.querySelector(".scroll-up-button").addEventListener("click", function() {
        // When the 'scroll-up-button' is clicked, smoothly scroll the window to the top of the page
        window.scrollTo({
            top: 0, // Scroll to the top of the page (0 position)
            behavior: "smooth" 
        });
    });
});
