import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import PromoVideo from './PromoVideo'

import './home.scss'
import About from './About';
import Shows from './Shows';

class Home extends React.Component {

  state = {}

  handleVideo = event => { 
    $("#promo-video").addClass("play");
    $("#promo-video").fadeIn('slow');
    document.querySelector('.video-element').play();
  }

  componentDidMount() {
    // Scrolling background image
    this.setState({
      backgroundImage: "url(" + window.location.origin + "/img/mocktail.png)",
      boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.3)",
    })
    
    $(document).scroll(() => {
      if($(window).scrollTop() !== 0) {
        $("#home-play").css("z-index", -1);
      } else {
        $("#home-play").css("z-index", "unset");
      }
    });

    const offset = window.innerWidth <= 768 ? 60 : 0;
    if (window.location.pathname.includes("about")) {
      $('html, body').animate({scrollTop: $('#about').offset().top - offset }, 100);
    }
    if (window.location.pathname.includes("shows")) {
      $('html, body').animate({scrollTop: $('#shows').offset().top - offset }, 100);
    }    
  }

  render() {
    return (
      <>
        <div id="home-hero" style={this.state}></div>
        <button id="home-play" onClick={this.handleVideo}><FontAwesomeIcon icon={faPlay} className="pulse" />PLAY VIDEO</button>
        <PromoVideo />
        <main id="home-main">
          <About />
          <Shows />
        </main>
      </>
    )      
  }
}

export default Home;