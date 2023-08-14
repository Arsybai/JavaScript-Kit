# JavaScript-Kit
I make this actualy for personal use, but you can use it also.

## How to use it
I'll describe all of this one by one

### Notification
Simply create notification
```html
<script src="/notification/script.js"></script>
<script>
    notify(title="Hello World", body="Test Notification", icon="https://avatars.githubusercontent.com/u/33319709?v=4");
</script>
```

### Dragable
You can drag or move around some element with this
```html
<link rel="stylesheet" href="/dragable/style.css">
<script src="/dragable/script.js"></script>
<div class="draggable">
    Drag me around!
</div>
<div class="draggable">
    Drag this too!
</div>
```

### native_splash
create a custom "splash-like" effect in your web application using JavaScript and CSS, you can do so by creating an overlay that appears while the page is loading, and then fades out when the content is ready.
```html
<link rel="stylesheet" href="/native_splash/style.css">
<script src="/native_splash/script.js"></script>
<div class="splash" id="splash">
    <div class="splash-content">
        Loading...
    </div>
</div>
<div class="content" id="content">
    <!-- Your main content goes here -->
    <h1>Hello World</h1>
</div>
```

### google_map_widget
A JavaScript plugin that provides a widget to help implement Google Maps in my application.
```html
<!-- Include the Google Maps JavaScript API with your API key -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
<script src="/google_map_widget/script.js"></script>
<div id="map" style="width: 100%; height: 400px;"></div>
<script>
    // Create a new GoogleMapsWidget instance
    const mapWidget = new GoogleMapsWidget('map', {
        apiKey: 'YOUR_API_KEY', // Replace with your Google Maps API key
        center: { lat: 34.0522, lng: -118.2437 }, // Centered at Los Angeles
        zoom: 12
    });

    // You can use the public methods to update the map
    mapWidget.setCenter({ lat: 40.7128, lng: -74.0060 }); // Set new center
    mapWidget.setZoom(14); // Change the zoom level
</script>
```

### pull_to_refresh
updates by pulling from the top down on the device and performs the loading.
```html
<link rel="stylesheet" href="/pull_to_refresh/style.css">
<script src="/pull_to_refresh/script.js"></script>
<div id="refreshContainer" class="refresh-container">
    <div class="refresh-content">
        <!-- Your main content goes here -->
        <h1>Welcome to My Web App</h1>
        <p>Pull down to refresh</p>
    </div>
</div>
<script>
    const refreshContainer = document.getElementById("refreshContainer");
    
    // Initialize the pull-to-refresh plugin
    const pullToRefresh = new PullToRefresh(refreshContainer, {
        refreshCallback: function() {
            // Perform the refresh action here
            console.log("Refreshing...");
            // Simulate refreshing for 2 seconds
            setTimeout(function() {
                // After the refresh is complete, call the done() method
                pullToRefresh.done();
                console.log("Refresh completed");
            }, 2000);
        }
    });
</script>
```

### audio_player
Creating a comprehensive audio player as a JavaScript plugin involves handling audio playback, user interactions, controls, and audio source management.
```html
<link rel="stylesheet" href="/audio_player/style.css">
<script src="/audio_player/script.js"></script>
<div id="audioPlayerContainer" class="audio-player">
</div>
<script>
    // Initialize the audio player plugin
    const audioPlayer = new AudioPlayer('audioPlayerContainer', {
        source: '/audio_player/sample.mp3' // Replace with the URL to your audio file
    });
</script>
```

### drawer
ofc. for make a drawer
```html
<link rel="stylesheet" href="/drawer/style.css">
<script src="/drawer/script.js"></script>
<div id="app">
    <button id="openDrawerButton">Open Drawer</button>
    <div id="drawer" class="drawer">
        <div class="drawer-content">
            <!-- Drawer content goes here -->
            <h2>Drawer Content</h2>
            <p>This is the content of the drawer.</p>
        </div>
    </div>
</div>
<script>
    const drawer = new Drawer('drawer', 'openDrawerButton');
</script>
```

### bottom_nav
A beautiful and animated bottom navigation. The navigation bar use your current theme, but you are free to customize it.
```html
<link rel="stylesheet" href="/bottom_nav/style.css">
<script src="/bottom_nav/script.js"></script>
<div id="app">
    <div class="content">
        <!-- Your main content goes here -->
        <h1>Welcome to My App</h1>
    </div>
    <nav class="bottom-navigation">
        <a href="#" class="nav-item active">
            <span class="icon">🏠</span>
            <span class="label">Home</span>
        </a>
        <a href="#" class="nav-item">
            <span class="icon">📷</span>
            <span class="label">Gallery</span>
        </a>
        <a href="#" class="nav-item">
            <span class="icon">🔍</span>
            <span class="label">Search</span>
        </a>
        <a href="#" class="nav-item">
            <span class="icon">👤</span>
            <span class="label">Profile</span>
        </a>
    </nav>
</div>
<script>
    const bottomNav = new BottomNavigation('bottom-navigation');
</script>
```
### toast
Make a toast. a simple message in bottom
```html
<link rel="stylesheet" href="/toast/style.css">
<script src="/toast/script.js"></script>
<body>
<script>
    const toast = new Toast();
    toast.show("This is a toast message", 3000); // Message, duration in milliseconds
</script>
</body>
```

### click_to_copy
with the "copy" class and using the Clipboard API to copy the text within that element.
```html
<p class="copy">Click to copy this text.</p>
<p class="copy">Copy me too!</p>
<script src="/click_to_copy/script.js"></script>
```