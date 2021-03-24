let video = document.querySelector('video');

async function onOpenCameraButtonClick() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
    video.srcObject = stream;
    await video.requestPictureInPicture();
  } catch(error) {
    log(`> Argh! ${error}`);
  }
}

try {
  navigator.mediaSession.setActionHandler('togglemicrophone', function(event) {
    log('> User clicked "Toggle Mic" icon.');
    // TODO
  });
} catch(error) {
  log('Warning! The "togglemicrophone" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler('togglecamera', function(event) {
    log('> User clicked "Toggle Camera" icon.');
    // TODO
  });
} catch(error) {
  log('Warning! The "togglecamera" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler('hangup', function(event) {
    log('> User clicked "Hang Up" icon.');
    // TODO
  });
} catch(error) {
  log('Warning! The "hangup" media session action is not supported.');
}
