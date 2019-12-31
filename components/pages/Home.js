import React from 'react'
import Link from 'next/link'
import Hero from '../styles/Hero'
import Container from '../styles/Container'

import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <Hero className="Hero">
        <h1>Claire and Andy</h1>
      </Hero>
      <Container>
        <section className="date-location">
          <p>Please join us for our wedding celebration&nbsp;on</p>
          <h3 style={{ color: '#274F7E' }}>September 12,&nbsp;2020</h3>
          <h4 style={{ color: '#274F7E' }}>Edgartown, Martha's&nbsp;Vineyard</h4>
        </section>
        <section className="booking">
          <p className="t-bold">Vineyard hotels are booking up&nbsp;quickly</p>
          <p>
            Head over to{' '}
            <Link href="/travel-lodging">
              <a>Travel &amp; Lodging</a>
            </Link>{' '}
            for suggestions on where to&nbsp;stay!
          </p>
        </section>
      </Container>
    </div>
  )
}

export default Home
