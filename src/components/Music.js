import React from 'react'
import {FacebookVideos1, FacebookVideos2, FacebookVideos3} from '../json/facebookVideos'
import FacebookVideo from './FacebookVideo'
import { Album } from './Album'

import './music.scss';

const Music = () => (
  <main id="music">
    <section>
      
    </section>
    <section className="music-header">
      <div>
        <h1>Music</h1>
        <h4>EP: Mocktail Party</h4>
        <p>
          Our first EP "Mocktail Party" is out! Take a listen in this Spotify Player or visit any of the links below for streaming and purchasing.
        </p>
        <Album />
        <p>
          For more tunes, visit our <a href="https://www.facebook.com/theguestsjazz">facebook page</a>. 
        </p>
      </div>
      <iframe src="https://open.spotify.com/embed/album/1yVg3akb3JKMtpJ5dhaGDg" title="Mocktail Party" width="448" height="400" scrolling="no" frameborder="no" allowtransparency="true" allow="encrypted-media"></iframe>
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