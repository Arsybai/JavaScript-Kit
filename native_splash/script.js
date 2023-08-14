document.addEventListener("DOMContentLoaded", function () {
    // Hide the splash screen and show the content after a delay (simulate loading)
    setTimeout(function () {
        const splashElement = document.getElementById("splash");
        const contentElement = document.getElementById("content");

        // Fade out the splash screen
        splashElement.style.opacity = 0;
        
        // Fade in the content
        contentElement.style.opacity = 1;

        // Hide the splash screen after the fade-out animation completes
        splashElement.addEventListener("transitionend", function () {
            splashElement.style.display = "none";
        });
    }, 3000); // Adjust the delay (in milliseconds) to simulate loading time
});
