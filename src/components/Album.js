import React from 'react'

const Album = props => (
  <div style={{width: "100%", textAlign: "center"}}>
    <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/1yVg3akb3JKMtpJ5dhaGDg">Spotify</a>&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/album/mocktail-party-ep/1478306883">Apple Music</a>&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://store.cdbaby.com/cd/theguests">YouTube</a>&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=PLexC3HEaw47smETKePF0zv8UUPyx-7vzQ">CDBaby</a>
  </div>
)

const AlbumModal = props => (
  <main id="album-modal" className={props.className}>
    <section>
      <button onClick={props.onClick} style={{float: "right", fontSize: "150%", margin: "-24px -24px 0 0", padding: "0.5em"}}>&#215;</button>
      <p>Our first EP "Mocktail Party" is out! Visit any of the links below for streaming and purchasing.</p>
      <Album />
      <iframe style={{display: "block", margin: "1em auto"}} src="https://open.spotify.com/embed/album/1yVg3akb3JKMtpJ5dhaGDg" title="Mocktail Party" width="275" height="80" scrolling="no" frameborder="no" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>
  </main>
)

export {
  Album,
  AlbumModal
}