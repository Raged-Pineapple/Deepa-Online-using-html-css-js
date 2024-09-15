document.getElementById("playButton").addEventListener("click", function() {
    var iframe = document.getElementById("deepaVideo"); // Get the video iframe
    iframe.style.display = "block"; // Show the video
    var src = iframe.src;
    iframe.src = src.includes("autoplay=1") ? src : src + "&autoplay=1"; // Autoplay the video by adding autoplay parameter

    // Enter fullscreen mode
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});
