

const onProgress = (event) => {                                        //checking of models are loaded
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);



const sound = new Audio("musik/psy.mp3");

sound.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});
