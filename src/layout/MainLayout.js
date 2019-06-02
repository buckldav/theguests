import React from 'react'
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainLayout extends React.Component {
  closeSidebar() {
    const sidebar = document.getElementById("site-sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.className = "close";
    overlay.className = "hide";
  }

  openSidebar() {
    const sidebar = document.getElementById("site-sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.className = "open";
    overlay.className = "show";
  }

  render() {
    return (
      <>
        <Sidebar />
        <div id="container">
          <header id="mobile-header">
            <a href="/"><h3>The Guests</h3></a>
            <button id="sidebar-button" onClick={() => this.openSidebar()}><FontAwesomeIcon icon="bars" /></button>
          </header>
          <div id="overlay" onClick={() => this.closeSidebar()}></div>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default MainLayout