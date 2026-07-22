// Handles loading the events for <model-viewer>'s slotted progress bar
 <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js"></script>

const skyboxViewer = document.querySelector('#skybox-bg');
let angle = 0;

setInterval(() => {
  angle = (angle + 0.1) % 360;
  skyboxViewer.cameraOrbit = `${angle}deg 75deg 0m`;
}, 50);


const onProgress = (event) => {
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


