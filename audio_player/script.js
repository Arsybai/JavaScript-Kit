(function() {
    'use strict';

    // Constructor function for the AudioPlayer plugin
    function AudioPlayer(containerId, options) {
        // Store the audio player container
        this.container = document.getElementById(containerId);

        // Set default options
        this.options = Object.assign({
            source: '', // URL to the audio file
        }, options);

        // Initialize the audio player
        this.initAudioPlayer();
    }

    AudioPlayer.prototype.initAudioPlayer = function() {
        // Create an audio element
        const audioElement = document.createElement('audio');
        audioElement.src = this.options.source;
        audioElement.controls = true;

        // Append the audio element to the container
        this.container.appendChild(audioElement);
    };

    // Export the AudioPlayer as a global function or as an ES module
    if (typeof window === 'object') {
        window.AudioPlayer = AudioPlayer;
    }
    if (typeof exports === 'object') {
        module.exports = AudioPlayer;
    }
})();
