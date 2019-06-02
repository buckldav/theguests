import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPlay, faForward, faStop, faUndo, faVolumeOff, faExpand, faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';

class PromoVideo extends React.Component {
  state = {
    play: faPause,
    mute: faVolumeUp
  }

  componentDidMount() {
    // Video
    const btnClose = document.querySelector('.btn-close');
    const btnBackward = document.querySelector('.btn-backward');
    const btnExpand = document.querySelector('.btn-expand');
    const btnMute = document.querySelector('.btn-mute');
    const btnPlay = document.querySelector('.btn-play');
    const btnForward = document.querySelector('.btn-forward');
    const btnReset = document.querySelector('.btn-reset');
    const btnStop = document.querySelector('.btn-stop');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const videoElement = document.querySelector('.video-element');

    // Toggle full-screen mode
    const expandVideo = () => {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        // Version for Firefox
         videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        // Version for Chrome and Safari
        videoElement.webkitRequestFullscreen();
      }
    }

    // Move the video backward for 5 seconds
    const moveBackward = () => {
      videoElement.currentTime -= 5;
    }

    // Move the video forward for 5 seconds
    const moveForward = () => {
      videoElement.currentTime += 5;
    }

    // Mute the video
    const muteVideo = () => {
      if (videoElement.muted) {
        videoElement.muted = false;
            
        this.setState({mute: faVolumeUp});
      } else {
        videoElement.muted = true;
            
        this.setState({mute: faVolumeOff});
      }
    }

    // Play / Pause the video
    const playPauseVideo = () => {
      if (videoElement.paused) {
        videoElement.play();
            
        this.setState({play: faPause});
      } else {
        videoElement.pause();
            
        this.setState({play: faPlay});
      }
    }

    // Restart the video
    const restartVideo = () => {
      videoElement.currentTime = 0;

      btnPlay.removeAttribute('hidden');
      btnReset.setAttribute('hidden', 'true');
    }

    // Stop the video
    const stopVideo = () => {
      videoElement.pause();
      videoElement.currentTime = 0;
      this.setState({play: faPause});
      $("#promo-video").fadeOut('fast');
    }

    // Update progress bar as the video plays
    const updateProgress = () => {
      // Calculate current progress
      let value = (100 / videoElement.duration) * videoElement.currentTime;

      // Update the slider value
      progressBarFill.style.width = value + '%';
    }

    // Event listeners
    btnClose.addEventListener('click', stopVideo, false);
    btnBackward.addEventListener('click', moveBackward, false);
    btnExpand.addEventListener('click', expandVideo, false);
    btnMute.addEventListener('click', muteVideo, false);
    btnPlay.addEventListener('click', playPauseVideo, false);
    btnForward.addEventListener('click', moveForward, false);
    btnReset.addEventListener('click', restartVideo, false);
    btnStop.addEventListener('click', stopVideo, false);
    videoElement.addEventListener('ended', () => {
      btnPlay.setAttribute('hidden', 'true');
      btnReset.removeAttribute('hidden');
    }, false);
    videoElement.addEventListener('timeupdate', updateProgress, false);
  }

  render() {
    return (
      <div id="promo-video" className="video-wrapper">
        <button className="btn-close">&times;</button>

        <video className="video-element" preload="auto">
          <source src={window.location.origin + "/video/promo.mp4"} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      
        <div className="video-controls">
          <button className="btn btn-backward"><FontAwesomeIcon icon={faBackward} /></button>
      
          <button className="btn btn-play"><FontAwesomeIcon icon={this.state.play} /></button>
      
          <button className="btn btn-forward"><FontAwesomeIcon icon={faForward} /></button>
      
          <button className="btn btn-stop"><FontAwesomeIcon icon={faStop} /></button>
      
          <button className="btn btn-reset" hidden><FontAwesomeIcon icon={faUndo} /></button>
      
          <button className="btn btn-mute"><FontAwesomeIcon icon={this.state.mute} /></button>
      
          <button className="btn btn-expand"><FontAwesomeIcon icon={faExpand} /></button>
        </div>
      
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
          </div>
        </div>
    )
  }
}

export default PromoVideo;