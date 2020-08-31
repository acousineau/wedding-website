import React from 'react'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import './WeddingDetails.scss'

const WeddingDetails = () => {
  return (
    <div className="WeddingDetails">
      <Hero className="Hero" />
      <Container>
        <header className="main-details">
          <p>
            Cocktail attire. Weather permitting, the ceremony will take place on sand. Comfortable
            shoes are&nbsp;encouraged.
          </p>
        </header>
        <section className="schedule">
          <article style={{ marginBottom: '50px' }}>
            <header>
              <h3>Friday, Sept 11,&nbsp;2020</h3>
              <h4>6:00pm: Welcome Party at at the Demski Residence</h4>
              <p className="t-bold">33 Anthier's Way,&nbsp;Edgartown</p>
              <p>Dinner and drinks will be served.</p>
            </header>
          </article>
          <article>
            <header>
              <h3>Saturday, Sept 12,&nbsp;2020</h3>
              <h4>4:00pm: Ceremony at Edgartown&nbsp;Lighthouse</h4>
              <p className="t-bold">121 N Water St,&nbsp;Edgartown</p>
            </header>
            <p>
              <span className="t-bold">Directions:</span> The path to the lighthouse begins across
              the street from the Harbor View Hotel. Please allow time for a 5 - 10 minute walk from
              the street, with sandy&nbsp;areas.
            </p>
          </article>
          <article style={{ marginBottom: '50px' }}>
            <header>
              <h4>5:00pm: Reception at&nbsp;Atria</h4>
              <p className="t-bold">137 Main St,&nbsp;Edgartown</p>
            </header>
            <p>
              Please join us for dinner at Atria following the ceremony. We will offer a shuttle
              service to guests. It is a 20 - 25 minute walk directly from the
              Edgartown&nbsp;Lighthouse.
            </p>
          </article>
          <article>
            <header>
              <h3>Sunday, Sept 13,&nbsp;2020</h3>
              <h4>10:00am - 12:00pm: Farewell Breakfast at the Demski Residence</h4>
              <p className="t-bold">33 Anthier's Way,&nbsp;Edgartown</p>
            </header>
            <p>Stop by for a light breakfast before you depart.</p>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default WeddingDetails
