// Handles loading the events for <model-viewer>'s slotted progress bar

customElements.whenDefined('model-viewer').then(() => {                //skybox rotation
  const skyboxViewer = document.querySelector('#skybox-bg');
  
  if (!skyboxViewer) {
    console.error('Skybox-Element nicht gefunden!');
    return;
  }

  let angle = 0;
  setInterval(() => {
    angle = (angle + 0.1) % 360;
    skyboxViewer.cameraOrbit = `${angle}deg 75deg auto`;
    console.log('Aktueller Winkel:', angle);
  }, 50);
});


document.querySelectorAll('model-viewer').forEach((viewer) => {           //???
  if (viewer.querySelector('.progress-bar')) {
    viewer.addEventListener('progress', onProgress);
  }
});


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

customElements.whenDefined('model-viewer').then(() => {               //animated flower 
  const blume = document.querySelector('#animated-flower');

  blume.addEventListener('load', () => {
    // Zum Testen: zeigt dir alle verfügbaren Animationsnamen in der Konsole
    console.log('Verfügbare Animationen:', blume.availableAnimations);
  });

  blume.addEventListener('click', () => {
    blume.play({ repetitions: 1 });
  });
});




