

const sound = new Audio("musik/psy.mp3");

image.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    }); 
});

