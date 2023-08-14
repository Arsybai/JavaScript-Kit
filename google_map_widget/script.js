// GoogleMapsWidget.js

(function() {
    'use strict';
  
    // Constructor function for the GoogleMapsWidget
    function GoogleMapsWidget(elementId, options) {
      // Store the target element where the map will be embedded
      this.element = document.getElementById(elementId);
      
      // Set default options
      this.options = Object.assign({
        apiKey: '',
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 10
      }, options);
  
      // Initialize the map
      this.initMap();
    }
  
    GoogleMapsWidget.prototype.initMap = function() {
      // Create a new Google Map instance
      this.map = new google.maps.Map(this.element, {
        center: this.options.center,
        zoom: this.options.zoom
      });
    };
  
    // Public method to change the map center
    GoogleMapsWidget.prototype.setCenter = function(center) {
      if (center && center.lat && center.lng) {
        this.map.setCenter(center);
      }
    };
  
    // Public method to change the map zoom level
    GoogleMapsWidget.prototype.setZoom = function(zoom) {
      if (zoom) {
        this.map.setZoom(zoom);
      }
    };
  
    // Export the GoogleMapsWidget as a global function or as an ES module
    if (typeof window === 'object') {
      window.GoogleMapsWidget = GoogleMapsWidget;
    }
    if (typeof exports === 'object') {
      module.exports = GoogleMapsWidget;
    }
  })();