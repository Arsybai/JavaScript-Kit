(function() {
    'use strict';

    // Constructor function for the PullToRefresh plugin
    function PullToRefresh(element, options) {
        // Store the target element for pull-to-refresh
        this.element = element;

        // Set default options
        this.options = Object.assign({
            refreshCallback: function() {},
            threshold: 80, // The threshold for triggering the refresh in pixels
        }, options);

        // Initialize the pull-to-refresh feature
        this.initPullToRefresh();

        // Track the current state
        this.isRefreshing = false;
        this.startY = 0;
        this.currentY = 0;
    }

    PullToRefresh.prototype.initPullToRefresh = function() {
        const refreshIndicator = document.createElement('div');
        refreshIndicator.classList.add('refresh-indicator');
        refreshIndicator.innerText = 'Pull to refresh';

        this.element.prepend(refreshIndicator);

        this.element.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.element.addEventListener('touchmove', this.onTouchMove.bind(this));
        this.element.addEventListener('touchend', this.onTouchEnd.bind(this));
    };

    PullToRefresh.prototype.onTouchStart = function(event) {
        if (this.isRefreshing) return;

        this.startY = event.touches[0].clientY;
        this.currentY = this.startY;
    };

    PullToRefresh.prototype.onTouchMove = function(event) {
        if (this.isRefreshing) return;

        this.currentY = event.touches[0].clientY;
        
        // Calculate the distance pulled down
        const distance = this.currentY - this.startY;

        // Update the refresh indicator
        const refreshIndicator = this.element.querySelector('.refresh-indicator');
        refreshIndicator.style.transform = `translateY(${distance}px)`;

        // Check if the distance is beyond the threshold
        if (distance > this.options.threshold) {
            refreshIndicator.innerText = 'Release to refresh';
        } else {
            refreshIndicator.innerText = 'Pull to refresh';
        }
    };

    PullToRefresh.prototype.onTouchEnd = function() {
        if (this.isRefreshing) return;

        const refreshIndicator = this.element.querySelector('.refresh-indicator');
        
        // Check if the distance pulled down is beyond the threshold
        if (this.currentY - this.startY > this.options.threshold) {
            this.isRefreshing = true;
            refreshIndicator.innerText = 'Refreshing...';
            
            // Trigger the refresh callback provided in the options
            if (typeof this.options.refreshCallback === 'function') {
                this.options.refreshCallback();
            }
        } else {
            refreshIndicator.innerText = 'Pull to refresh';
            refreshIndicator.style.transform = '';
        }

        // Reset the starting and current Y positions
        this.startY = 0;
        this.currentY = 0;
    };

    // Method to indicate that the refresh is completed
    PullToRefresh.prototype.done = function() {
        this.isRefreshing = false;

        // Reset the refresh indicator
        const refreshIndicator = this.element.querySelector('.refresh-indicator');
        refreshIndicator.innerText = 'Pull to refresh';
        refreshIndicator.style.transform = '';
    };

    // Export the PullToRefresh as a global function or as an ES module
    if (typeof window === 'object') {
        window.PullToRefresh = PullToRefresh;
    }
    if (typeof exports === 'object') {
        module.exports = PullToRefresh;
    }
})();
