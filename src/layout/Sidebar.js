import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => (
  <aside id="site-sidebar">
    <h1><a href="/">The Guests</a></h1>
    <p>Wedding, Party, Event Band</p>
    <nav id="site-nav">
      <a href="/about">ABOUT</a>
      <a href="/shows">SHOWS</a>
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

export default Sidebar;