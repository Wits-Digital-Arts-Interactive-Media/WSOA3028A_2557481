function revealText() {
    // Retrieve the element with the id "hiddenText"
    var hiddenText = document.getElementById("hiddenText");

    // Check if the style display of hiddenText is "none" or empty
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {

        hiddenText.style.display = "block";
    } else {
        // If hiddenText is visible, hide it by setting display to "none"
        hiddenText.style.display = "none";
    }
}
