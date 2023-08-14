(function() {
    'use strict';

    // Constructor function for the Drawer plugin
    function Drawer(drawerId, openButtonId) {
        // Store the drawer and open button elements
        this.drawer = document.getElementById(drawerId);
        this.openButton = document.getElementById(openButtonId);

        // Initialize the drawer
        this.initDrawer();
    }

    Drawer.prototype.initDrawer = function() {
        // Add click event listener to the open button
        this.openButton.addEventListener('click', this.toggleDrawer.bind(this));
        
        // Add a click event listener to the document to close the drawer when clicking outside
        document.addEventListener('click', this.closeDrawerOutside.bind(this));
    };

    Drawer.prototype.toggleDrawer = function(event) {
        // Prevent the default behavior of the button click
        event.preventDefault();
        // Toggle the "open" class to show/hide the drawer
        this.drawer.classList.toggle('open');
    };

    Drawer.prototype.closeDrawerOutside = function(event) {
        // Check if the clicked element is not inside the drawer or the open button
        if (!this.drawer.contains(event.target) && event.target !== this.openButton) {
            // Close the drawer
            this.drawer.classList.remove('open');
        }
    };

    // Export the Drawer as a global function or as an ES module
    if (typeof window === 'object') {
        window.Drawer = Drawer;
    }
    if (typeof exports === 'object') {
        module.exports = Drawer;
    }
})();
