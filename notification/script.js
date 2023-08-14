function notify(title, body, icon) {
    // Check if the browser supports notifications
    if ("Notification" in window) {
    // Request permission from the user
    Notification.requestPermission()
        .then(function (permission) {
        if (permission === "granted") {
            // Create a notification
            var notification = new Notification(title, {
            body: body,
            icon: icon, 
            });
            
            // Close the notification after a few seconds
            setTimeout(function () {
            notification.close();
            }, 5000); // 5000 milliseconds (5 seconds)
        }
        })
        .catch(function (error) {
        console.error("Error requesting notification permission:", error);
        });
    } else {
    console.log("This browser does not support notifications.");
    }
}