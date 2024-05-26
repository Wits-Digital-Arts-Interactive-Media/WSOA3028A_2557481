document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scroll-up-button").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});