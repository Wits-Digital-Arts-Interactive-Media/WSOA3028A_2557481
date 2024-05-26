document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scroll-down-button").addEventListener("click", function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
});
