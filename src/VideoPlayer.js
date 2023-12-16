
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    console.log('Player is ready!');

  };

  const onStateChange = (event) => {
    switch (event.data) {
        case YouTube.PlayerState.ENDED:
          console.log('Video has ended.');
          break;
        case YouTube.PlayerState.PLAYING:
          console.log('Video is playing.');
          break;
        case YouTube.PlayerState.PAUSED:
          console.log('Video is paused.');
          break;
        case YouTube.PlayerState.BUFFERING:
          console.log('Video is buffering.');
          break;
        case YouTube.PlayerState.CUED:
          console.log('Video is cued.');
          break;
        default:
          console.log('Player state:', event.data);
      }
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} onStateChange={onStateChange} />;
};

export default VideoPlayer;
