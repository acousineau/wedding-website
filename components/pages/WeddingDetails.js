import React from 'react'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import './WeddingDetails.scss'

const WeddingDetails = () => {
  return (
    <div className="WeddingDetails">
      <Hero className="Hero"></Hero>
      <Container>
        <header className="main-details">
          <p>
            Cocktail attire. Weather permitting, the ceremony will take place on sand. Comfortable
            shoes are encouraged.
          </p>
          <p>
            Due to venue size restrictions, we ask that no children under the age of 13 attend the
            wedding reception.
          </p>
        </header>
        <section className="schedule">
          <article>
            <header>
              <h3>Saturday, Sept 12, 2020</h3>
              <h4>4:15: Ceremony at Edgartown Lighthouse</h4>
              <p className="t-bold">230 N Water St, Edgartown</p>
            </header>
            <p>
              <span className="t-bold">Directions:</span> The path to the lighthouse begins across
              the street from the Harbor View Hotel. Please allow time for a 5 - 10 minute walk from
              the street, with sandy areas.
            </p>
          </article>
          <article style={{ marginBottom: '50px' }}>
            <header>
              <h4>5:00pm: Reception at Atria</h4>
              <p className="t-bold">137 Main St, Edgartown</p>
            </header>
            <p>
              Please join us for dinner and dancing at Atria following the ceremony. We will offer a
              shuttle service to guests. It is a 20 - 25 minute walk directly from the Edgartown
              Lighthouse.
            </p>
          </article>
          <article>
            <header>
              <h3>Sunday, Sept 13, 2020</h3>
              <h4>9:30am - 11:30am: Brunch at the Harbor View Hotel</h4>
              <p className="t-bold">131 N Water St, Edgartown</p>
            </header>
            <p>
              Please join us for a post-wedding brunch at the Harbor View Hotel before you head
              home!
            </p>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default WeddingDetails
