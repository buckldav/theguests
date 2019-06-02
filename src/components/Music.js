import React from 'react'
import {FacebookVideos1, FacebookVideos2, FacebookVideos3} from '../json/facebookVideos'
import FacebookVideo from './FacebookVideo'

import './music.scss';

const Music = () => (
  <>
    <main className="music-desktop">
      <section className="gallery">
        {FacebookVideos1.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </section>
      <section className="gallery">
        {FacebookVideos2.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </section>
      <section className="gallery">
        {FacebookVideos3.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </section>
    </main>
    <main className="music-mobile">
      <section className="gallery">
        {FacebookVideos1.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
        {FacebookVideos2.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
        {FacebookVideos3.map(val => (
          <FacebookVideo title={val.title} src={val.src} vertical={val.vertical} />
        ))}
      </section>
    </main>
  </>
)

export default Music;