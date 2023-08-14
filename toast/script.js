(function() {
    'use strict';

    // Constructor function for the Toast plugin
    function Toast() {
        // Create the toast container element
        this.toastContainer = document.createElement("div");
        this.toastContainer.className = "toast";
        document.body.appendChild(this.toastContainer);
    }

    Toast.prototype.show = function(message, duration) {
        // Show the toast with the given message and duration
        this.toastContainer.textContent = message;
        this.toastContainer.style.display = "block";
        this.toastContainer.style.opacity = "1";

        // Set a timeout to hide the toast after the specified duration
        setTimeout(() => {
            this.hide();
        }, duration);
    };

    Toast.prototype.hide = function() {
        // Hide the toast
        this.toastContainer.style.opacity = "0";

        // Set a timeout to remove the toast from the DOM after the transition
        setTimeout(() => {
            this.toastContainer.style.display = "none";
        }, 300);
    };

    // Export the Toast as a global function or as an ES module
    if (typeof window === 'object') {
        window.Toast = Toast;
    }
    if (typeof exports === 'object') {
        module.exports = Toast;
    }
})();
