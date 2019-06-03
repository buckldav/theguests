import React from 'react'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  scrollTo(id) {
    const offset = window.innerWidth <= 768 ? 60 : 0;
    if (window.location.pathname === "/" || 
        window.location.pathname === "/about" ||
        window.location.pathname === "/shows") {
      $('html, body').animate({scrollTop: $('#' + id).offset().top - offset }, 100);
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <aside id="site-sidebar">
        <h1><a href="/">The Guests</a></h1>
        <p>Wedding, Party, Event Band</p>
        <nav id="site-nav">
          <a href="/about" onClick={() => (this.scrollTo("about"))}>ABOUT</a>
          <a href="/shows" onClick={() => (this.scrollTo("shows"))}>SHOWS</a>
          <a href="/music">MUSIC</a>
          <a href="/contact">CONTACT</a>
          <span id="social">
            <a href="https://www.facebook.com/theguestsjazz"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></a>
            <a href="https://www.instagram.com/theguestsjazz"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
          </span>
        </nav>
        <footer>&copy; 2019 The Guests</footer>
      </aside>
    )
  }
}

export default Sidebar;