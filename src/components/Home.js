import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import PromoVideo from './PromoVideo'
import { AlbumModal } from './Album'

import './home.scss'
import About from './About';
import Shows from './Shows';

class Home extends React.Component {

  state = {
    modalDisplay: "",
  }

  handleModal = event => {
    this.setState({modalDisplay: ""});
  }

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
      $('html, body').scrollTop($('#about').offset().top - offset);
    }
    if (window.location.pathname.includes("shows")) {
      $('html, body').scrollTop($('#shows').offset().top - offset);
    }
    
    setTimeout(() => {
      if (window.location.pathname === "/") {
        this.setState({modalDisplay: "show"});
      }
    }, 2000);
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
        <AlbumModal className={this.state.modalDisplay} onClick={this.handleModal}/>
      </>
    )      
  }
}

export default Home;