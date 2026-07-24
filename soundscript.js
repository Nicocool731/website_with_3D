




const sound = new Audio("./music-for-videos-donx27t-say-goodbye-funny-electro-swing-song-151282.mp3");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});

