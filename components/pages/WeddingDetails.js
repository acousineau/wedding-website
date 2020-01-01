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
          <p>
            We love your kids, we really do! However, due to venue size restrictions, we are having
            an <strong>adults only</strong> wedding.
          </p>
        </header>
        <section className="schedule">
          <article>
            <header>
              <h3>Saturday, Sept 12,&nbsp;2020</h3>
              <h4>4:15pm: Ceremony at Edgartown&nbsp;Lighthouse</h4>
              <p className="t-bold">230 N Water St,&nbsp;Edgartown</p>
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
              Please join us for dinner and dancing at Atria following the ceremony. We will offer a
              shuttle service to guests. It is a 20 - 25 minute walk directly from the
              Edgartown&nbsp;Lighthouse.
            </p>
          </article>
          <article>
            <header>
              <h3>Sunday, Sept 13,&nbsp;2020</h3>
              <h4>9:30am - 11:30am: Brunch at the Harbor View&nbsp;Hotel</h4>
              <p className="t-bold">131 N Water St,&nbsp;Edgartown</p>
            </header>
            <p>
              Please join us for a post-wedding brunch at the Harbor View Hotel before you
              head&nbsp;home!
            </p>
          </article>
        </section>
      </Container>
    </div>
  )
}

export default WeddingDetails