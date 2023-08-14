(function() {
    'use strict';

    // Constructor function for the ShareButtonPlugin
    function ShareButtonPlugin() {
        // Create the share button element
        this.shareButton = document.createElement('button');
        this.shareButton.className = 'share-button';
        this.shareButton.innerHTML = '&#x21a9;'; // Unicode arrow symbol

        // Attach the click event listener to the share button
        this.shareButton.addEventListener('click', this.share.bind(this));

        // Append the share button to the body
        document.body.appendChild(this.shareButton);
    }

    ShareButtonPlugin.prototype.share = async function() {
        // Check if the Web Share API is supported in the browser
        if (navigator.share) {
            try {
                // Share the current URL using the Web Share API
                await navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.error('Web Share API is not supported in this browser.');
        }
    };

    // Export the ShareButtonPlugin as a global function or as an ES module
    if (typeof window === 'object') {
        window.ShareButtonPlugin = ShareButtonPlugin;
    }
    if (typeof exports === 'object') {
        module.exports = ShareButtonPlugin;
    }
})();
