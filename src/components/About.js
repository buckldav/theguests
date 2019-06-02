import React from 'react'

const About = () => (
  <section className="center-vert" id="about">
    <img src={window.location.origin + "/img/band.jpg"} alt="The Guests Band" style={{maxWidth: "360px"}} />
    <p style={{textAlign: "center"}}>
      The Guests are a jazz and soul band based out of Provo, Utah, playing in and around Utah County.
      From small beginnings in February 2018 playing for a friend's birthday, The Guests have played at restaurants, parties, church events, and weddings.
      The Guests are unique in that they play anything from jazz standards to Top 40 Hits and background music to tunes that will bring down the house.
      You won't find a band at our prices that can fit your event needs quite like this one in Utah.
    </p>
  </section>
)

export default About