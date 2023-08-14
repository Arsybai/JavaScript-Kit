// BottomNavigation.js
(function() {
    'use strict';

    // Constructor function for the BottomNavigation plugin
    function BottomNavigation(navId) {
        // Store the bottom navigation element
        this.bottomNav = document.getElementById(navId);

        // Initialize the bottom navigation
        this.initBottomNavigation();
    }

    BottomNavigation.prototype.initBottomNavigation = function() {
        // Add click event listeners to navigation items
        const navItems = this.bottomNav.getElementsByClassName('nav-item');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener('click', this.handleNavItemClick.bind(this));
        }
    };

    BottomNavigation.prototype.handleNavItemClick = function(event) {
        // Remove the "active" class from all navigation items
        const navItems = this.bottomNav.getElementsByClassName('nav-item');
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }

        // Add the "active" class to the clicked navigation item
        event.currentTarget.classList.add('active');
    };

    // Export the BottomNavigation as a global function or as an ES module
    if (typeof window === 'object') {
        window.BottomNavigation = BottomNavigation;
    }
    if (typeof exports === 'object') {
        module.exports = BottomNavigation;
    }
})();
