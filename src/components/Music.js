import React from 'react'
import {FacebookVideos1, FacebookVideos2, FacebookVideos3} from '../json/facebookVideos'
import FacebookVideo from './FacebookVideo'

import './music.scss';

const Music = () => (
  <main id="music">
    <section className="music-header">
      <div>
        <h1>Music</h1>
        <p>
          Here are some of our tunes. 
          For more, visit our <a href="https://www.facebook.com/theguestsjazz">facebook page</a>. 
        </p>
        <p>
          We were recently featured on <a href="https://www.coldhousestudio.com/">Cold House Studio</a>'s 2019 Collab Album featuring artists from Provo, Utah (Track 5: "Stay Awhile").
        </p>
      </div>
      <iframe title="Cold House Album" width="448" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/806886270&color=%23323236&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=false"></iframe>
    </section>
    <section className="music-desktop">
      <div className="gallery">
        {FacebookVideos1.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </div>
      <div className="gallery">
        {FacebookVideos2.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </div>
      <div className="gallery">
        {FacebookVideos3.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </div>
    </section>
    <section className="music-mobile">
      <div className="gallery">
        {FacebookVideos1.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
        {FacebookVideos2.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
        {FacebookVideos3.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </div>
    </section>
  </main>
)

export default Music;