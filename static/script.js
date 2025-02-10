document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".play-btn");
    const playIcon = playButton.querySelector("i");
    let isPlaying = false;

    playButton.addEventListener("click", function() {
        isPlaying = !isPlaying;
        playIcon.classList.toggle("fa-play", !isPlaying);
        playIcon.classList.toggle("fa-pause", isPlaying);
        console.log(isPlaying ? "Music Playing" : "Music Paused");
    });

    // Volume Control
    const volumeControl = document.querySelector("#volume");
    if (volumeControl) {
        volumeControl.addEventListener("input", function() {
            console.log("Volume: " + this.value);
        });
    }

    // Progress Bar
    const progressBar = document.querySelector("#progress");
    if (progressBar) {
        progressBar.addEventListener("input", function() {
            console.log("Seek Position: " + this.value);
        });
    }
});

// Navigation Buttons
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}