// Handles loading the events for <model-viewer>'s slotted progress bar

customElements.whenDefined('model-viewer').then(() => {                //skybox rotation
  const skyboxViewer = document.querySelector('#skybox-bg');
  
  if (!skyboxViewer) {
    console.error('Skybox-Element nicht gefunden!');
    return;
  }

  document.addEventListener("click", () => {
    const musik = document.getElementById("hg-musik");
    musik.play(); 
}, { once: true });




  let angle = 0;
  setInterval(() => {
    angle = (angle + 0.1) % 360;
    skyboxViewer.cameraOrbit = `${angle}deg 75deg auto`;
  }, 50);
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
document.querySelector('model-viewer').addEventListener('progress', onProgress);

customElements.whenDefined('model-viewer').then(() => {               //animated flower 
  const blume = document.querySelector('#animated-flower');
  const weiterButton = document.querySelector('#weiter-link');
  const sound = new Audio("musik/magic.mp3");

  blume.addEventListener('load', () => {
    // Zum Testen: zeigt dir alle verfügbaren Animationsnamen in der Konsole
    console.log('Verfügbare Animationen:', blume.availableAnimations);
  
  });

 
  blume.addEventListener('click', () => {
  console.log('Blume wurde angeklickt!');
  sound.currentTime = 0;
  blume.animationName = 'Scene';
  blume.play({ repetitions: 1 });
  sound.play().catch(error => {
    console.error("The sound could not be played:", error);
  });


  const dauerInSekunden = blume.duration || 11;
  setTimeout(() => {
    weiterButton.classList.remove('hide');
  }, dauerInSekunden * 1000);
});

});

